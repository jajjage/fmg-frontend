"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, Shield, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Plan {
  plan: string;
  price: string;
  validity: string;
  category: "daily" | "weekly" | "monthly" | "yearly";
  popular?: boolean;
}

const pricingData: Record<
  string,
  { name: string; subtitle: string; color: string; plans: Plan[] }
> = {
  mtn: {
    name: "MTN",
    subtitle: "Fast & Reliable",
    color: "bg-yellow-500/10 text-yellow-700 border-yellow-200 dark:bg-yellow-950/30 dark:text-yellow-400 dark:border-yellow-800",
    plans: [
      { plan: "500MB", price: "₦350", validity: "1 Week", category: "weekly" },
      { plan: "1GB", price: "₦400", validity: "1 Week", category: "weekly" },
      { plan: "1GB", price: "₦390", validity: "1 Month", category: "monthly", popular: true },
      { plan: "2GB", price: "₦800", validity: "1 Month", category: "monthly", popular: true },
      { plan: "3GB", price: "₦1,100", validity: "1 Month", category: "monthly" },
      { plan: "5GB", price: "₦1,500", validity: "1 Month", category: "monthly", popular: true },
      { plan: "2.5GB", price: "₦750", validity: "1 Day", category: "daily" },
      { plan: "1.5GB", price: "₦600", validity: "2 Days", category: "daily" },
      { plan: "2GB", price: "₦750", validity: "2 Days", category: "daily" },
      { plan: "2.5GB", price: "₦900", validity: "2 Days", category: "daily" },
      { plan: "1.5GB", price: "₦1,000", validity: "1 Week", category: "weekly" },
      { plan: "3.5GB", price: "₦1,500", validity: "1 Week", category: "weekly" },
      { plan: "10GB", price: "₦3,000", validity: "1 Month", category: "monthly", popular: true },
      { plan: "11GB", price: "₦3,500", validity: "1 Week", category: "weekly" },
      { plan: "15GB", price: "₦4,500", validity: "1 Month", category: "monthly" },
      { plan: "20GB", price: "₦6,000", validity: "1 Month", category: "monthly" },
      { plan: "36GB", price: "₦11,000", validity: "1 Month", category: "monthly" },
      { plan: "65GB", price: "₦16,000", validity: "1 Month", category: "monthly" },
      { plan: "90GB", price: "₦25,000", validity: "2 Months", category: "yearly" },
      { plan: "800GB", price: "₦125,000", validity: "1 Year", category: "yearly" },
    ],
  },
  airtel: {
    name: "AIRTEL",
    subtitle: "Premium Quality",
    color: "bg-red-500/10 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800",
    plans: [
      { plan: "150MB", price: "₦70", validity: "1 Day", category: "daily" },
      { plan: "300MB", price: "₦110", validity: "2 Days", category: "daily" },
      { plan: "600MB", price: "₦220", validity: "2 Days", category: "daily" },
      { plan: "1GB Social", price: "₦300", validity: "3 Days", category: "daily" },
      { plan: "2GB", price: "₦600", validity: "2 Days", category: "daily" },
      { plan: "3GB", price: "₦800", validity: "3 Days", category: "daily" },
      { plan: "1GB", price: "₦800", validity: "1 Week", category: "weekly" },
      { plan: "1.5GB", price: "₦1,000", validity: "1 Week", category: "weekly" },
      { plan: "5GB", price: "₦1,500", validity: "1 Week", category: "weekly", popular: true },
      { plan: "2GB", price: "₦1,500", validity: "1 Month", category: "monthly" },
      { plan: "3GB", price: "₦2,000", validity: "1 Month", category: "monthly" },
      { plan: "8GB", price: "₦3,000", validity: "1 Month", category: "monthly", popular: true },
      { plan: "10GB", price: "₦3,100", validity: "1 Month", category: "monthly", popular: true },
    ],
  },
  glo: {
    name: "GLO",
    subtitle: "Smooth Connection",
    color: "bg-green-500/10 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-800",
    plans: [
      { plan: "500MB", price: "₦220", validity: "1 Month", category: "monthly" },
      { plan: "1GB", price: "₦430", validity: "1 Month", category: "monthly", popular: true },
      { plan: "2GB", price: "₦850", validity: "1 Month", category: "monthly", popular: true },
      { plan: "3GB", price: "₦1,250", validity: "1 Month", category: "monthly" },
      { plan: "5GB", price: "₦2,100", validity: "1 Month", category: "monthly", popular: true },
      { plan: "10GB", price: "₦4,100", validity: "1 Month", category: "monthly" },
    ],
  },
  etisalat: {
    name: "9MOBILE",
    subtitle: "Always Connected",
    color: "bg-emerald-500/10 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800",
    plans: [
      { plan: "1GB", price: "₦1,000", validity: "1 Month", category: "monthly", popular: true },
      { plan: "2.5GB", price: "₦1,500", validity: "1 Month", category: "monthly" },
      { plan: "4.5GB", price: "₦2,000", validity: "1 Month", category: "monthly", popular: true },
      { plan: "11GB", price: "₦4,000", validity: "1 Month", category: "monthly" },
    ],
  },
};

