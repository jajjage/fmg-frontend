import { Button } from "@/components/ui/button";
import { Phone, Wifi, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-8 pb-12 md:py-24 border-b border-gray-100">
      {/* Mobile View */}
      <div className="relative flex min-h-[520px] items-center bg-cover bg-center md:hidden rounded-2xl mx-4 overflow-hidden shadow-lg">
        <Image
          src="/images/hero-background.jpg"
          alt="Hero Background"
          fill
          className="z-0 object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
        <div className="relative z-10 w-full px-5 py-10">
          <div className="mx-auto max-w-xl text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
              <Zap className="size-3.5 text-yellow-400 fill-yellow-400" />
              <span>24/7 Automated Vending</span>
            </div>
            <h1 className="text-3xl leading-tight font-extrabold text-white sm:text-4xl">
              Instant Data, Airtime &amp; Bill Payments in Nigeria
            </h1>
            <p className="text-sm leading-relaxed text-white/90 sm:text-base max-w-md mx-auto">
              Get the cheapest MTN, Airtel, Glo &amp; 9mobile data bundles delivered instantly to your wallet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Button
                size="lg"
                className="gap-2 font-bold text-base shadow-lg transition-all duration-150 active:scale-[0.97]"
                asChild
              >
                <Link href="/buy-data">
                  <Wifi className="h-5 w-5" />
                  Buy Data Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 font-bold text-base transition-all duration-150 active:scale-[0.97]"
                asChild
              >
                <Link href="/buy-airtime">
                  <Phone className="h-5 w-5" />
                  Buy Airtime
                </Link>
              </Button>
            </div>
            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-white/80">
              <ShieldCheck className="size-4 text-green-400" />
              <span>Trusted by 5,000+ Nigerian Resellers &amp; Users</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="container mx-auto hidden md:block px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Zap className="size-3.5 text-primary fill-primary" />
            <span>Fast, Automated &amp; Secure VTU Platform</span>
          </div>

          <h1 className="text-foreground text-4xl leading-tight font-extrabold sm:text-5xl md:text-6xl tracking-tight max-w-4xl">
            Your Instant Hub for Data, Airtime &amp; Bills in Nigeria
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl leading-relaxed">
            Get the cheapest data bundles across all networks, top-up airtime, pay KEDCO/DStv bills, and access developer APIs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base font-bold shadow-md transition-all duration-150 active:scale-[0.97]"
              asChild
            >
              <Link href="/buy-data">
                <Wifi className="h-5 w-5" />
                Buy Data
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 py-6 text-base font-bold transition-all duration-150 active:scale-[0.97]"
              asChild
            >
              <Link href="/buy-airtime">
                <Phone className="h-5 w-5" />
                Buy Airtime
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium pt-2">
            <ShieldCheck className="size-4 text-green-600" />
            <span>Join 5,000+ satisfied customers nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
