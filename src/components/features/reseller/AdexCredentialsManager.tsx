"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resellerService } from "@/services/reseller.service";
import type { AdexCredential, AdexCredentialSecret } from "@/types/reseller.types";

export function AdexCredentialsManager() {
  const [name, setName] = useState("");
  const [credentials, setCredentials] = useState<AdexCredential[]>([]);
  const [secret, setSecret] = useState<AdexCredentialSecret | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const load = useCallback(async () => {
    try { const result = await resellerService.getAdexCredentials(); setCredentials(result.data?.credentials ?? []); }
    catch (e) { setError(e instanceof Error ? e.message : "Could not load ADEX credentials"); }
  }, []);
  useEffect(() => { void load(); }, [load]);
  async function create(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    try { const result = await resellerService.createAdexCredential(name); if (!result.data) throw new Error(result.message); setSecret(result.data); setName(""); await load(); }
    catch (e) { setError(e instanceof Error ? e.message : "Could not create credentials"); }
    finally { setBusy(false); }
  }
  async function action(credential: AdexCredential, kind: "reset" | "revoke") {
    if (kind === "revoke" && !window.confirm(`Revoke ${credential.name}?`)) return;
    setBusy(true); setError("");
    try {
      if (kind === "reset") { const result = await resellerService.resetAdexCredential(credential.id); if (!result.data) throw new Error(result.message); setSecret(result.data); }
      else await resellerService.revokeAdexCredential(credential.id);
      await load();
    } catch (e) { setError(e instanceof Error ? e.message : `Could not ${kind} credential`); }
    finally { setBusy(false); }
  }
  return <section id="adex-credentials" className="space-y-4 rounded-xl border p-6">
    <div><h2 className="text-xl font-semibold">ADEX-compatible credentials</h2><p className="text-muted-foreground text-sm">Create a distinct username/password for every ADEX client. Passwords display once; reset to rotate them.</p></div>
    <form onSubmit={(e) => void create(e)} className="flex gap-2"><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Integration name" required /><Button disabled={busy}>{busy ? "Working…" : "Create credentials"}</Button></form>
    {error && <p role="alert" className="text-destructive text-sm">{error}</p>}
    {secret && <div className="space-y-2 rounded-lg bg-muted p-4"><p><b>Username:</b> <code>{secret.username}</code></p><p><b>Password:</b> <code>{secret.password}</code></p><p className="text-muted-foreground text-xs">Use these with your API base URL. The client validates the connection via /api/user. Save the password now; it cannot be retrieved later.</p></div>}
    <div className="space-y-2"><h3 className="font-medium">Configured integrations</h3>{credentials.length ? credentials.map((c) => <div key={c.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-3"><div><b>{c.name}</b><p className="text-muted-foreground font-mono text-sm">{c.username}</p><p className="text-xs">{c.is_active ? "Active" : "Revoked"}</p></div>{c.is_active && <div className="flex gap-2"><Button type="button" size="sm" variant="outline" disabled={busy} onClick={() => void action(c, "reset")}>Reset password</Button><Button type="button" size="sm" variant="destructive" disabled={busy} onClick={() => void action(c, "revoke")}>Revoke</Button></div>}</div>) : <p className="text-muted-foreground text-sm">No credentials created yet.</p>}</div>
  </section>;
}
