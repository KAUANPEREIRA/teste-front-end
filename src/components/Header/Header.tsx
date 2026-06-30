import { TopBar } from "./TopBar";
import { MainBar } from "./MainBar";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="hidden md:block">
        <TopBar />
      </div>
      <MainBar />
      <div className="hidden md:block">
        <NavBar />
      </div>
    </header>
  );
}
