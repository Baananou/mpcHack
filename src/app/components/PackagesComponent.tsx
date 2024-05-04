export const PackagesComponent = () => {
	return (
		<div className="mt-28">
			<h1 className="text-center text-6xl max-sm:text-5xl font-bold">Prizes</h1>
			<div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col text-center">
				<div className="flex-1 text-xl mt-14 rounded-xl border border-[#F7E16F]/25 bg-[#19170d] p-10 w-full">
					<div className="text-[#F7E16F]">First Place</div>
					<div className="text-6xl my-5 font-light">500 DT</div>
					<div> & Incubation avec Innovation City</div>
				</div>
				<div className="flex-1 text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#080C23] p-10 w-full">
					<div className="text-[#4d66e5]">Second Place</div>
					<div className="text-6xl my-5 font-light">200 DT</div>
				</div>
			</div>
		</div>
	);
};
