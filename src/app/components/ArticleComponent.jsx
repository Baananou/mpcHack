import React from "react";
import Image from "next/image";
import Link from "next/link";
const ArticleComponent = () => {
	return (
		<div className="article-container">
			<div className="banner">
				{/* <Image src="banner_image_url" alt="Banner" /> */}
			</div>
			<div className="description">
				<h3>Article Title</h3>
				<p>Description of the article...</p>
			</div>
			<div className="download-section">
				<h4>Download Files:</h4>
				<ul>
					<li>
						<Link href="file1_url" download>
							File 1
						</Link>
					</li>
					<li>
						<Link href="file2_url" download>
							File 2
						</Link>
					</li>
					{/* Add more files as needed */}
				</ul>
			</div>
		</div>
	);
};

export default ArticleComponent;
