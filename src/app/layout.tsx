import type { Metadata } from "next";
import "./globals.css";
import "./variables.css";
import { ClientLayout } from "./ClientLayout";
import localFont from "next/font/local";

const ptSans = localFont({
  src: [
    {
      path: "../../public/fonts/PTSansCaptions/PTSansCaption-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PTSansCaptions/PTSansCaption-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-family",
  display: "swap",
});

// const workSans = localFont({
//   src: "../../public/fonts/WorkSans/Inter-VariableFont_opsz,wght.ttf",
//   variable: "--third-family",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: `ТОВ "Zeryva" - офіційний сайт`,
  description:
    "Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
  metadataBase: new URL("http://zeryva.com.ua"),
  alternates: {
    canonical: "http://zeryva.com.ua",
  },
  openGraph: {
    title: 'ТОВ "Zeryva" - офіційний сайт',
    description:
      "Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
    url: "http://zeryva.com.ua",
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
    <html lang="uk" className={`${ptSans.variable}`}>
      <body id="app-scroll">
        <ClientLayout>{children}</ClientLayout>
        <div id="modal-root" />
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import "./globals.css";
// import "./variables.css";
// import { ClientLayout } from "./ClientLayout";

// export const metadata: Metadata = {
// 	title: `ТОВ "Zeryva" - офіційний сайт`,
// 	description:
// 		"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
// 	metadataBase: new URL("http://zeryva.com.ua"),
// 	alternates: {
// 		canonical: "http://zeryva.com.ua",
// 	},
// 	openGraph: {
// 		title: 'ТОВ "Zeryva" - офіційний сайт',
// 		description:
// 			"Інокулянти, фунгіциди, мікродобрива та засоби захисту рослин — агрохімія для високих урожаїв",
// 		url: "http://zeryva.com.ua",
// 		siteName: "Zeryva",
// 		type: "website",
// 		images: [
// 			{
// 				url: "/logo.svg",
// 				width: 504,
// 				height: 504,
// 				alt: "Zeryva",
// 			},
// 		],
// 	},
// 	icons: {
// 		icon: "/logo.svg",
// 	},
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="uk">
// 			<body id="app-scroll">
// 				<ClientLayout>{children}</ClientLayout>
// 				<div id="modal-root" />
// 			</body>
// 		</html>
// 	);
// }
