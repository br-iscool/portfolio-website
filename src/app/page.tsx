import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gradient from "@/components/utils/Gradient";
import Scroll from "@/components/utils/Scroll";

export default function Home() {
	return (
		<>
			{/* TODO
			Refactor hero section
			Do about me section
			Do tech stack / skills section
			Finish dynamic island (loading animation, styling)
			Figure out props / and better project layout and structure
			<noscript> tag to display "this page cannot be viewed without javascript"
			compatible on mobile (center the divs and make it overlap)
			Make footer

			*/}
			<Scroll />
			<Navbar />
			<Gradient />
			<Hero />
			<About />
		</>
	);
}
