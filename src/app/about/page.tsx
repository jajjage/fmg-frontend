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
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: ShieldCheck,
      title: "Fast and Secure Transactions",
      description: "Bank-grade encryption protecting all wallet funding and orders.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Cpu,
      title: "API Integration",
      description: "Robust developer APIs for seamless automated vending.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Zap,
      title: "Zero Downtime",
      description: "High availability architecture ensuring continuous service delivery.",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50/50">
        <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero / Header Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ABOUT US
            </h1>
            <p className="text-primary font-semibold text-lg sm:text-xl">
              Your reliable VTU Platform
            </p>
          </div>

          {/* Main Description Card */}
          <Card className="mb-12 shadow-sm border-gray-200">
            <CardContent className="p-8 sm:p-10 leading-relaxed text-gray-700 text-base sm:text-lg space-y-4">
              <p>
                <strong>FMG Data Sub</strong> is a structured platform built to
                deliver essential telecom and utility services through a secure
                wallet-based system.
              </p>
              <p>
                Users can purchase airtime and data across supported networks,
                renew cable television subscriptions, pay electricity bills and
                receive tokens. All services are processed directly from the user’s
                funded wallet, with confirmations reflected immediately inside the
                dashboard.
              </p>
            </CardContent>
          </Card>

          {/* Core Highlights Grid */}
          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="flex flex-col items-center text-center transition-shadow hover:shadow-md border-gray-200"
              >
                <CardHeader className="items-center pb-2">
                  <div className={`mb-3 rounded-full p-3.5 ${item.color}`}>
                    <item.icon className="size-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-gray-600">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Check List Banner */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 sm:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-3 text-center md:text-left">
                  <h2 className="text-2xl font-bold">Ready to get started with FMG Data Sub?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-primary-foreground/90 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>Instant Data &amp; Airtime Top-up</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>24/7 Automated Vending</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>Electricity &amp; Cable TV Bills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>Developer API Access</span>
                    </div>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="shrink-0 font-semibold" asChild>
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
