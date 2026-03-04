export type ProductMetadataItem = {
	id: string;
	slug: string;
	title: string;
	shortDescription: string;
	image?: string;
};

export type ProductTypeFilter = {
	label: string;
	slug: string;
	title: string;
	shortDescription: string;
};

export const productTypeFilters: ProductTypeFilter[] = [
	{
		label: "Інокулянти",
		slug: "inokulianty",
		title: "Інокулянти",
		shortDescription:
			"Бактеріальні інокулянти для бобових і зернобобових культур.",
	},
	{
		label: "Контроль патогенів",
		slug: "kontrol-patoheniv",
		title: "Контроль патогенів",
		shortDescription: "Біологічні рішення для фітосанітарного захисту посівів.",
	},
	{
		label: "Деструктори",
		slug: "destruktory",
		title: "Деструктори",
		shortDescription: "Препарати для швидкого розкладу рослинних решток.",
	},
	{
		label: "Стимулятори росту",
		slug: "stymuliatory-rostu",
		title: "Стимулятори росту",
		shortDescription:
			"Антистресанти та стимулятори росту для підвищення врожайності.",
	},
	{
		label: "Мікро-монодобрива",
		slug: "mikro-monodobryva",
		title: "Мікро-монодобрива",
		shortDescription: "Моно- та мікродобрива для корекції живлення рослин.",
	},
	{
		label: "Прилипачі (ПАР)",
		slug: "prylypachi-par",
		title: "Прилипачі (ПАР)",
		shortDescription:
			"Поверхнево-активні речовини для кращого змочування й прилипання.",
	},
];

