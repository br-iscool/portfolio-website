import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gradient from "@/components/Gradient";

export default function Home() {
	return (
		<>
			{/* TODO
			Finish dynamic island (loading animation, other improvements)
			Redo hero section
			Figure out props / and better project layout and structure
			Do about me section
			<noscript> tag to display "this page cannot be viewed without javascript"
			compatible on mobile (center the divs and make it overlap)
			Make footer 

			*/}
			<Navbar />
			<Gradient />
			<Hero />
			<About />
		</>
	);
}
