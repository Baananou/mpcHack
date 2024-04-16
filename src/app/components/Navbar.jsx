"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";

const navLinks = [
	{
		title: "About",
		icon: <FaLinkedin size={40} />,
		path: "#about",
	},
	{
		title: "Projects",
		icon: <FaInstagramSquare size={40} />,
		path: "#projects",
	},
	{
		title: "Contact",
		icon: <FaFacebookSquare size={40} />,
		path: "#contact",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="z-50 fixed mx-auto border border-[#33353F] top-0 left-0 right-0 bg-[#121212] bg-opacity-100">
			<div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
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
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} icon={link.icon} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;
