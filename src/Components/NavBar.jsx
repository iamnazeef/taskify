import Logo from "../assets/icons/DoubleCheckIcon";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full z-10 text-gray-200">
      <nav className="bg-gray-900 py-[18px] flex items-center justify-center space-x-2">
        <h1 className="text-center text-lg">Taskify</h1>
        <Logo />
      </nav>
      <hr className="border-1 border-gray-700" />
    </div>
  );
};

export default NavBar;
