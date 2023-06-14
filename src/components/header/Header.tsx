import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import clsx from "clsx";
import Container from "@/src/ui/container/Container";

interface IMenuLinks {
	title: string;
	url: string;
}

const menuLinks: IMenuLinks[] = [
	{ title: "Главная", url: "/" },
	{ title: "Блог", url: "/blog" },
	{ title: "Основы CG", url: "/cgb" },
	{ title: "Товары", url: "/products" },
];

const Header = () => {
	const { pathname } = useRouter();

	return (
		<header className={styles.root}>
			<Container>
				<div className={styles.container}>
					<nav>
						<ul className={styles.navList}>
							{menuLinks.map((item) => (
								<li key={item.url}>
									<Link
										className={clsx(pathname === item.url && styles.active)}
										href={item.url}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
};

export default Header;
