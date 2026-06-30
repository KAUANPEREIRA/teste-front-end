import type { FooterLinkGroup } from "./footer.types";

export function FooterColumn({ title, links }: FooterLinkGroup) {
  return (
    <nav aria-label={title}>
      <h3 className="text-sm font-bold text-gray-900 mb-3 text-start">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href} className="text-start">
            <a
              href={link.href}
              className="text-sm text-start text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
