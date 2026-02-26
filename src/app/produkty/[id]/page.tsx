import { permanentRedirect } from "next/navigation";

type Props = {
	params: Promise<{ id: string }>;
};

/**
 * Legacy route -> redirect to root slug
 */
export default async function Page({ params }: Props) {
	const { id } = await params;
	permanentRedirect(`/${id}`);
}
