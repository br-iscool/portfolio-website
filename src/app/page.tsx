import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gradient from "@/components/Gradient";

export default function Home() {
	return (
		<>
			{/* TODO
			Finish dynamic island (get rid of npm and utils if current isn't good)
			Figure out props / and better project layout and structure
			Do about me section
			Make the header look better (centered island?)
			animate on scroll? (testing with keyframes)
			<noscript> tag
			compatible on mobile (center the divs and make it overlap)
			make it so that box-shader doesnt break when resizing window
			turn off / on shader button
			Make footer 

			*/}
			<Navbar />
			<Gradient />
			<Hero />
			<About />
		</>
	);
}
