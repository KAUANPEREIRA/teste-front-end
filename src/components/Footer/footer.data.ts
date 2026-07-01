import type { FooterLinkGroup, SocialLink } from "./footer.types";

export const LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Institucional",
    links: [
      { label: "Sobre Nós", href: "#" },
      { label: "Movimento", href: "#" },
      { label: "Trabalhe conosco", href: "#" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "Suporte", href: "#" },
      { label: "Fale Conosco", href: "#" },
      { label: "Perguntas Frequentes", href: "#" },
    ],
  },
  {
    title: "Termos",
    links: [
      { label: "Termos e Condições", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Troca e Devolução", href: "#" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];
