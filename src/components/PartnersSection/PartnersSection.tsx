type Partner = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
};

type PartnersSectionProps = {
  partners: Partner[];
};

export const PARTNERS_EXAMPLE = [
  {
    id: "parceiro-1",
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ctaLabel: "Confira",
    ctaHref: "#",
    imageSrc: "/parceiros.webp",
    imageAlt: "Loja parceira Apple",
  },
  {
    id: "parceiro-2",
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ctaLabel: "Confira",
    ctaHref: "#",
    imageSrc: "/parceiros.webp",
    imageAlt: "Loja parceira Apple",
  },
];

export function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section aria-label="Parceiros" className="w-full px-4 py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
        {partners.map((partner) => (
          <article
            key={partner.id}
            className="relative aspect-[16/10] overflow-hidden rounded-lg"
          >
            <img
              src={partner.imageSrc}
              alt={partner.imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="relative flex h-full flex-col justify-center gap-2 px-6">
              <h3 className="text-2xl font-bold text-white text-start">
                {partner.title}
              </h3>
              <p className="max-w-[220px] text-sm text-neutral-200 text-start">
                {partner.description}
              </p>

              <a
                href={partner.ctaHref}
                className="mt-2 w-fit rounded-md bg-yellow-400 px-5 py-2 text-xs font-semibold uppercase text-neutral-900 transition-colors hover:bg-yellow-300"
              >
                {partner.ctaLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
