import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface Plan {
  plan: string;
  price: string;
  validity: string;
}

const pricingData: Record<
  string,
  { name: string; subtitle: string; plans: Plan[] }
> = {
  mtn: {
    name: "MTN",
    subtitle: "Fast & Reliable",
    plans: [
      { plan: "500MB (1-week)", price: "₦350", validity: "1-week" },
      { plan: "1GB (1-week)", price: "₦400", validity: "1-week" },
      { plan: "2GB (1-Month)", price: "₦800", validity: "1-month" },
      { plan: "3GB (1-Month)", price: "₦1,100", validity: "1-month" },
      { plan: "5GB (1-month)", price: "₦1,500", validity: "1-month" },
      { plan: "2.5GB", price: "₦750", validity: "1-Day" },
      { plan: "1GB (1-week)", price: "₦390", validity: "1-month" },
      { plan: "5GB (1-month)", price: "₦1,500", validity: "1-month" },
      { plan: "500MB", price: "₦500", validity: "1-week" },
      { plan: "1.5GB", price: "₦600", validity: "2-Days" },
      { plan: "2GB", price: "₦750", validity: "2-Days" },
      { plan: "1GB", price: "₦800", validity: "1-week" },
      { plan: "2.5GB", price: "₦900", validity: "2-Days" },
      { plan: "1.5GB", price: "₦1,000", validity: "1-week" },
      { plan: "3.2GB", price: "₦1,000", validity: "2-Days" },
      { plan: "3.5GB", price: "₦1,500", validity: "1-week" },
      { plan: "11GB", price: "₦3,500", validity: "1-week" },
      { plan: "10GB", price: "₦4,500", validity: "1-month" },
      { plan: "20GB", price: "₦5,000", validity: "1-week" },
      { plan: "20GB", price: "₦7,500", validity: "1-month" },
      { plan: "65GB", price: "₦16,000", validity: "1-month" },
      { plan: "36GB", price: "₦11,000", validity: "1-month" },
      { plan: "90GB", price: "₦25,000", validity: "2-month" },
      { plan: "800GB", price: "₦125,000", validity: "1-year" },
      { plan: "10GB (1-month)", price: "₦3,000", validity: "1-month" },
      { plan: "15GB (1-month)", price: "₦4,500", validity: "1-month" },
      { plan: "20GB (1-month)", price: "₦6,000", validity: "1-month" },
      { plan: "10GB (1-month)", price: "₦3,000", validity: "1-month" },
    ],
  },
  airtel: {
    name: "AIRTEL",
    subtitle: "Premium Quality",
    plans: [
      { plan: "150MB (1-day)", price: "₦70", validity: "1-Days" },
      { plan: "300MB (2-days)", price: "₦110", validity: "2 Days" },
      { plan: "600MB (2-days)", price: "₦220", validity: "2-Days" },
      { plan: "1GB social (3-Days)", price: "₦300", validity: "3-Days" },
      { plan: "2GB (2-Days)", price: "₦600", validity: "2-Day" },
      { plan: "3GB (3-Days)", price: "₦800", validity: "2-Days" },
      { plan: "5GB (1-week)", price: "₦1,500", validity: "1-month" },
      { plan: "10GB (1-month)", price: "₦3,100", validity: "1-month" },
      { plan: "1GB (1-week)", price: "₦800", validity: "1-week" },
      { plan: "1.5GB (1-week)", price: "₦1,000", validity: "1-week" },
      { plan: "5GB (1-week)", price: "₦1,500", validity: "1-week" },
      { plan: "2GB (1-Month)", price: "₦1,500", validity: "1-month" },
      { plan: "3GB (1-Month)", price: "₦2,000", validity: "1-month" },
      { plan: "8GB (1-month)", price: "₦3,000", validity: "1-Month" },
    ],
  },
  glo: {
    name: "GLO",
    subtitle: "Smooth Connection",
    plans: [
      { plan: "500MB (1-Month)", price: "₦220", validity: "1-month" },
      { plan: "1GB (1-Month)", price: "₦430", validity: "1-month" },
      { plan: "2GB (1-Month)", price: "₦850", validity: "1-month" },
      { plan: "3GB (1-Month)", price: "₦1,250", validity: "1-month" },
      { plan: "5GB (1-Month)", price: "₦2,100", validity: "1-month" },
      { plan: "10GB (1-Month)", price: "₦4,100", validity: "1-month" },
    ],
  },
  etisalat: {
    name: "ETISALAT",
    subtitle: "Always Connected",
    plans: [],
  },
};

function PricingTable({
  plans,
  subtitle,
}: {
  plans: Plan[];
  subtitle: string;
}) {
  if (plans.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-8 text-center bg-gray-50/50">
        <Sparkles className="mx-auto size-8 text-muted-foreground mb-3" />
        <h3 className="font-semibold text-lg text-gray-900">{subtitle}</h3>
        <p className="text-muted-foreground mt-1 text-sm">
          Custom data plans available. Register or log in to view latest rates.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/register">
              Get Started <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="bg-muted/40 px-6 py-3 border-b flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {subtitle}
        </span>
        <span className="text-xs text-muted-foreground">
          {plans.length} Plans Available
        </span>
      </div>
      <div className="max-h-[460px] overflow-y-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-white shadow-xs">
            <TableRow>
              <TableHead className="font-bold">Plan</TableHead>
              <TableHead className="font-bold">Validity</TableHead>
              <TableHead className="text-right font-bold">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plans.map((item, index) => (
              <TableRow key={`${item.plan}-${index}`}>
                <TableCell className="font-medium">{item.plan}</TableCell>
                <TableCell className="text-muted-foreground">
                  {item.validity}
                </TableCell>
                <TableCell className="text-right font-bold text-primary">
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 bg-gray-50/70 border-t text-center">
        <Button asChild className="w-full sm:w-auto">
          <Link href="/register">
            Get Started <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="container py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Our Data Plans &amp; Pricing
        </h2>
        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
          Affordable, instant, and automated data bundles across all major Nigerian telecom networks.
        </p>
      </div>

      <Tabs defaultValue="mtn" className="mt-10 max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="mtn" className="font-bold">
            MTN
          </TabsTrigger>
          <TabsTrigger value="airtel" className="font-bold">
            AIRTEL
          </TabsTrigger>
          <TabsTrigger value="glo" className="font-bold">
            GLO
          </TabsTrigger>
          <TabsTrigger value="etisalat" className="font-bold">
            ETISALAT
          </TabsTrigger>
        </TabsList>

        {Object.entries(pricingData).map(([key, data]) => (
          <TabsContent key={key} value={key} className="mt-6">
            <PricingTable plans={data.plans} subtitle={data.subtitle} />
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-10 text-center">
        <Button size="lg" asChild variant="outline">
          <Link href="/register">
            View All Products &amp; Register
          </Link>
        </Button>
      </div>
    </section>
  );
}
