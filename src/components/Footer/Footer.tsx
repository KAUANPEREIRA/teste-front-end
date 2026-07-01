import { FooterColumn } from "./FooterColumn";
import { LINK_GROUPS, SOCIAL_LINKS } from "./footer.data";
import { IconInstagram, IconFacebook, IconLinkedin } from "./footer.icons";
import type { SocialIcon } from "./footer.types";
import type { ComponentType, SVGProps } from "react";

const LOGO_SRC = "/logo.webp";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const SOCIAL_ICON_MAP: Record<SocialIcon, ComponentType<IconProps>> = {
  instagram: IconInstagram,
  facebook: IconFacebook,
  linkedin: IconLinkedin,
};

export function Footer() {
  return (
    <footer className="w-full bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="md:w-1/3 md:pr-10 flex flex-col gap-4">
            <a href="/" aria-label="Página inicial">
              <img
                src={LOGO_SRC}
                alt="Econverse"
                className="h-9 w-auto"
                fetchPriority="high"
              />
            </a>

            <p className="text-sm text-gray-500 max-w-xs text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <ul className="flex items-start gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-8 h-8 rounded-full
                        border border-gray-300 text-gray-600 hover:border-gray-900
                        hover:text-gray-900 transition-colors"
                    >
                      <Icon size={14} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden md:block w-px bg-gray-300" />

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 md:pl-10">
            {LINK_GROUPS.map((group) => (
              <FooterColumn
                key={group.title}
                title={group.title}
                links={group.links}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
