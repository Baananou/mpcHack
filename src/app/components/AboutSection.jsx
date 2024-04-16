"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<div className="flex flex-row gap-10 items-center">
					<Image
						src="/images/about-image.png"
						width={250}
						height={250}
						alt="poly"
					/>
					<Image
						src="/images/hero-image.png"
						width={300}
						height={300}
						alt="poly"
						className="lg:mt-4"
					/>
				</div>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About us</h2>
					<p className="text-base lg:text-lg">
						I am a full stack web developer with a passion for creating
						interactive and responsive web applications. I have experience
						working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
						Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
						looking to expand my knowledge and skill set. I am a team player and
						I am excited to work with others to create amazing applications.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
