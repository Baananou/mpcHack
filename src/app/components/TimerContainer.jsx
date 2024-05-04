"use client";
import React, { useState, useEffect } from "react";
import { NumberBox } from "./NumberBox";
import ArticleComponent from "./ArticleComponent";

export const TimerContainer = () => {
	const eventDate = new Date("2024-04-05T10:00:00");
	const eventEnd = new Date("2024-04-05T17:30:00");

	const calculateTimeLeft = () => {
		const now = new Date();
		const difference = eventDate - now;
		const endDifference = eventEnd - now;
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return { timeLeft, eventEnded: endDifference <= 0 };
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft().timeLeft);
	const [eventEnded, setEventEnded] = useState(calculateTimeLeft().eventEnded);

	useEffect(() => {
		if (!eventEnded) {
			const timer = setInterval(() => {
				const { timeLeft, eventEnded } = calculateTimeLeft();
				setTimeLeft(timeLeft);
				setEventEnded(eventEnded);
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [eventEnded]);

	const formatTime = (time) => {
		return time < 10 ? `0${time}` : time;
	};

	const { days, hours, minutes, seconds } = timeLeft;

	if (eventEnded) {
		return (
			<div className=" flex flex-col gap-6 my-24">
				<h1 className="text-center text-6xl max-sm:text-5xl font-bold">
					The Event has Ended
				</h1>
				<h2 className="text-center text-6xl max-sm:text-5xl font-bold">
					Thank You !!
				</h2>
			</div>
		);
	} else if (Object.keys(timeLeft).length === 0) {
		return (
			<div>
				<ArticleComponent />
			</div>
		);
	} else {
		return (
			<div className="mt-2 md:mt-20 rounded-xl">
				<h1 className="text-center text-6xl max-sm:text-5xl font-bold">
					Our Hackathon starts in
				</h1>
				<div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-6 md:py-8">
					<NumberBox num={formatTime(days)} unit="Days" />
					<span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
						:
					</span>
					<NumberBox num={formatTime(hours)} unit="Hours" />
					<span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
						:
					</span>
					<NumberBox num={formatTime(minutes)} unit="Minutes" />
					<span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
						:
					</span>
					<NumberBox num={formatTime(seconds)} unit="Seconds" />
				</div>
			</div>
		);
	}
};
