"use client";

import { BottomNav } from "@/components/features/dashboard/bottom-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LiveChatUpcomingPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col p-4 pb-24 md:p-6">
      {/* Header */}
      <header className="mb-6 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="size-9"
        >
          <ArrowLeft className="size-5" />
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">Live Chat</h1>
      </header>

      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center text-center">
        <Card className="w-full overflow-hidden border shadow-sm">
          <CardContent className="flex flex-col items-center p-8">
            <div className="relative mb-6">
              <div className="bg-primary/10 flex size-20 items-center justify-center rounded-full">
                <MessageCircle className="text-primary size-10" />
              </div>
              <div className="bg-amber-500 text-white absolute -top-1 -right-1 flex size-7 items-center justify-center rounded-full shadow-sm">
                <Sparkles className="size-4" />
              </div>
            </div>

            <div className="mb-2 flex items-center gap-2">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1 font-semibold text-xs">
                <Clock className="size-3.5" />
                Upcoming Feature
              </Badge>
            </div>

            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              In-App Live Chat is Coming Soon!
            </h2>

            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              We&apos;re building a fast, dedicated real-time chat experience right inside the app to serve you better.
            </p>

            <div className="bg-muted/50 mt-6 w-full rounded-xl border p-4 text-left">
              <p className="text-foreground text-xs font-semibold uppercase tracking-wider">
                Need Help Right Now?
              </p>
              <p className="text-muted-foreground mt-1 text-xs">
                Our support team is active and ready to assist you immediately on WhatsApp.
              </p>
              <Button className="mt-3 w-full gap-2 bg-emerald-600 text-white hover:bg-emerald-700" asChild>
                <Link
                  href="https://wa.me/2347082548106?text=Hello%20FMG%20Support"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp Now
                </Link>
              </Button>
            </div>

            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => router.back()}
            >
              Back to Help & Support
            </Button>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
