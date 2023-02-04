import Logo from "../assets/icons/DoubleCheckIcon";

const NavBar = () => {
  return (
    <header className="fixed top-0 w-full z-10 text-gray-200 font-Poppins">
      <section className="bg-gray-900 py-[18px] flex items-center justify-center space-x-2">
        <h1 className="text-center text-lg">Taskify</h1>
        <Logo />
      </section>
      <hr className="border-1 border-gray-700" />
    </header>
  );
};

export default NavBar;
