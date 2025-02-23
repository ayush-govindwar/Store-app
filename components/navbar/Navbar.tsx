import Container from '../global/container';
import CartButton from './CartButton';
import DarkMode from './Darkmode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import Navsearch from './NavSearch';

function Navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'>
        <Logo />
        
        <Navsearch />
        
        
        <CartButton />
        <DarkMode />
        <LinksDropdown />
        
      </Container>
    </nav>
  );
}
export default Navbar;
