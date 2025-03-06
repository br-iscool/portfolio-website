import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gradient from "@/components/utils/Gradient";
import Scroll from "@/components/utils/Scroll";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

/* TODO
	Do about me section (add resume link)
	Finish Card component
	Do tech stack / skills section
	Do projects section
	Finish dynamic island (loading animation, styling)
	Add animations to everything
	Figure out props / and better project layout and structure
	<noscript> tag to display "this page cannot be viewed without javascript"
	compatible on mobile (center the divs and make it overlap)
	Make footer
*/

export default function Home() {
	return (
		<>
			<Scroll />
			<Navbar />
			<Gradient />
			<Hero />
			<About />
			<Skills />
			<Footer />
		</>
	);
}
