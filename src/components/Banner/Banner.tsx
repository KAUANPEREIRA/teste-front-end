type BannerProps = {
  title: string;
  highlight: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

export function Banner({
  title,
  highlight,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: BannerProps) {
  return (
    <section
      aria-label="Banner promocional"
      className="relative w-full overflow-hidden"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        width={1920}
        height={300}
        loading="lazy"
        className="h-auto w-full object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col justify-center gap-3 px-8 md:px-16">
        <div className="flex flex-col gap-0">
          <h1 className="text-5xl font-semibold leading-[50px] tracking-normal !text-[#fff] text-start max-w-2xl">
            {title}
          </h1>
          <p className="text-3xl font-semibold text-start text-[#fff]">
            <span style={{ color: "#F7CA11" }}>{highlight}</span> nos produtos
          </p>
        </div>
        <a
          href={ctaHref}
          className="w-fit rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-yellow-300"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
