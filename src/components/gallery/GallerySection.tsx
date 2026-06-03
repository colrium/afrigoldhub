import { useMemo, useState } from "react";
import Image from "next/image";
import { Modal, Tooltip } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useTranslation } from "@/hooks";
import {
	GalleryCategoryId,
	GalleryMediaItem,
	getGalleryCategories,
} from "./mediaCatalog";

type GallerySectionProps = {
	id?: string;
	categoryIds?: GalleryCategoryId[];
	sectionKey?: "locations" | "operations" | "valueChain";
	className?: string;
};

type CategoryCopy = {
	label: string;
	description: string;
};

const categoryButtonBase =
	"rounded border px-4 py-3 text-left transition-all min-h-[82px]";

function mediaLabel(item: GalleryMediaItem, category: CategoryCopy, index: number) {
	return `${category.label} ${index + 1}`;
}

export default function GallerySection({
	id = "gallery",
	categoryIds,
	sectionKey = "operations",
	className = "",
}: GallerySectionProps) {
	const { t } = useTranslation(["gallery"]);
	const categories = useMemo(() => getGalleryCategories(categoryIds), [categoryIds]);
	const [activeCategoryId, setActiveCategoryId] = useState<GalleryCategoryId | "all">("all");
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const visibleCategories = useMemo(() => {
		if (activeCategoryId === "all") return categories;
		return categories.filter((category) => category.id === activeCategoryId);
	}, [activeCategoryId, categories]);

	const visibleItems = useMemo(
		() =>
			visibleCategories.flatMap((category) =>
				category.items.map((item) => ({
					...item,
					category,
				}))
			),
		[visibleCategories]
	);

	const selectedItem = selectedIndex === null ? null : visibleItems[selectedIndex];
	const activeCategory =
		activeCategoryId === "all"
			? null
			: categories.find((category) => category.id === activeCategoryId);

	const changeSelectedIndex = (direction: 1 | -1) => {
		if (selectedIndex === null || visibleItems.length === 0) return;
		setSelectedIndex((selectedIndex + direction + visibleItems.length) % visibleItems.length);
	};

	const allLabel = t("gallery:filters.all");
	const sectionTitle = t(`gallery:sections.${sectionKey}.headline`);
	const sectionDescription = t(`gallery:sections.${sectionKey}.description`);
	const activeDescription = activeCategory
		? t(`gallery:categories.${activeCategory.id}.description`)
		: t(`gallery:sections.${sectionKey}.allDescription`);

	return (
		<section id={id} className={`py-16 md:py-24 bg-[#080808] ${className}`}>
			<div className="max-w-[1180px] mx-auto px-6 md:px-8">
				<div className="mb-9 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
					<div className="max-w-[720px]">
						<span className="inline-block text-xs uppercase text-primary mb-3">
							{t(`gallery:sections.${sectionKey}.tag`)}
						</span>
						<h2 className="text-4xl md:text-5xl text-onSurface-100">
							{sectionTitle}
						</h2>
						<p className="mt-4 text-onSurface-100 leading-[1.75] font-light">
							{sectionDescription}
						</p>
					</div>

					<div className="rounded-lg border border-primary/15 bg-[#111111] p-4">
						<div className="text-xs uppercase text-primary mb-2">
							{t("gallery:categoryOverview")}
						</div>
						<p className="text-sm leading-relaxed text-onSurface-100">
							{activeDescription}
						</p>
					</div>
				</div>

				<div className="mb-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
					<button
						type="button"
						onClick={() => setActiveCategoryId("all")}
						className={`${categoryButtonBase} ${
							activeCategoryId === "all"
								? "border-primary bg-primary/10 text-primary"
								: "border-primary/15 bg-surface-900 text-onSurface-100 hover:border-primary/50"
						}`}
					>
						<span className="block text-sm font-medium">{allLabel}</span>
						<span className="mt-1 block text-xs text-onSurface-100">
							{t("gallery:filters.allDescription")}
						</span>
					</button>

					{categories.map((category) => (
						<button
							key={category.id}
							type="button"
							onClick={() => setActiveCategoryId(category.id)}
							className={`${categoryButtonBase} ${
								activeCategoryId === category.id
									? "border-primary bg-primary/10 text-primary"
									: "border-primary/15 bg-surface-900 text-onSurface-100 hover:border-primary/50"
							}`}
						>
							<span className="block text-sm font-medium">
								{t(`gallery:categories.${category.id}.label`)}
							</span>
							<span className="mt-1 block text-xs text-onSurface-100">
								{category.items.length} {t("gallery:items")}
							</span>
						</button>
					))}
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-4">
					{visibleItems.map((item, index) => {
						const categoryCopy = t(`gallery:categories.${item.categoryId}`, {
							returnObjects: true,
						}) as CategoryCopy;
						const label = mediaLabel(item, categoryCopy, index);
						const isFeatured = index === 0 && visibleItems.length > 4;

						return (
							<button
								key={item.id}
								type="button"
								onClick={() => setSelectedIndex(index)}
								className={`group relative overflow-hidden rounded-lg border border-primary/15 bg-[#111111] text-left ${
									isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
								}`}
								aria-label={
									item.type === "video"
										? t("gallery:actions.playVideo")
										: t("gallery:actions.viewImage")
								}
							>
								{item.type === "image" ? (
									<Image
										src={item.src}
										alt={label}
										fill
										sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								) : (
									<video
										src={item.src}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										muted
										playsInline
										preload="metadata"
									/>
								)}
								<div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
								<div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4">
									<div>
										<div className="text-xs uppercase text-primary mb-1">
											{categoryCopy.label}
										</div>
										<h3 className="text-onSurface-100 font-medium">{label}</h3>
									</div>
									<span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-black/55 text-primary">
										{item.type === "video" ? <PlayArrowIcon /> : <ImageIcon />}
									</span>
								</div>
							</button>
						);
					})}
				</div>
			</div>

			<Modal
				open={selectedItem !== null}
				onClose={() => setSelectedIndex(null)}
				aria-labelledby="gallery-media-title"
				className="flex items-center justify-center px-4"
			>
				<div className="relative w-full max-w-[1120px] outline-none">
					<div className="relative overflow-hidden rounded-lg border border-primary/20 bg-black">
						<div className="relative h-[70vh] max-h-[760px] min-h-[320px]">
							{selectedItem?.type === "image" && (
								<Image
									src={selectedItem.src}
									alt={t(`gallery:categories.${selectedItem.categoryId}.label`)}
									fill
									sizes="100vw"
									className="object-contain"
									priority
								/>
							)}
							{selectedItem?.type === "video" && (
								<video
									key={selectedItem.src}
									src={selectedItem.src}
									className="h-full w-full object-contain"
									controls
									muted
									playsInline
									autoPlay
								/>
							)}
						</div>

						<div className="flex items-center justify-between gap-4 border-t border-primary/15 bg-[#080808] px-4 py-3">
							<div>
								<div className="text-xs uppercase text-primary">
									{selectedItem && t(`gallery:categories.${selectedItem.categoryId}.label`)}
								</div>
								<h3 id="gallery-media-title" className="text-sm text-onSurface-100">
									{selectedIndex !== null
										? `${selectedIndex + 1} / ${visibleItems.length}`
										: ""}
								</h3>
							</div>
							{selectedItem?.type === "video" && (
								<div className="hidden items-center gap-2 text-xs text-onSurface-100 sm:flex">
									<VolumeOffIcon fontSize="small" className="text-primary" />
									{t("gallery:mutedNotice")}
								</div>
							)}
						</div>
					</div>

					<Tooltip title={t("gallery:actions.close")}>
						<button
							type="button"
							onClick={() => setSelectedIndex(null)}
							className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-primary/30 bg-black/75 text-primary hover:bg-primary hover:text-black"
							aria-label={t("gallery:actions.close")}
						>
							<CloseIcon />
						</button>
					</Tooltip>

					<Tooltip title={t("gallery:actions.previous")}>
						<button
							type="button"
							onClick={() => changeSelectedIndex(-1)}
							className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-primary/30 bg-black/75 text-primary hover:bg-primary hover:text-black"
							aria-label={t("gallery:actions.previous")}
						>
							<ChevronLeftIcon />
						</button>
					</Tooltip>

					<Tooltip title={t("gallery:actions.next")}>
						<button
							type="button"
							onClick={() => changeSelectedIndex(1)}
							className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-primary/30 bg-black/75 text-primary hover:bg-primary hover:text-black"
							aria-label={t("gallery:actions.next")}
						>
							<ChevronRightIcon />
						</button>
					</Tooltip>
				</div>
			</Modal>
		</section>
	);
}
