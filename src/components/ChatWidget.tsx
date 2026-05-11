"use client";

import { useState, useRef, useEffect } from "react";

const AI_RESPONSES: Record<string, string> = {
	"investment options":
		"We offer three tiers: Seed Partner ($25K, ~65% annual ROI), Strategic Partner ($75K, ~88% ROI), and Anchor Investor ($189K, full CAPEX coverage with 45% profit share). All include structured agreements and monthly reporting.",
	"how it works":
		"We extract alluvial ore from our licensed Lupa Goldfield pits, process it through gravity concentration (no chemicals), smelt it into gold bars, then sell directly to licensed buyers in Dar es Salaam. Your returns come from monthly net profit distributions.",
	"expected returns":
		"Based on our $572K gross monthly revenue and ~$504K net profit, partners earn proportional returns per their tier. The Anchor tier targets ~88% annually with a 3-month capital payback. All projections are backed by verified geological and financial data.",
	"is it licensed":
		"Yes. We hold an active Primary Mining Licence (PML) under Africa's Mining Act 2010 and all NEMC environmental certifications. Documentation is available to serious investors during due diligence.",
};

const quickReplies = ["Investment options", "How it works", "Expected returns", "Is it licensed"];

type Message = { role: "bot" | "user"; text: string };
type Mode = "ai" | "human";

