import type { Metadata } from "next";
import "./globals.css";
import "./variables.css";
import { ClientLayout } from "./ClientLayout";
import localFont from "next/font/local";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const ptSans = localFont({
	src: [
		{
			path: "../../public/fonts/PTSansCaptions/PTSansCaptionRegular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/PTSansCaptions/PTSansCaptionBold.woff",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-family",
	display: "swap",
});

const workSans = localFont({
	src: [
		{
			path: "../../public/fonts/WorkSans/WorkSansSemiBold.woff",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/WorkSans/WorkSansExtraBold.woff",
			weight: "800",
			style: "normal",
		},
	],
	variable: "--third-family",
	display: "swap",
});

export const metadata: Metadata = {
	title: `ТОВ "Zeryva" - офіційний сайт`,
	description:
		"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
	metadataBase: new URL("https://zeryva.com.ua"),
	verification: {
		google: "uFWpgT6WUx1lCoat34AJ48d9qzi59RWk0A1RsdaiW_Y",
	},
	alternates: {
		canonical: "https://zeryva.com.ua",
	},
	openGraph: {
		title: 'ТОВ "Zeryva" - офіційний сайт',
		description:
			"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
		url: "https://zeryva.com.ua",
		siteName: "Zeryva",
		type: "website",
		images: [
			{
				url: "/logo.svg",
				width: 504,
				height: 504,
				alt: "Zeryva",
			},
		],
	},
	icons: {
		icon: "/logo.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="uk" className={`${workSans.variable} ${ptSans.variable}`}>
			<head>
				{GA_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
							strategy="beforeInteractive"
						/>
						<Script id="google-analytics" strategy="beforeInteractive">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('set', 'cookie_domain', 'auto');
								gtag('config', '${GA_ID}', { cookie_domain: 'auto' });
							`}
						</Script>
					</>
				)}
				{GTM_ID && (
					<Script id="google-tag-manager" strategy="beforeInteractive">
						{`
							window.dataLayer = window.dataLayer || [];
							window.dataLayer.push({ cookie_domain: 'auto' });
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','${GTM_ID}');
						`}
					</Script>
				)}
			</head>
			<body id="app-scroll">
				{GTM_ID && (
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						/>
					</noscript>
				)}
				<ClientLayout>{children}</ClientLayout>
				<div id="modal-root" />
			</body>
		</html>
	);
}