export function Pricing() {
  const [activeNetwork, setActiveNetwork] = useState("mtn");
  const [filter, setFilter] = useState<"all" | "monthly" | "weekly" | "daily">("all");

  const currentNetworkData = pricingData[activeNetwork];
  const filteredPlans =
    filter === "all"
      ? currentNetworkData.plans
      : currentNetworkData.plans.filter((p) => p.category === filter);

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto px-4 mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
          <Sparkles className="size-3.5" />
          <span>Cheapest Rates in Nigeria</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Transparent Data Pricing
        </h2>
        <p className="mt-3 text-muted-foreground text-base sm:text-lg">
          No hidden charges. Instant delivery directly to your phone.
        </p>
      </div>

      {/* SINGLE MASTER PRICING CARD */}
      <div className="max-w-4xl mx-auto px-4">
        <Card className="overflow-hidden border-gray-200 shadow-lg transition-all duration-200 hover:shadow-xl bg-white">
          {/* Card Top / Network Selection Header */}
          <CardHeader className="bg-gray-50/80 p-4 sm:p-6 border-b border-gray-100">
            <Tabs defaultValue="mtn" onValueChange={setActiveNetwork} className="w-full">
              <TabsList className="grid grid-cols-4 w-full h-12 bg-gray-200/70 p-1 rounded-xl">
                {Object.entries(pricingData).map(([key, data]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="font-bold text-xs sm:text-sm rounded-lg transition-all duration-150 active:scale-[0.97]"
                  >
                    {data.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Sub-header Bar: Network Slogan & Category Filters */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${currentNetworkData.color}`}
                >
                  <Zap className="size-3.5" />
                  {currentNetworkData.subtitle}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {currentNetworkData.plans.length} plans available
                </span>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border text-xs font-medium shadow-xs">
                {(["all", "monthly", "weekly", "daily"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-2.5 py-1 rounded-md transition-all duration-150 capitalize active:scale-[0.96] ${
                      filter === cat
                        ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>

          {/* Card Body: Non-Scrolling Grid of Plans inside Single Card */}
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredPlans.map((item, index) => (
                <div
                  key={`${item.plan}-${item.price}-${index}`}
                  className={`relative flex flex-col justify-between p-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    item.popular
                      ? "border-primary/40 bg-primary/5 dark:bg-primary/10"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  {item.popular && (
                    <span className="absolute -top-2.5 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      Popular
                    </span>
                  )}

                  <div>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {item.validity}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                      {item.plan}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-base font-extrabold text-primary">
                      {item.price}
                    </span>
                    <Button
                      size="sm"
                      variant={item.popular ? "default" : "outline"}
                      className="h-7 text-xs px-2.5 font-semibold transition-all duration-150 active:scale-[0.96]"
                      asChild
                    >
                      <Link href="/register">Buy</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer Section of Master Card */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/60 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 p-4 sm:p-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-green-600 shrink-0" />
                  <span>Instant Wallet Processing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="size-4 text-primary shrink-0" />
                  <span>24/7 Automated Vending</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto font-bold gap-2 px-6 shadow-md transition-all duration-150 active:scale-[0.97]"
                asChild
              >
                <Link href="/register">
                  Get Started Now
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
