import type { Metadata } from "next";
import "./globals.css";
import "./variables.css";
import { ClientLayout } from "./ClientLayout";

export const metadata: Metadata = {
	title: "Zeryva.com",
	description: "Інноваційні підходи до природного та стійкого розвитку культур",
	icons: {
		icon: "/icon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body id="app-scroll">
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
