import React from "react";
import Navigation from "./Navigation/Navigation";
import Contacts from "./Contacts/Contacts";
import Social from "./Social/Social";
import Link from "next/link";
import Image from "next/image";
import s from "./Footer.module.css";
import Products from "./Products/Products";

const Footer = () => {
	return (
		<div className={s.footer}>
			<div className={s.wrappFooter}>
				<div className={s.contFooter}>
					<div className={s.logo}>
						<Link href="/">
							<Image
								src="/logo.svg"
								width={81}
								height={68}
								alt="logo"
								className={s.logoImage}
							/>
						</Link>
					</div>
					<div className={s.nav}>
						<Navigation />
						<div className={s.socM}>
							<Social />
						</div>
					</div>
					<div className={s.prodD}>
						<Products />
					</div>
					<div className={s.contacts}>
						<Contacts />
					</div>
					<div className={s.socials}>
						<div className={s.prodM}>
							<Products />
						</div>
						<div className={s.socD}>
							<Social />
						</div>
					</div>
				</div>

				<p className={s.rights}>© ТОВ “ЗЕРИВА” 2025. Всі права захищено!</p>
			</div>
		</div>
	);
};

export default Footer;
