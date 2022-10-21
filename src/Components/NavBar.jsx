const NavBar = () => {
  return (
    <div className="sticky top-0 w-full z-10">
      <nav className="flex justify-center items-center bg-gray-900 py-[18px]">
        <h1 className="font-Poppins text-white font-semibold tracking-widest">
          Tasks ✔
        </h1>
      </nav>
      <hr className="border-1 border-gray-700" />
    </div>
  );
};

export default NavBar;
