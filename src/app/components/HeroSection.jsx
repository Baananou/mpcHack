"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	FaLinkedin,
	FaFacebookSquare,
	FaInstagramSquare,
} from "react-icons/fa";

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello, Dear{" "}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								"Participants",
								1000,
								"Competitors",
								1000,
								// "Mobile Developer",
								// 1000,
								// "UI/UX Designer",
								// 1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Welcome to our Hackathon platform where you will find the subject of
						the competition, the rules, the prizes, and the registration form.
						We are waiting for you to participate in the competition and show
						your skills.
					</p>
					<div className="socials flex flex-row gap-2">
						<Link href="linkedin.com">
							<FaLinkedin size={50} />
						</Link>
						<Link href="instagram.com">
							<FaInstagramSquare size={50} />
						</Link>
						<Link href="facebook.com">
							<FaFacebookSquare size={50} />
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src="/images/hero-image.png"
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
