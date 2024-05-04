import Image from "next/image";
import { useRef, useEffect } from "react";

const logos = [
	{ src: "/images/hero-image.png", alt: "MPC" },
	{ src: "/images/about-image.png", alt: "Poly" },
	{ src: "/images/gfi.png", alt: "GFI" },
	{ src: "/images/borgi.png", alt: "borgi" },
	{ src: "/images/ja8alino.jpg", alt: "ja8alino" },
	{ src: "/images/novation.jpg", alt: "novation" },
];

const LogoCarousel = () => {
	const logosRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const ul = logosRef.current;
		if (ul) {
			const clone = ul.cloneNode(true) as HTMLElement;
			ul.after(clone);
			clone.setAttribute("aria-hidden", "true");
		}
	}, []);

	return (
		<div className="mt-28">
			<h1 className="text-center text-6xl max-sm:text-5xl font-bold">
				Our Sponsors
			</h1>
			<div className="w-full inline-flex flex-nowrap overflow-hidden mask-image gap-2 mt-14">
				<ul
					ref={logosRef}
					className="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll">
					{logos.map((logo, index) => (
						<li key={index}>
							<Image
								width={120}
								height={120}
								src={logo.src}
								alt={logo.alt}
								className="max-w-none"
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default LogoCarousel;
