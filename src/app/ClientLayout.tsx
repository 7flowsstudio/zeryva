"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BtnConsultation from "@/components/Sections/Hero/BtnConsultation/BtnConsultation";
import { useEffect, useState } from "react";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const isAdminOrLogin =
		pathname.startsWith("/admin") || pathname.startsWith("/login");
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const scrollContainer = document.getElementById("app-scroll");
		if (!scrollContainer) return;

		const handleScroll = () => {
			setIsScrolled(scrollContainer.scrollTop > 80);
		};

		scrollContainer.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => scrollContainer.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{!isAdminOrLogin && <Header isScrolled={isScrolled} />}
			{!isAdminOrLogin && <BtnConsultation isScrolled={isScrolled} />}
			<main>{children}</main>
			{!isAdminOrLogin && <Footer />}
		</>
	);
};
