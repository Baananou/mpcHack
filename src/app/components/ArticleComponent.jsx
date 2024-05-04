import React from "react";
import Image from "next/image";
import Link from "next/link";
const ArticleComponent = () => {
	return (
		<div className="mt-28">
			<h1 className="text-center text-6xl max-sm:text-5xl font-bold">
				Let&apos;s Gooo !
			</h1>
			<div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col text-center">
				<div className="flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-10 w-full">
					<div className="text-[#9967FF]">Competition Desc</div>
					<button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] transition-all">
						<Link href="/Defi-Inno_challege.pdf">Download</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArticleComponent;
