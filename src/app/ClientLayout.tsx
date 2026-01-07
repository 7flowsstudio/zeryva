"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BtnConsultation from "@/components/Sections/Hero/BtnConsultation/BtnConsultation";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAdminOrLogin =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  return (
    <>
      {!isAdminOrLogin && <Header />}
      {!isAdminOrLogin && <BtnConsultation />}
      <main>{children}</main>
      {!isAdminOrLogin && <Footer />}
    </>
  );
};
