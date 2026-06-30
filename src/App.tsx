import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";

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
    </>
  );
}

export default App;
