
import '../../componentes/header/header.scss'
import { CategoryMenu } from '../categoryMenu/CategoryMenu';
import { SearchHeader } from './SearchHeader';
import { TopoHeader } from './TopoHeader';

export const Header = () => (
  <header>
    <TopoHeader/>
   <SearchHeader/>
   <CategoryMenu/>
  </header>
);