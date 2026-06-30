import Image from "next/image";

interface ContentSectionProps {
  id?: string;
  title: string;
  tagline?: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export default function ContentSection({
  id,
  title,
  tagline,
  paragraphs,
  image,
  imageAlt,
  imagePosition = "right",
  className = "",
}: ContentSectionProps) {
  const textBlock = (
    <div>
      <h2 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2>
      {tagline && (
        <p className="mt-2 text-base font-medium text-teal sm:text-lg">{tagline}</p>
      )}
      <div className="mt-6 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-muted leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  const imageBlock = image ? (
    <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:h-full lg:min-h-[420px]">
      <Image
        src={image}
        alt={imageAlt || title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  ) : null;

  if (!image) {
    return (
      <section id={id} className={`py-16 ${className}`}>
        <div className="mx-auto max-w-3xl px-4">{textBlock}</div>
      </section>
    );
  }

  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            imagePosition === "left" ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {imagePosition === "left" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
