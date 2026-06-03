export type GalleryMediaType = "image" | "video";

export type GalleryCategoryId =
	| "site"
	| "site-extraction"
	| "geological-survey"
	| "artisanal-mining"
	| "processing"
	| "equipment"
	| "smelting-and-assay"
	| "sale-distribution"
	| "nuggets";

export type GalleryMediaItem = {
	id: string;
	categoryId: GalleryCategoryId;
	src: string;
	type: GalleryMediaType;
};

type GalleryCategory = {
	id: GalleryCategoryId;
	items: GalleryMediaItem[];
};

function item(categoryId: GalleryCategoryId, fileName: string): GalleryMediaItem {
	const type = fileName.endsWith(".mp4") ? "video" : "image";
	const id = fileName.replace(/\.[^.]+$/, "");

	return {
		id,
		categoryId,
		src: `/media/${categoryId}/${fileName}`,
		type,
	};
}

export const galleryCategories: GalleryCategory[] = [
	{
		id: "site",
		items: [
			item("site", "site-1.mp4"),
			item("site", "site-2.jpeg"),
			item("site", "site-3.jpeg"),
			item("site", "site-4.jpeg"),
			item("site", "site-5.jpeg"),
			item("site", "site-6.jpeg"),
			item("site", "site-7.jpeg"),
			item("site", "site-8.jpeg"),
			item("site", "site-9.jpeg"),
			item("site", "site-10.jpeg"),
			item("site", "site-11.jpeg"),
			item("site", "site-12.jpeg"),
			item("site", "site-13.jpeg"),
			item("site", "site-14.jpeg"),
			item("site", "site-15.jpeg"),
			item("site", "site-16.jpeg"),
			item("site", "site-17.jpeg"),
			item("site", "site-18.jpeg"),
			item("site", "site-19.jpeg"),
			item("site", "site-20.jpeg"),
			item("site", "site-21.mp4"),
			item("site", "site-22.mp4"),
			item("site", "site-23.mp4"),
		],
	},
	{
		id: "site-extraction",
		items: [
			item("site-extraction", "site-extraction-1.jpeg"),
			item("site-extraction", "site-extraction-2.jpeg"),
			item("site-extraction", "site-extraction-3.jpeg"),
			item("site-extraction", "site-extraction-4.jpeg"),
			item("site-extraction", "site-extraction-5.mp4"),
			item("site-extraction", "site-extraction-6.jpeg"),
			item("site-extraction", "site-extraction-7.jpeg"),
			item("site-extraction", "site-extraction-8.jpeg"),
			item("site-extraction", "site-extraction-9.jpeg"),
			item("site-extraction", "site-extraction-10.jpeg"),
			item("site-extraction", "site-extraction-11.mp4"),
			item("site-extraction", "site-extraction-12.mp4"),
			item("site-extraction", "site-extraction-13.mp4"),
			item("site-extraction", "site-extraction-14.png"),
			item("site-extraction", "site-extraction-15.jpeg"),
			item("site-extraction", "site-extraction-16.png"),
			item("site-extraction", "site-extraction-17.jpeg"),
			item("site-extraction", "site-extraction-18.jpeg"),
			item("site-extraction", "site-extraction-19.jpeg"),
			item("site-extraction", "site-extraction-20.jpeg"),
			item("site-extraction", "site-extraction-21.jpeg"),
		],
	},
	{
		id: "geological-survey",
		items: [item("geological-survey", "survey-1.png")],
	},
	{
		id: "artisanal-mining",
		items: [
			item("artisanal-mining", "mining-1.jpeg"),
			item("artisanal-mining", "mining-2.mp4"),
			item("artisanal-mining", "mining-3.png"),
			item("artisanal-mining", "mining-4.png"),
			item("artisanal-mining", "mining-5.jpeg"),
			item("artisanal-mining", "mining-6.png"),
			item("artisanal-mining", "mining-7.mp4"),
			item("artisanal-mining", "mining-8.png"),
			item("artisanal-mining", "mining-9.mp4"),
			item("artisanal-mining", "mining-10.mp4"),
			item("artisanal-mining", "mining-11.mp4"),
			item("artisanal-mining", "mining-12.jpeg"),
			item("artisanal-mining", "mining-13.jpeg"),
			item("artisanal-mining", "mining-14.mp4"),
			item("artisanal-mining", "mining-15.mp4"),
			item("artisanal-mining", "mining-16.mp4"),
			item("artisanal-mining", "mining-17.mp4"),
			item("artisanal-mining", "mining-18.png"),
			item("artisanal-mining", "mining-19.png"),
		],
	},
	{
		id: "processing",
		items: [
			item("processing", "processing-1.png"),
			item("processing", "processing-2.png"),
			item("processing", "processing-3.mp4"),
			item("processing", "processing-4.png"),
		],
	},
	{
		id: "equipment",
		items: [
			item("equipment", "equipment-1.png"),
			item("equipment", "equipment-2.png"),
			item("equipment", "equipment-3.png"),
			item("equipment", "equipment-4.png"),
			item("equipment", "equipment-5.png"),
			item("equipment", "equipment-6.png"),
		],
	},
	{
		id: "smelting-and-assay",
		items: [
			item("smelting-and-assay", "smelting-and-assay-1.png"),
			item("smelting-and-assay", "smelting-and-assay-2.jpeg"),
			item("smelting-and-assay", "smelting-and-assay-3.mp4"),
			item("smelting-and-assay", "smelting-and-assay-4.jpeg"),
			item("smelting-and-assay", "smelting-and-assay-5.jpeg"),
			item("smelting-and-assay", "smelting-and-assay-6.jpeg"),
			item("smelting-and-assay", "smelting-and-assay-7.png"),
			item("smelting-and-assay", "smelting-and-assay-8.jpeg"),
		],
	},
	{
		id: "sale-distribution",
		items: [
			item("sale-distribution", "sale-distribution-1.png"),
			item("sale-distribution", "sale-distribution-2.jpeg"),
			item("sale-distribution", "sale-distribution-3.mp4"),
			item("sale-distribution", "sale-distribution-4.png"),
			item("sale-distribution", "sale-distribution-5.png"),
			item("sale-distribution", "sale-distribution-6.png"),
		],
	},
	{
		id: "nuggets",
		items: [
			item("nuggets", "nugget-1.png"),
			item("nuggets", "nugget-2.png"),
			item("nuggets", "nugget-3.jpeg"),
			item("nuggets", "nugget-4.jpeg"),
			item("nuggets", "nugget-5.jpeg"),
		],
	},
];

export function getGalleryCategories(categoryIds?: GalleryCategoryId[]) {
	if (!categoryIds?.length) return galleryCategories;

	const selected = new Set(categoryIds);
	return galleryCategories.filter((category) => selected.has(category.id));
}
