import { SearchHeader } from "./SearchHeader";
import { TopoHeader } from "./TopoHeader"
import { CategoryMenu } from "./CategoryMenu"

export const Header = () => (
  <header>
    <TopoHeader/>
   <SearchHeader/>
   <CategoryMenu/>
  </header>
);