export const productsMetadata: ProductMetadataItem[] = [
	{
		id: "xhHVkBFPvkLa1PSJVZdA",
		slug: "inokuliant-dlia-bobovykh-kultur-ryzostart-sukhyi",
		title:
			"Купити інокулянт для сої | Ризостарт сухий, ціна в Україні | Zeryva",
		shortDescription:
			"Інокулянт для сої Ризостарт сухий Zeryva — бактерії для інокуляції насіння бобових культур. Купити, ціна, доставка по всій Україні.",
		image: "/products/g99gvnd85rcdpfrji7hy.webp",
	},
	{
		id: "gjjUzqb44JEgeAzMYE6J",
		slug: "inokuliant-dlia-bobovykh-kultur-ryzostart-ridkyi",
		title:
			"Купити інокулянт для сої | Ризостарт рідкий, ціна в Україні | Zeryva",
		shortDescription:
			"Інокулянт для сої Ризостарт рідкий Zeryva — бактерії для інокуляції насіння бобових культур. Купити, ціна, доставка по всій Україні.",
		image: "/products/w1ph8dfgzvlingyy7laj.webp",
	},
	{
		id: "vJPPh9AvsVvCRnWh0Rnh",
		slug: "fitosanitarnyi-kontrol-posiviv-ariia",
		title:
			"Купити Арія Фунгіцид | Захист рослин від хвороб | Профілактика хвороб посівів | Zeryva",
		shortDescription:
			"Арія Zeryva — біологічний фунгіцид для фітосанітарного контролю посівів та захисту рослин від хвороб. Купити, ціна, доставка по всій Україні.",
		image: "/products/ngxxa0wpseansrhy3zjp.webp",
	},
	{
		id: "I2bD7rLGVvCeDrc0sBum",
		slug: "antystresant-ta-stymuliator-rostu-roslyn-ryzohumat",
		title:
			"Купити гумат калію РизоГумат | Антистресант і стимулятор росту рослин | Zeryva",
		shortDescription:
			"Біостимулятор гумат калію Zeryva для рослин. Покращення живлення культур. Купити, ціна, доставка по всій Україні.",
		image: "/products/x7nmwy1kt874r7qswtty.webp",
	},
	{
		id: "tJAh3fFxVbb05e7idWne",
		slug: "antystresant-ta-stymuliator-rostu-roslyn-violon",
		title:
			"Купити антистресант для рослин Віолон | Стимулятор росту, ціна в Україні | Zeryva",
		shortDescription:
			"Антистресант для рослин Zeryva — стимулятор росту та підвищення стійкості культур. Купити, ціна, доставка по всій Україні.",
		image: "/products/qghago4vpcmgwupkous6.webp",
	},
	{
		id: "yROJwuEwPz9nd8zLCz7M",
		slug: "fosfatmobilizuiuchyi-inokuliant-ryzofos",
		title:
			"Купити інокулянт для кукурудзи та пшениці | Ризофос, ціна в Україні | Zeryva",
		shortDescription:
			"Інокулянт Ризофос Zeryva для кукурудзи та пшениці. Фосформобілізуючі бактерії для розвитку коренів. Купити, ціна, доставка по всій Україні.",
		image: "/products/xbitpop7g3o9tqkjgm9j.webp",
	},
	{
		id: "VqUzKiOBoq51PUP0w4Sj",
		slug: "fitosanitarnyi-kontrol-posiviv-funhiblok",
		title:
			"Купити Фунгіблок: фунгіцид для сої та зернових | Захист рослин від хвороб | Zeryva",
		shortDescription:
			"Фунгіблок Zeryva — біологічний фунгіцид для захисту сої та зернових від грибкових хвороб. Купити, ціна, доставка по всій Україні.",
		image: "/products/fktisnncjraukog5bwxr.webp",
	},
	{
		id: "CoG6jJ7lz8XjzSw50FV5",
		slug: "destruktor-dlia-rozkladu-roslynnykh-reshtok-destrumag",
		title:
			"Купити деструктор стерні та рослинних решток ДеструМаг, ціна | Zeryva",
		shortDescription:
			"Деструктор стерні ДеструМаг для розкладання пожнивних решток та соломи. Покращення структури ґрунту. Купити, ціна, доставка по всій Україні.",
		image: "/products/oegaxdi0t4wtdxbr07ae.webp",
	},
	{
		id: "1HhIGNS1gGsFeAEkp2bS",
		slug: "mikrodobryvo-ta-stymuliator-rostu-zeryva-bor-molibden",
		title:
			"Купити Бор + Молібден для сої | Стимулятор росту рослин, ціна | Zeryva",
		shortDescription:
			"Мікродобриво Бор Молібден для сої Zeryva. Стимулятор росту рослин, позакореневе підживлення. Купити, ціна, доставка по всій Україні.",
		image: "/products/ayqlgpvohnfqguoqny7j.webp",
	},
	{
		id: "QaVcFWvc02Qnbm5Z0qwz",
		slug: "kompleksne-mikrodobryvo-zeryva-multymiks",
		title:
			"Купити комплексне мікродобриво Мультимікс | Стимулятор росту рослин, ціна в Україні | Zeryva",
		shortDescription:
			"Комплексне мікродобриво Zeryva — стимулятор росту рослин та мікроелементне підживлення культур. Купити, ціна, доставка по всій Україні.",
		image: "/products/zud1d8u41fmpoqfre7pp.webp",
	},
	{
		id: "7ZT6KymYCMrW55xhIruG",
		slug: "mikrodobryvo-ta-stymuliator-rostu-zeryva-tsynk",
		title:
			"Купити мікродобриво Цинк для кукурудзи та пшениці | Стимулятор росту, ціна в Україні | Zeryva",
		shortDescription:
			"Мікродобриво Цинк Zeryva для кукурудзи та пшениці. Стимулятор росту зернових культур. Купити, ціна, доставка по всій Україні.",
		image: "/products/j00dkevks5ge3qwxl9rg.webp",
	},
	{
		id: "PfYvWruYbHFPH0gAeEgn",
		slug: "mikrodobryvo-ta-stymuliator-rostu-zeryva-kaltsii",
		title:
			"Купити Кальцій для рослин | Стимулятор росту, ціна в Україні | Zeryva",
		shortDescription:
			"Мікродобриво Кальцій для рослин Zeryva. Листкове підживлення та стимуляція росту. Купити, ціна, доставка по всій Україні.",
		image: "/products/isozv2qgocgild5g1zxa.webp",
	},
	{
		id: "zYSTeikLKYug53Wy7FiR",
		slug: "mikrodobryvo-ta-stymuliator-rostu-zeryva-molibden-kobalt",
		title:
			"Купити Молібден + Кобальт для сої | Стимулятор росту рослин | Zeryva",
		shortDescription:
			"Мікродобриво Молібден Кобальт для сої Zeryva — стимулятор росту бобових культур. Купити, ціна, доставка по всій Україні.",
		image: "/products/fqbrg5jchznhvswhnyo8.webp",
	},
	{
		id: "kiqWH1e8P1xDwalHaa69",
		slug: "mikrodobryvo-ta-stymuliator-rostu-zeryva-marhanets",
		title:
			"Купити Марганець для рослин | Мікродобриво і стимулятор росту | Zeryva",
		shortDescription:
			"Марганець для рослин Zeryva — мікродобриво та стимулятор росту культур. Купити, ціна, доставка по всій Україні.",
		image: "/products/lxxanyijjti1zoekcrqx.webp",
	},
	{
		id: "ufj6pesDruF3fZufhDBC",
		slug: "mikrodobryvo-ta-stymuliator-rostu-zeryva-zernovi",
		title:
			"Купити добриво для пшениці | Позакореневе підживлення зернових | Zeryva",
		shortDescription:
			"Мікродобриво для пшениці Zeryva — позакореневе підживлення зернових культур та стимулятор росту. Купити, ціна, доставка по всій Україні.",
		image: "/products/riyphzhpadam2j2erku3.webp",
	},
	{
		id: "GWEBdRzu74MoiTI0q4iJ",
		slug: "mikrodobryvo-ta-stymuliator-rostu-zeryva-zernobobovi",
		title:
			"Купити мікродобрива для сої | Стимулятор росту рослин: ціна в Україні | Zeryva",
		shortDescription:
			"Комплексне мікродобриво для сої Zeryva. Підживлення та стимуляція росту рослин. Купити, ціна, доставка по всій Україні.",
		image: "/products/mifgqyjxiqfx4a7vjzbx.webp",
	},
	{
		id: "Tt7tR62b3TUJUyDaTHOO",
		slug: "poverkhnevo-aktyvna-rechovyna-par-liprotens",
		title:
			"Купити прилипач для гербіцидів Ліпротенс | Ад'ювант ПАР, ціна в Україні | Zeryva",
		shortDescription:
			"Прилипач для гербіцидів Zeryva — ад'ювант ПАР для підвищення ефективності пестицидів. Купити, ціна, доставка по всій Україні.",
		image: "/products/c7q1gf2nkpgjwgguxjp6.webp",
	},
	{
		id: "q3rtPyDIdNntUgJBvRRq",
		slug: "preparat-dlia-pidvyshchennia-rodiuchosti-gruntu-hleon",
		title:
			"Купити Глеон: препарат для родючості ґрунту | Біологічний захист рослин | Zeryva",
		shortDescription:
			"Глеон Zeryva — препарат для підвищення родючості ґрунту та активності мікрофлори. Купити, ціна, доставка по всій Україні.",
		image: "/products/hq8naix57jb9jms5rhsp.webp",
	},
];
