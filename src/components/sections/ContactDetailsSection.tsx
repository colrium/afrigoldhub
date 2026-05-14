import Link from "next/link";
import { useTranslation } from "next-i18next/pages";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";

type Office = {
	id: string;
	label: string;
	city: string;
	country: string;
	address_lines: string[];
	phone: string;
	email: string;
	hours: string;
	note: string;
};

type DirectContact = {
	department: string;
	name: string;
	title: string;
	email: string;
	phone: string | null;
	note: string;
};

export default function ContactDetailsSection() {
	const { t } = useTranslation("common");
	const offices = t("contact.offices.items", { returnObjects: true }) as Office[];
	const contacts = t("contact.direct_contacts.items", {
		returnObjects: true,
	}) as DirectContact[];

	return (
		<>
			<section className="bg-[#0A0A0A] py-24">
				<div className="max-w-[1180px] mx-auto px-8">
					<div className="mb-12">
						<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							{t("contact.offices.tag")}
						</span>
						<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100">
							{t("contact.offices.headline")}
						</h2>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						{offices.map((office) => (
							<article
								key={office.id}
								id={office.id}
								className="rounded-lg border border-[rgba(201,168,76,0.14)] bg-[#111111] p-7"
							>
								<div className="flex items-start justify-between gap-4 mb-5">
									<div>
										<div className="text-xs uppercase tracking-[0.14em] text-primary mb-2">
											{office.label}
										</div>
										<h3 className="font-serif text-2xl text-onSurface-100">
											{office.city}, {office.country}
										</h3>
									</div>
									<PlaceIcon className="text-primary shrink-0" />
								</div>
								<div className="text-sm text-[#faf5ec] leading-relaxed">
									{office.address_lines.map((line) => (
										<div key={line}>{line}</div>
									))}
								</div>
								<div className="mt-6 grid gap-3 text-sm">
									<Link
										href={`mailto:${office.email}`}
										className="inline-flex items-center gap-2 text-onSurface-100 hover:text-primary transition-colors"
									>
										<EmailIcon fontSize="small" />
										{office.email}
									</Link>
									<Link
										href={`tel:${office.phone.replace(/\s/g, "")}`}
										className="inline-flex items-center gap-2 text-onSurface-100 hover:text-primary transition-colors"
									>
										<PhoneIcon fontSize="small" />
										{office.phone}
									</Link>
									<div className="text-[#faf5ec]">{office.hours}</div>
								</div>
								<p className="mt-5 text-sm text-[#faf5ec] leading-relaxed">
									{office.note}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="bg-[#111111] py-24">
				<div className="max-w-[1180px] mx-auto px-8">
					<div className="mb-12">
						<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
							{t("contact.direct_contacts.tag")}
						</span>
						<h2 className="font-serif text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100">
							{t("contact.direct_contacts.headline")}
						</h2>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{contacts.map((contact) => (
							<article
								key={`${contact.department}-${contact.email}`}
								className="rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#0A0A0A] p-6"
							>
								<div className="text-xs uppercase tracking-[0.14em] text-primary mb-4">
									{contact.department}
								</div>
								<h3 className="text-xl text-onSurface-100 font-medium">
									{contact.name}
								</h3>
								<div className="text-sm text-[#faf5ec] mt-1">{contact.title}</div>
								<p className="text-sm text-[#faf5ec] leading-relaxed mt-5">
									{contact.note}
								</p>
								<div className="mt-6 grid gap-2 text-sm">
									<Link
										href={`mailto:${contact.email}`}
										className="text-onSurface-100 hover:text-primary transition-colors"
									>
										{contact.email}
									</Link>
									{contact.phone && (
										<Link
											href={`tel:${contact.phone.replace(/\s/g, "")}`}
											className="text-onSurface-100 hover:text-primary transition-colors"
										>
											{contact.phone}
										</Link>
									)}
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
