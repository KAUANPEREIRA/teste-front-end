export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export type SocialIcon = "instagram" | "facebook" | "linkedin";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}
