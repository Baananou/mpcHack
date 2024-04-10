import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
	return (
		<Link
			href={href}
			className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
			{icon}
		</Link>
	);
};

export default NavLink;
