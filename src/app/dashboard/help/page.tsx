"use client";

import { BottomNav } from "@/components/features/dashboard/bottom-nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Clock,
  FileQuestion,
  Headphones,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function HelpSupportPage() {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp Channel",
      description: "Join our official channel for announcements & promos",
      action: "Join Channel",
      href: "https://whatsapp.com/channel/0029VbDb8rCCBtxEbfhWhw3Q",
      external: true,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Chat directly with our support team",
      action: "Start Chat",
      href: "https://wa.me/2347082548106?text=Hello%20FMG%20Support",
      external: true,
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Fast in-app customer support",
      action: "Upcoming",
      href: "/dashboard/help/live-chat",
      isUpcoming: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "fmgdatasub@gmail.com",
      action: "Send Email",
      href: "mailto:fmgdatasub@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "07082548106 (Available 9AM - 6PM)",
      action: "Call Now",
      href: "tel:07082548106",
    },
  ];

  const faqItems = [
    {
      value: "item-1",
      question: "How do I fund my wallet?",
      answer:
        "You can fund your wallet instantly using your dedicated Virtual Account Number displayed on your dashboard. Simply make a bank transfer from any Nigerian bank app or USSD to that account number, and your FMG wallet will be credited automatically within seconds 24/7.",
    },
    {
      value: "item-2",
      question: "Why is my transaction pending?",
      answer:
        "Most transactions process within 5 to 30 seconds. Occasionally, telecommunication network congestion may cause a temporary delay. If your transaction stays pending for more than 15 minutes, our system will automatically query the telco to complete it or refund your wallet balance.",
    },
    {
      value: "item-3",
      question: "How do I reset my transaction PIN?",
      answer:
        "To change or reset your transaction PIN, go to Profile > Security > Change Transaction PIN. You will be prompted for your account password to verify your identity and set a new 4-digit PIN.",
    },
    {
      value: "item-4",
      question: "What is cashback and how do I use it?",
      answer:
        "Cashback is an instant reward bonus credited to your account on qualifying data and airtime purchases. During checkout, you can toggle 'Use Cashback' to apply your available cashback balance as a discount towards your order.",
    },
    {
      value: "item-5",
      question: "How fast is data and airtime delivery?",
      answer:
        "All data bundles and airtime top-ups are automated via direct API integration with MTN, Airtel, Glo, and 9mobile, and are delivered to the recipient number within 5 to 30 seconds after payment confirmation.",
    },
    {
      value: "item-6",
      question: "What should I do if a ported number fails to receive data?",
      answer:
        "If you are sending data to a ported SIM card, check the option 'Bypass number validator for ported number' on the purchase screen and manually select the current network operator to ensure correct routing.",
    },
  ];

  return (
    <div className="space-y-6 p-4 pb-24 md:p-6">
      {/* Page Header */}
      <header className="flex items-center gap-4">
        <h1 className="flex-1 shrink-0 text-xl font-semibold tracking-tight whitespace-nowrap sm:grow-0">
          Help & Support
        </h1>
      </header>

      {/* Hero Card */}
      <Card className="from-primary to-primary/80 text-primary-foreground bg-gradient-to-r">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="mb-4 rounded-full bg-white/20 p-4">
              <Headphones className="size-10" />
            </div>
            <h2 className="text-lg font-semibold">We&apos;re Here to Help</h2>
            <p className="mt-2 text-sm opacity-90">
              Get assistance with your account, transactions, or any issues
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Options */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        {contactOptions.map((option) => (
          <Card key={option.title} className="overflow-hidden">
            <Link
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2">
                    <option.icon className="text-primary size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{option.title}</h3>
                      {option.isUpcoming && (
                        <Badge variant="secondary" className="gap-1 px-2 py-0 text-[10px] font-semibold">
                          <Clock className="size-2.5" />
                          Upcoming
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {option.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="text-muted-foreground size-5" />
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileQuestion className="size-5" />
            Frequently Asked Questions
          </CardTitle>
          <CardDescription>Click any question below to view the answer</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger className="text-sm font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <BottomNav />
    </div>
  );
}
