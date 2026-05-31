import { useTranslation } from "next-i18next/pages";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ScienceIcon from "@mui/icons-material/Science";
import TerrainIcon from "@mui/icons-material/Terrain";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

type Feature = {
	icon: string;
	title: string;
	description: string;
};

const icons = {
	pick: TerrainIcon,
	droplets: WaterDropIcon,
	flame: LocalFireDepartmentIcon,
	"file-check": ReceiptLongIcon,
	handshake: HandshakeIcon,
	landmark: AccountBalanceIcon,
};

export default function OperationsCapabilitiesSection() {
	const { t } = useTranslation(["operations"]);
	const features = t("operations:features.items", { returnObjects: true }) as Feature[];

	return (
		<section className="bg-[#0A0A0A] py-24">
			<div className="max-w-[1180px] mx-auto px-8">
				<div className="max-w-[720px] mb-14">
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("operations:features.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("operations:features.headline")}
					</h2>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					{features.map((feature) => {
						const Icon = icons[feature.icon as keyof typeof icons] ?? ScienceIcon;

						return (
							<article
								key={feature.title}
								className="rounded-lg border border-[rgba(201,168,76,0.14)] bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-primary/70"
							>
								<div className="w-11 h-11 rounded border border-primary/25 text-primary flex items-center justify-center mb-5">
									<Icon fontSize="small" />
								</div>
								<h3 className="text-xl text-onSurface-100 mb-3">
									{feature.title}
								</h3>
								<p className="text-sm text-onSurface-100 leading-[1.75] font-light">
									{feature.description}
								</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
