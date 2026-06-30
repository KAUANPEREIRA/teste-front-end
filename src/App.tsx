import "./App.css";
import { Banner } from "./components/Banner/Banner";
import BrandCarousel from "./components/BrandCarousel/BrandCarousel";
import { CategoryNav } from "./components/Categorias/CategoryNav";
import { CopyrightBar } from "./components/Copyright/CopyrightBar";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NewsletterSection } from "./components/NewsLetter";
import {
  PARTNERS_EXAMPLE,
  PartnersSection,
} from "./components/PartnersSection/PartnersSection";
import { RelatedProducts } from "./components/RelatedProducts/RelatedProducts";

function App() {
  return (
    <>
      <Header />
      <Banner
        title="Venha conhecer nossas promoções"
        highlight="50% Off"
        ctaLabel="Ver produto"
        ctaHref="/promocoes/black-friday"
        imageSrc="/banner-econverse.webp"
        imageAlt="Vitrine de loja decorada com neon escrito Black Friday, anunciando promoções de até 50% de desconto"
      />
      <CategoryNav />
      <RelatedProducts />
      <PartnersSection partners={PARTNERS_EXAMPLE} />
      <RelatedProducts />
      <PartnersSection partners={PARTNERS_EXAMPLE} />
      <BrandCarousel />
      <RelatedProducts />
      <NewsletterSection />
      <Footer />
      <CopyrightBar
        text={`© ${new Date().getFullYear()} Econverse. Todos os direitos reservados.`}
      />
    </>
  );
}

export default App;
