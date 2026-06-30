// src/components/Header/Header.tsx
import { TopBar } from "./TopBar";
import { MainBar } from "./MainBar";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <TopBar />
      <MainBar />
      <NavBar />
    </header>
  );
}
