import Meta from "./Meta";
import { IMeta } from "../types/meta.interface";
import Header from "./header/Header";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Loader from "./loader/Loader";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({
	children,
	title,
	description,
	image,
}: PropsWithChildren<IMeta>) => {
	return (
		<>
			<Meta title={title} description={description} image={image} />
			<div className={inter.className}>
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
