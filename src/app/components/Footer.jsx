"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Footer = () => {
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="p-12 flex justify-between items-center">
				<Link
					href={"/"}
					className="text-2xl md:text-5xl text-white font-semibold">
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="col-span-4 place-self-center mt-4 lg:mt-0">
						<div className="w-12 h-12 lg:w-24 lg:h-24 relative">
							<Image
								src="/images/hero-image.png"
								alt="hero image"
								className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
								width={300}
								height={300}
							/>
						</div>
					</motion.div>
				</Link>
				<p className="text-slate-600 text-xl text-center">
					Made with ♡ By{" "}
					<Link
						href={"https://www.linkedin.com/in/mohamed-yessine-baananou/"}
						className="text-white font-semibold">
						Mohamed Yessine Baananou
					</Link>
				</p>
				<Link
					href={"/"}
					className="text-2xl md:text-5xl text-white font-semibold">
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="col-span-4 place-self-center mt-4 lg:mt-0">
						<div className="w-12 h-12 lg:w-24 lg:h-24 relative">
							<Image
								src="/images/about-image.png"
								alt="hero image"
								className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
								width={300}
								height={300}
							/>
						</div>
					</motion.div>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
