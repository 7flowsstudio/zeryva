import { ProductMetadata } from "../../utils/types";

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

export async function getProductForMetadata(
	id: string
): Promise<ProductMetadata | null> {
	const res = await fetch(
		`https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/products/${id}`,
		{ cache: "no-store" }
	);

	if (!res.ok) return null;

	const doc = await res.json();
	const fields = doc.fields;

	return {
		title: fields.title.stringValue,
		shortDescription: fields.shortDescription?.stringValue ?? "",
		image: fields.image?.stringValue ?? "",
		productType:
			fields.productType?.arrayValue?.values?.map(
				(v: { stringValue: string }) => v.stringValue
			) ?? [],
		formType: fields.formType?.stringValue ?? "",
	};
}
