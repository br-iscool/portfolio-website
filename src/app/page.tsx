import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  	return (
    	<>
      		{/* TODO
			Readd shader support
			Figure out props / and better project layout and structure
			Do about me section
			Remove redundant css and convert .css to tailwind and remove css folder
			Make the header look better (centered island?)
			animate on scroll? (testing with keyframes)
			<noscript> tag
			compatible on mobile (center the divs and make it overlap)
			make it so that box-shader doesnt break when resizing window
			turn off / on shader button
			Make footer 

			*/}

			<Navbar />
			<Hero />
			<About />
    	</>
  	);
}
