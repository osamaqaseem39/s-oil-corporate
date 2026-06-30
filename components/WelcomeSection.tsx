import { ceoWelcome } from "@/data/company";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          {ceoWelcome.title}
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            {ceoWelcome.leftColumn.map((paragraph, index) => (
              <p key={index} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-5">
            {ceoWelcome.rightColumn.map((paragraph, index) => (
              <p key={index} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <div className="text-right">
            <p className="text-sm text-muted">{ceoWelcome.signature.title}</p>
            <p className="mt-1 text-lg font-bold text-foreground">
              {ceoWelcome.signature.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
