"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SecurityState {
  // PIN attempt tracking (for transactions)
  pinAttempts: number;
  /** @deprecated Kept for persisted-state compatibility. Client flows no longer lock here. */
  isBlocked: boolean;
  /** @deprecated Kept for persisted-state compatibility. Client flows no longer lock here. */
  blockExpireTime: number | null;

  // Actions
  initialize: () => void;
  recordPinAttempt: (success: boolean) => number;
  cleanup: () => void;
}

export const MAX_PIN_ATTEMPTS = 5;

export const useSecurityStore = create<SecurityState>()(
  persist(
    (set: any, get: any) => ({
      // Initial state
      pinAttempts: 0,
      isBlocked: false as boolean,
      blockExpireTime: null as number | null,

      initialize: () => {
        // Attempt handling is driven by the transaction flow. There is no
        // client-side timer/block because it could leave the PIN modal stuck.
      },

      /**
       * Track PIN attempts for transactions
       * - Success: Clear attempts
       * - Failure: Increment up to the reset threshold. The caller navigates
       *   to PIN reset on the fifth failed transaction attempt.
       */
      recordPinAttempt: (success: boolean) => {
        if (success) {
          set({
            pinAttempts: 0,
            isBlocked: false,
            blockExpireTime: null,
          });
          return 0;
        }

        const newAttempts = Math.min(
          get().pinAttempts + 1,
          MAX_PIN_ATTEMPTS
        );
        set({
          pinAttempts: newAttempts,
          // Do not persist a UI lock. The fifth failure is handled by the
          // transaction caller, which routes the user to PIN reset.
          isBlocked: false,
          blockExpireTime: null,
        });
        return newAttempts;
      },

      /**
       * Cleanup - called on app unmount
       */
      cleanup: () => {
        // Retained as a no-op for existing callers.
      },
    }),
    {
      name: "security-store",
      partialize: (state: any) => ({ pinAttempts: state.pinAttempts }),
      // Ignore legacy persisted lock fields so a user already stuck in the
      // previous five-minute block can use the PIN modal again.
      merge: (persistedState: any, currentState) => ({
        ...currentState,
        pinAttempts: Math.min(
          Number(persistedState?.pinAttempts) || 0,
          MAX_PIN_ATTEMPTS
        ),
        isBlocked: false,
        blockExpireTime: null,
      }),
    }
  )
);
