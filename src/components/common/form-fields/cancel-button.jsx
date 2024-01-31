"use client";

import { useRouter } from "next/navigation";

const CancelButton = ({ title="Cancel", icon = null }) => {
	const router = useRouter();

	return (
		<button
			type="button"
			class="btn btn-outline-primary"
			onClick={() => router.back()}
		>
			{icon} {title}
		</button>
	);
};

export default CancelButton;