import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus, Wallet, Zap } from "lucide-react";

const steps = [
  {
    step: "1",
    icon: UserPlus,
    title: "Create an Account",
    description: "Sign up for free in less than 30 seconds with your email and phone number.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
  },
  {
    step: "2",
    icon: Wallet,
    title: "Fund Your Wallet",
    description: "Easily add funds to your secure FMG wallet via instant bank transfer.",
    color: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400",
  },
  {
    step: "3",
    icon: Zap,
    title: "Pay & Get Value",
    description: "Select data, airtime, or utility bills for instant 24/7 automated delivery.",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 border-t border-gray-100">
      <div className="text-center max-w-2xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          How It Works
        </h2>
        <p className="text-muted-foreground mt-3 text-base sm:text-lg">
          Get started and receive instant data value in 3 simple steps.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto px-4">
        {steps.map((item) => (
          <Card
            key={item.step}
            className="relative border-gray-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md text-center p-2"
          >
            <CardHeader className="items-center pb-2">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl mb-2 ${item.color}`}
              >
                <item.icon className="size-6" />
              </div>
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Step {item.step}
              </span>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-bold text-gray-900">
                {item.title}
              </CardTitle>
              <CardDescription className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
