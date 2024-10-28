import "../app/styles/index.css";

const Navbar = () => {
  return (
    <>
      <header className = "absolute bg-black flex items-center justify-between z-10">
        <a href = "#" className = "nav-logo font-bold spec-purple">Brian</a>
        <nav>
            <a href = "#" className = "font-medium text-white">Home</a>
            <a href = "#about" className = "font-medium text-white">About</a>
            <a href = "#" className = "font-medium text-white">Projects</a>
            <a href = "#" className = "font-medium text-white">Experience</a>
        </nav>
    </header>
    </>
  );
};

export default Navbar;
