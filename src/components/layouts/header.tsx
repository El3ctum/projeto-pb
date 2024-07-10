import Menu from "../ui/menu/menu";
import MenuItem from "../ui/menu/menuItem";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Menu>
        <MenuItem to="/" label="Home" />
        <MenuItem to="/system/about" label="About" />
        <MenuItem to="/system/auth/login" label="Login" />
      </Menu>
    </header>
  );
}

export default Header;
