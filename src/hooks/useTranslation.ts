// @ts-nocheck

import { useTranslation as useI18nTranslation } from "next-i18next/pages";

 const useTranslation = (ns?: string) => {
	const { t: originalT, ...rest } = useI18nTranslation(ns);

	const t = (key: string, options?: Record<string, unknown>): string => {
		return originalT(key, options) as unknown as string;
	};

	return { t, ...rest };
}
export default useTranslation;