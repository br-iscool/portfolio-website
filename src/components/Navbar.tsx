const Navbar = () => {
  return (
    <>
      <header className = "absolute bg-black flex items-center justify-between z-10 w-full px-[9%] py-8 [filter:drop-shadow(10px)] [box-shadow:0_0_10px_#ffffff] select-none">
        <a href = "#" className = "nav-logo font-bold spec-purple text-[3rem] cursor-pointer [transition:0.5s_ease] hover:scale-110">Brian</a>
        <nav>
            <a href = "#" className = "font-medium text-white text-[1.8rem] ml-20 no-underline">Home</a>
            <a href = "#about" className = "font-medium text-white text-[1.8rem] ml-20 no-underline">About</a>
            <a href = "#" className = "font-medium text-white text-[1.8rem] ml-20 no-underline">Projects</a>
            <a href = "#" className = "font-medium text-white text-[1.8rem] ml-20 no-underline">Experience</a>
        </nav>
    </header>
    </>
  );
};

export default Navbar;
