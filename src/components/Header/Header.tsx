// src/components/Header/Header.tsx
import { TopBar } from "./TopBar";
import { MainBar } from "./MainBar";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header>
      <TopBar />
      <MainBar />
      <NavBar />
    </header>
  );
}
