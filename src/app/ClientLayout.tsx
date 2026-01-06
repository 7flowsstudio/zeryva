"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BtnConsultation from "@/components/Sections/Hero/BtnConsultation/BtnConsultation";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const isAdmin = pathname.startsWith("/admin");

	return (
		<>
			{!isAdmin && <Header />}
			{!isAdmin && <BtnConsultation />}
			<main>{children}</main>
			{!isAdmin && <Footer />}
		</>
	);
};
