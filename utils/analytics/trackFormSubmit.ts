type TrackingPayload = {
	event: "form_submit";
	form_name: string;
};

type AnalyticsWindow = Window & {
	dataLayer?: Array<Record<string, unknown>>;
	gtag?: (...args: unknown[]) => void;
};

export const trackFormSubmit = (formName: string) => {
	if (typeof window === "undefined") {
		return;
	}

	const analyticsWindow = window as AnalyticsWindow;
	const payload: TrackingPayload = {
		event: "form_submit",
		form_name: formName,
	};

	analyticsWindow.dataLayer?.push(payload);

	if (typeof analyticsWindow.gtag === "function") {
		analyticsWindow.gtag("event", "form_submit", {
			form_name: formName,
		});
	}

	window.dispatchEvent(new CustomEvent("form_submit", { detail: payload }));
};
