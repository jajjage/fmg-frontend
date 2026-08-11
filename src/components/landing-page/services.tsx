import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wifi, Smartphone, Tv, Lightbulb, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Wifi className="text-primary h-7 w-7" />,
    title: "Buy Data Sub",
    description:
      "Instant data for MTN, Glo, Airtel, and 9mobile at the cheapest rates.",
    href: "/buy-data",
    badge: "Instant Delivery",
  },
  {
    icon: <Smartphone className="text-primary h-7 w-7" />,
    title: "Airtime Top-up",
    description: "Top-up any network with ease and get instant credit.",
    href: "/buy-airtime",
    badge: "0% Fee",
  },
  {
    icon: <Tv className="text-primary h-7 w-7" />,
    title: "TV Subscription",
    description: "Renew DStv, GOtv, and Startimes cable subscriptions instantly.",
    href: "/dashboard",
    badge: "Auto-Recharge",
  },
  {
    icon: <Lightbulb className="text-primary h-7 w-7" />,
    title: "Electricity Bills",
    description: "Pay KEDCO and other electricity bills conveniently & get tokens.",
    href: "/dashboard",
    badge: "Instant Token",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 border-b border-gray-100">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          All Essential Services in One Place
        </h2>
        <p className="text-muted-foreground mt-3 text-base sm:text-lg">
          Fast, automated, and wallet-backed utility payments for every Nigerian network.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {services.map((service) => (
          <Link href={service.href} key={service.title} className="group block">
            <Card className="h-full border-gray-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]">
              <CardHeader className="pt-6 pb-2">
                <div className="flex items-center justify-between">
                  <div className="bg-primary/10 rounded-2xl p-3.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-gray-100 px-2.5 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0" />
                </div>
                <CardDescription className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
