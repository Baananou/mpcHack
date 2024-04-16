import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TimerContainer } from "./components/TimerContainer";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<p className="text-xl text-center">Our Hackathon starts in:</p>
				<TimerContainer />
			</div>

			<Footer />
		</main>
	);
}
