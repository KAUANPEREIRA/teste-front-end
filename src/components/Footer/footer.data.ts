import type { FooterLinkGroup, SocialLink } from "./footer.types";

export const LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Institucional",
    links: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Movimento", href: "/movimento" },
      { label: "Trabalhe conosco", href: "/carreiras" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "Suporte", href: "/suporte" },
      { label: "Fale Conosco", href: "/contato" },
      { label: "Perguntas Frequentes", href: "/faq" },
    ],
  },
  {
    title: "Termos",
    links: [
      { label: "Termos e Condições", href: "/termos" },
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Troca e Devolução", href: "/troca-e-devolucao" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];
