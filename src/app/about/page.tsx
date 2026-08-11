import { Footer } from "@/components/landing-page/footer";
import { Header } from "@/components/landing-page/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Clock,
  ShieldCheck,
  Zap,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | FMG Data Sub",
  description:
    "Learn about FMG Data Sub - your reliable VTU platform for data, airtime, and utility bill payments in Nigeria.",
};

export default function AboutPage() {
  const highlights = [
    {
      icon: Clock,
      title: "24/7 Customer Care Support",
      description: "Round-the-clock dedicated assistance whenever you need help.",
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200/50 dark:border-blue-900/50",
    },
    {
      icon: ShieldCheck,
      title: "Fast & Secure Transactions",
      description: "Bank-grade encryption protecting all wallet funding and orders.",
      color: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
    },
    {
      icon: Cpu,
      title: "API Integration",
      description: "Robust developer APIs for seamless automated vending.",
      color: "bg-purple-500/10 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400 border-purple-200/50 dark:border-purple-900/50",
    },
    {
      icon: Zap,
      title: "Zero Downtime",
      description: "High availability architecture ensuring continuous service delivery.",
      color: "bg-amber-500/10 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/50",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
              <Sparkles className="size-3.5 fill-primary" />
              <span>Your Reliable VTU Platform</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              About FMG Data Sub
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Empowering Nigerian businesses and individuals with automated, wallet-backed telecom and utility services.
            </p>
          </div>

          {/* Main Description Card */}
          <Card className="mb-12 border border-border bg-card shadow-sm transition-all duration-200 hover:shadow-md">
            <CardContent className="p-8 sm:p-10 leading-relaxed text-foreground/90 text-base sm:text-lg space-y-4">
              <p>
                <strong className="text-foreground font-bold">FMG Data Sub</strong> is a structured platform built to deliver essential telecom and utility services through a secure wallet-based system.
              </p>
              <p>
                Users can purchase airtime and data across supported networks, renew cable television subscriptions, pay electricity bills and receive tokens. All services are processed directly from the user’s funded wallet, with confirmations reflected immediately inside the dashboard.
              </p>
            </CardContent>
          </Card>

          {/* Core Highlights Grid */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md border border-border bg-card"
              >
                <CardHeader className="items-center pb-2">
                  <div className={`mb-3 rounded-full p-3.5 border ${item.color}`}>
                    <item.icon className="size-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Banner */}
          <Card className="bg-primary text-primary-foreground border-none shadow-lg">
            <CardContent className="p-8 sm:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-3 text-center md:text-left">
                  <h2 className="text-2xl font-bold">Ready to get started with FMG Data Sub?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-primary-foreground/90 text-sm">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <CheckCircle2 className="size-4 shrink-0 text-primary-foreground" />
                      <span>Instant Data &amp; Airtime Top-up</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <CheckCircle2 className="size-4 shrink-0 text-primary-foreground" />
                      <span>24/7 Automated Vending</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <CheckCircle2 className="size-4 shrink-0 text-primary-foreground" />
                      <span>Electricity &amp; Cable TV Bills</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <CheckCircle2 className="size-4 shrink-0 text-primary-foreground" />
                      <span>Developer API Access</span>
                    </div>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="shrink-0 font-bold transition-all duration-150 active:scale-[0.97]" asChild>
                  <Link href="/register" className="flex items-center gap-2">
                    Create Free Account
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