export default function ChatWidget() {
	const [open, setOpen] = useState(false);
	const [mode, setMode] = useState<Mode>("ai");
	const [messages, setMessages] = useState<Message[]>([
		{
			role: "bot",
			text: "Welcome to AfriGold Hub. Ask me about our investment tiers, operations, or returns.",
		},
	]);
	const [input, setInput] = useState("");
	const [typing, setTyping] = useState(false);
	const [showQuickReplies, setShowQuickReplies] = useState(true);
	const messagesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (messagesRef.current) {
			messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
		}
	}, [messages, typing]);

	const handleSend = (text: string) => {
		if (!text.trim()) return;
		setMessages((prev) => [...prev, { role: "user", text }]);
		setInput("");
		setShowQuickReplies(false);
		setTyping(true);

		setTimeout(
			() => {
				setTyping(false);
				const key = Object.keys(AI_RESPONSES).find((k) => text.toLowerCase().includes(k));
				const reply =
					mode === "human"
						? "Thanks for your message. A member of our investment team will respond within 1–2 business hours (East Africa Time). For urgent queries, email invest@afrigoldhub.com."
						: key
							? AI_RESPONSES[key]
							: "Great question. For detailed answers about AfriGold Hub's operations or investment terms, please email us at invest@afrigoldhub.com or schedule a discovery call. We respond within 24 hours.";
				setMessages((prev) => [...prev, { role: "bot", text: reply }]);
			},
			1200 + Math.random() * 600
		);
	};

	const switchMode = (m: Mode) => {
		setMode(m);
		const msg =
			m === "ai"
				? "Switched to AI assistant. I can answer questions instantly about investments, operations, and returns."
				: "You're now connected to our human support team. Response times may be 1–2 hours during business hours (EAT).";
		setMessages((prev) => [...prev, { role: "bot", text: msg }]);
	};

	return (
		<div className="fixed bottom-8 right-8 z-[9000] flex flex-col items-end gap-4">
			{/* Panel */}
			<div
				className={`w-[360px] bg-[#111111] border border-[rgba(201,168,76,0.15)] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 ${
					open
						? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
						: "opacity-0 translate-y-4 scale-95 pointer-events-none"
				}`}
			>
				{/* Header */}
				<div className="bg-[#1A1A1A] border-b border-[rgba(201,168,76,0.15)] px-5 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-9 h-9 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="#f3bd27">
								<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
							</svg>
						</div>
						<div>
							<strong className="block font-serif text-base text-[#F5F0E8]">
								{mode === "ai" ? "AfriGold AI" : "Support Team"}
							</strong>
							<span className="flex items-center gap-1 text-xs text-green-400">
								<span className="w-1.5 h-1.5 rounded-full bg-green-400" />
								Online
							</span>
						</div>
					</div>

					{/* Mode toggle */}
					<div className="flex bg-[#242424] border border-[rgba(201,168,76,0.15)] rounded-full p-1 gap-1">
						{(["ai", "human"] as Mode[]).map((m) => (
							<button
								key={m}
								onClick={() => switchMode(m)}
								className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
									mode === m
										? "bg-[#f3bd27] text-black"
										: "text-[#faf5ec] bg-transparent"
								}`}
							>
								{m === "ai" ? "AI" : "Human"}
							</button>
						))}
					</div>
				</div>

				{/* Messages */}
				<div
					ref={messagesRef}
					className="h-[280px] overflow-y-auto p-5 flex flex-col gap-3 scroll-smooth"
					style={{ scrollbarWidth: "thin" }}
				>
					{messages.map((msg, i) => (
						<div
							key={i}
							className={`flex gap-2 items-end ${msg.role === "user" ? "flex-row-reverse" : ""}`}
						>
							<div className="w-6 h-6 rounded-full shrink-0 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-[0.65rem] text-[#f3bd27] font-serif font-bold">
								{msg.role === "user" ? "You" : mode === "ai" ? "AG" : "ST"}
							</div>
							<div
								className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-snug ${
									msg.role === "user"
										? "bg-[#f3bd27] text-black rounded-br-sm"
										: "bg-[#1A1A1A] border border-[rgba(201,168,76,0.08)] text-[rgba(245,240,232,0.85)] rounded-bl-sm"
								}`}
							>
								{msg.text}
							</div>
						</div>
					))}

					{typing && (
						<div className="flex gap-2 items-end">
							<div className="w-6 h-6 rounded-full shrink-0 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-[0.65rem] text-[#f3bd27] font-serif font-bold">
								AG
							</div>
							<div className="bg-[#1A1A1A] border border-[rgba(201,168,76,0.08)] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
								{[0, 1, 2].map((d) => (
									<span
										key={d}
										className="w-1.5 h-1.5 rounded-full bg-[#f3bd27] opacity-50"
										style={{
											animation: `bounce 1.2s ${d * 0.2}s ease-in-out infinite`,
										}}
									/>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Quick replies */}
				{showQuickReplies && (
					<div className="px-5 pb-3 flex flex-wrap gap-2">
						{quickReplies.map((q) => (
							<button
								key={q}
								onClick={() => handleSend(q)}
								className="text-xs border border-[rgba(201,168,76,0.15)] text-[#f3bd27] px-3 py-1.5 rounded-full hover:bg-[rgba(201,168,76,0.08)] transition-all"
							>
								{q}
							</button>
						))}
					</div>
				)}

				{/* Input */}
				<div className="border-t border-[rgba(201,168,76,0.15)] px-4 py-3 flex gap-2 items-center">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
						placeholder="Ask a question..."
						className="flex-1 bg-transparent text-sm text-[#F5F0E8] placeholder:text-[rgba(201,168,76,0.3)] outline-none"
					/>
					<button
						onClick={() => handleSend(input)}
						className="w-8 h-8 rounded-full bg-[#f3bd27] flex items-center justify-center shrink-0 hover:bg-[#E5C46A] transition-colors"
					>
						<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
							<path
								d="M2 8L14 8M14 8L9 3M14 8L9 13"
								stroke="#0A0A0A"
								strokeWidth="1.8"
								strokeLinecap="round"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* FAB */}
			<button
				onClick={() => setOpen(!open)}
				className={`relative w-14 h-14 rounded-full bg-[#f3bd27] flex items-center justify-center shadow-[0_4px_20px_rgba(201,168,76,0.4)] hover:shadow-[0_6px_32px_rgba(201,168,76,0.5)] transition-all`}
			>
				<span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#0A0A0A]" />
				<svg
					className={`absolute transition-all duration-300 ${open ? "opacity-0 scale-75 rotate-90" : "opacity-100"}`}
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
						fill="#0A0A0A"
					/>
				</svg>
				<svg
					className={`absolute transition-all duration-300 ${open ? "opacity-100" : "opacity-0 scale-75 -rotate-90"}`}
					width="18"
					height="18"
					viewBox="0 0 20 20"
					fill="none"
				>
					<path
						d="M4 4L16 16M16 4L4 16"
						stroke="#0A0A0A"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</button>
		</div>
	);
}
