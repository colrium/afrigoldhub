import { useTranslation } from "@/hooks";

type DocumentItem = {
	stage: string;
	document: string;
	retained_by: string;
	available_to: string;
};

export default function ValueChainTransparencySection() {
	const { t } = useTranslation(["common", "value"]);
	const documents = t("value:transparency.documents", {
		returnObjects: true,
	}) as DocumentItem[];

	return (
		<section className="bg-surface-900 py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[720px] mb-12">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("value:transparency.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("value:transparency.headline")}
					</h2>
					<p className="text-base text-onSurface-200 leading-[1.75] font-light">
						{t("value:transparency.description")}
					</p>
				</div>
				<div className="overflow-x-auto rounded-lg border border-surface-800/50">
					<table className="w-full min-w-[760px] text-sm">
						<tbody>
							{documents.map((doc) => (
								<tr
									key={`${doc.stage}-${doc.document}`}
									className="border-b border-surface-800/50 last:border-b-0"
								>
									<td className="p-4 text-primary font-medium">{doc.stage}</td>
									<td className="p-4 text-onSurface-100">{doc.document}</td>
									<td className="p-4 text-onSurface-200">{doc.retained_by}</td>
									<td className="p-4 text-onSurface-200">{doc.available_to}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}
