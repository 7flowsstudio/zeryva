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

const onest = localFont({
	src: [
		{
			path: "../../public/fonts/Onest/Onest-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Onest/Onest-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/Onest/Onest-ExtraBold.ttf",
			weight: "800",
			style: "normal",
		},
	],
	variable: "--third-family",
	display: "swap",
});

export const metadata: Metadata = {
	title: `Купити мінеральні добрива від виробника | ТОВ Zeryva`,
	description:
		"ТОВ Zeryva — український розробник та виробник мінеральних добрив нового покоління. Партнерство та вигідні ціни! Переходьте на наш сайт!",
	metadataBase: new URL("https://zeryva.com.ua"),
	verification: {
		google: "uFWpgT6WUx1lCoat34AJ48d9qzi59RWk0A1RsdaiW_Y",
	},
	alternates: {
		canonical: "https://zeryva.com.ua",
	},
	openGraph: {
		title: "Купити мінеральні добрива від виробника | ТОВ Zeryva",
		description:
			"ТОВ Zeryva — український розробник та виробник мінеральних добрив нового покоління. Партнерство та вигідні ціни! Переходьте на наш сайт!",
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
const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "https://zeryva.com.ua/#organization",
			name: "Zeryva",
			url: "https://zeryva.com.ua/",
			logo: {
				"@type": "ImageObject",
				url: "https://zeryva.com.ua/logo.svg",
			},
			slogan: "Ефективність, перевірена природою",
			description:
				"Zeryva понад 12 років розробляє та впроваджує ефективні біологічні препарати для сільського господарства. Наші ключові переваги: сучасні технології з доведеною ефективністю, адаптація до конкретних умов господарства, зменшення хімічного навантаження, підвищення стійкості культур до стресових факторів, комплексний агрономічний супровід та оптимізація врожайного потенціалу.",
			sameAs: [
				"https://www.instagram.com/zeryva_/",
				"https://www.tiktok.com/@zeryva_",
				"https://www.facebook.com/Zeryvaa/",
				"https://www.youtube.com/@zeryva",
				"https://www.google.com/maps?cid=15900069791132893730",
			],
		},
		{
			"@type": "WebSite",
			"@id": "https://zeryva.com.ua/#website",
			url: "https://zeryva.com.ua/",
			name: "Zeryva",
			publisher: {
				"@id": "https://zeryva.com.ua/#organization",
			},
			inLanguage: "uk-UA",
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="uk" className={`${onest.variable} ${ptSans.variable}`}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
					}}
				/>
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
								gtag('config', '${GA_ID}', { cookie_domain: 'none', send_page_view: false });
							`}
						</Script>
					</>
				)}
				{GTM_ID && (
					<Script id="google-tag-manager" strategy="beforeInteractive">
						{`
							window.dataLayer = window.dataLayer || [];
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
