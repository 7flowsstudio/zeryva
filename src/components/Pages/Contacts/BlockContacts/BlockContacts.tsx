import React from "react";
import s from "./BlockContacts.module.css";
import Link from "next/link";

const BlockContacts = () => {
	return (
		<section className={s.contactSection}>
			<div className="container">
				<div className={s.contactsWrapper}>
					<div className={s.topBlock}>
						<h2 className={s.title}>Контакти</h2>
						<p className={s.description}>
							Ми завжди на зв’язку для консультацій та співпраці
						</p>
					</div>
					<ul className={s.contactsList}>
						<li className={s.contactsItem}>
							<h4 className={s.titleItem}>Телефон:</h4>
							<ul className={s.messegeList}>
								<li className={s.phone}>
									<Link href="tel:+380991885637" className={s.link}>
										+38 099 188 56 37
									</Link>
								</li>
								<li className={s.messegeItem}>
									<Link href="/" className={s.messageLink}>
										<svg className={s.iconMessage}>
											<use href="/sprite.svg#icon-watsapp"></use>
										</svg>
									</Link>
								</li>
								<li className={s.messegeItem}>
									<Link href="/" className={s.messageLink}>
										<svg className={s.iconMessage}>
											<use href="/sprite.svg#icon-telegram"></use>
										</svg>
									</Link>
								</li>
							</ul>
						</li>
						<li className={s.contactsItem}>
							<h4 className={s.titleItem}>Електронна пошта:</h4>
							<Link href="mailto:zadynamik@ukr.net" className={s.link}>
								zadynamik@ukr.net
							</Link>
						</li>
						<li className={s.contactsItem}>
							<h4 className={s.titleItem}>Адреса:</h4>
							<p className={s.addressText}>
								Рівненська обл., Рівненський р-н, <br />
								с. Велика Омеляна, вул. Шевченка, 35
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default BlockContacts;
