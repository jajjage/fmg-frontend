import Image from "next/image";

export function BetterTogether() {
  return (
    <section id="better-together" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
          <h2 className="text-foreground text-3xl leading-tight font-extrabold sm:text-4xl">
            Better Together, Worldwide
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Our platform is built to connect you with essential VTU services no matter where you are in the world. Experience instant automated delivery, 24/7 reliability, and secure transactions.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/world.png"
            alt="World"
            width={500}
            height={500}
            className="h-auto w-full max-w-md drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
