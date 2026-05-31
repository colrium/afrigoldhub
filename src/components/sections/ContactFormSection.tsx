import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next/pages";
import SendIcon from "@mui/icons-material/Send";

type Option = { value: string; label: string };
type Field = {
	label: string;
	placeholder?: string;
	required?: boolean;
	type: string;
	rows?: number;
	options?: Option[];
};

type ReasonState = {
	reason: string;
	opportunity: string;
	tier: string;
	sent: boolean;
};

function inputClassName() {
	return "w-full rounded bg-surface border border-[rgba(201,168,76,0.14)] px-4 py-3 text-sm text-onSurface-100 outline-none transition focus:border-primary placeholder:text-[#faf5ec]/35";
}

export default function ContactFormSection() {
	const { t } = useTranslation([  "contact", "operations" ]);
	const router = useRouter();
	const [state, setState] = useState<ReasonState>({
		reason: "",
		opportunity: "",
		tier: "",
		sent: false,
	});

	const reasons = t("contact:contact_reasons.options", {
		returnObjects: true,
	}) as Option[];
	const fields = t("contact:form.fields", { returnObjects: true }) as Record<
		string,
		Field
	>;
	const opportunityOptions = t("contact:form.fields.opportunity.options", {
		returnObjects: true,
	}) as Option[];
	const operationCountries = t("operations:locations.countries", {
		returnObjects: true,
	}) as string[];
	const officeCountries = (
		t("contact:offices.items", { returnObjects: true }) as { country: string }[]
	).map((office) => office.country);
	const countries = Array.from(new Set([...operationCountries, ...officeCountries]));

	useEffect(() => {
		const reason = typeof router.query.reason === "string" ? router.query.reason : "";
		const opportunity =
			typeof router.query.opportunity === "string" ? router.query.opportunity : "";
		const tier = typeof router.query.tier === "string" ? router.query.tier : "";
		setState((current) => ({
			...current,
			reason: reason === "invest" ? "investment-enquiry" : reason || current.reason,
			opportunity: opportunity || current.opportunity,
			tier: tier || current.tier,
		}));
	}, [router.query.opportunity, router.query.reason, router.query.tier]);

	const tierOptions = useMemo(() => fields.investor_tier.options ?? [], [fields]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setState((current) => ({ ...current, sent: true }));
		event.currentTarget.reset();
	};

	return (
		<section id="contact-form" className="relative bg-[#111111] py-24">
			<div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.75fr_1.25fr] gap-12">
				<div>
					<span className="inline-block text-xs tracking-[0.14em] uppercase text-primary opacity-80 mb-3">
						{t("contact:form.tag")}
					</span>
					<h2 className="text-[clamp(2rem,3.5vw,2.9rem)] tracking-tight text-onSurface-100 mb-5">
						{t("contact:form.headline")}
					</h2>
					<p className="text-base text-[#faf5ec] leading-[1.75] font-light">
						{t("contact:form.description")}
					</p>
					{state.sent && (
						<div className="mt-8 rounded-lg border border-primary/30 bg-primary/10 p-5">
							<div className="text-primary font-medium">
								{t("contact:form.success_heading")}
							</div>
							<p className="text-sm text-[#faf5ec] mt-2 leading-relaxed">
								{t("contact:form.success_body")}
							</p>
						</div>
					)}
				</div>

				<form
					onSubmit={handleSubmit}
					className="rounded-lg border border-[rgba(201,168,76,0.14)] bg-[#0A0A0A]/80 p-6 md:p-8 grid gap-5"
				>
					<div className="grid md:grid-cols-2 gap-5">
						<label className="grid gap-2 text-sm text-onSurface-100">
							{fields.first_name.label}
							<input
								className={inputClassName()}
								name="first_name"
								type="text"
								placeholder={fields.first_name.placeholder}
								required={fields.first_name.required}
							/>
						</label>
						<label className="grid gap-2 text-sm text-onSurface-100">
							{fields.last_name.label}
							<input
								className={inputClassName()}
								name="last_name"
								type="text"
								placeholder={fields.last_name.placeholder}
								required={fields.last_name.required}
							/>
						</label>
					</div>
					<div className="grid md:grid-cols-2 gap-5">
						<label className="grid gap-2 text-sm text-onSurface-100">
							{fields.email.label}
							<input
								className={inputClassName()}
								name="email"
								type="email"
								placeholder={fields.email.placeholder}
								required={fields.email.required}
							/>
						</label>
						<label className="grid gap-2 text-sm text-onSurface-100">
							{fields.phone.label}
							<input
								className={inputClassName()}
								name="phone"
								type="tel"
								placeholder={fields.phone.placeholder}
							/>
						</label>
					</div>
					<div className="grid md:grid-cols-2 gap-5">
						<label className="grid gap-2 text-sm text-onSurface-100">
							{fields.country.label}
							<select
								className={inputClassName()}
								name="country"
								required={fields.country.required}
								defaultValue=""
							>
								<option value="" disabled>
									{fields.country.placeholder}
								</option>
								{countries.map((country) => (
									<option key={country} value={country}>
										{country}
									</option>
								))}
							</select>
						</label>
						<label className="grid gap-2 text-sm text-onSurface-100">
							{fields.reason.label}
							<select
								className={inputClassName()}
								name="reason"
								required={fields.reason.required}
								value={state.reason}
								onChange={(event) =>
									setState((current) => ({
										...current,
										reason: event.target.value,
									}))
								}
							>
								<option value="" disabled>
									{fields.reason.placeholder}
								</option>
								{reasons.map((reason) => (
									<option key={reason.value} value={reason.value}>
										{reason.label}
									</option>
								))}
							</select>
						</label>
					</div>
					{["investment-enquiry", "due-diligence", "partnership"].includes(
						state.reason
					) && (
						<label className="grid gap-2 text-sm text-onSurface-100">
							{fields.opportunity.label}
							<select
								className={inputClassName()}
								name="opportunity"
								value={state.opportunity}
								onChange={(event) =>
									setState((current) => ({
										...current,
										opportunity: event.target.value,
									}))
								}
							>
								<option value="" disabled>
									{fields.opportunity.placeholder}
								</option>
								{opportunityOptions.map((opportunity) => (
									<option key={opportunity.value} value={opportunity.value}>
										{opportunity.label}
									</option>
								))}
							</select>
						</label>
					)}
					{state.reason === "investment-enquiry" &&
						state.opportunity === "gold-aggregation" && (
						<label className="grid gap-2 text-sm text-onSurface-100">
							{fields.investor_tier.label}
							<select
								className={inputClassName()}
								name="investor_tier"
								value={state.tier}
								onChange={(event) =>
									setState((current) => ({
										...current,
										tier: event.target.value,
									}))
								}
							>
								<option value="" disabled>
									{fields.investor_tier.placeholder}
								</option>
								{tierOptions.map((tier) => (
									<option key={tier.value} value={tier.value}>
										{tier.label}
									</option>
								))}
							</select>
						</label>
					)}
					<label className="grid gap-2 text-sm text-onSurface-100">
						{fields.message.label}
						<textarea
							className={`${inputClassName()} resize-y min-h-36`}
							name="message"
							placeholder={fields.message.placeholder}
							required={fields.message.required}
							rows={fields.message.rows ?? 5}
						/>
					</label>
					<label className="flex gap-3 text-sm text-[#faf5ec] leading-relaxed">
						<input
							className="mt-1 accent-primary"
							name="consent"
							type="checkbox"
							required={fields.consent.required}
						/>
						<span>{fields.consent.label}</span>
					</label>
					<label className="flex gap-3 text-sm text-[#faf5ec] leading-relaxed">
						<input className="mt-1 accent-primary" name="newsletter" type="checkbox" />
						<span>{fields.newsletter.label}</span>
					</label>
					<button
						type="submit"
						className="inline-flex items-center justify-center gap-2 bg-primary text-black font-medium px-7 py-3.5 rounded border border-primary hover:bg-[#E5C46A] transition-all"
					>
						{t("contact:form.submit_label")}
						<SendIcon fontSize="small" />
					</button>
				</form>
			</div>
		</section>
	);
}
