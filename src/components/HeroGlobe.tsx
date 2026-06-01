// @ts-nocheck
import GlobeGl, { GlobeMethods } from "react-globe.gl";
import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next/pages";
import { useBreakpoint } from "@/hooks/useWindowSize";
// import { useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
interface GlobeProps {
	className?: string;
}
type LocationPlace = {
	role: string;
	country: string;
	flag?: string;
	site: string;
	region: string;
	lat: number;
	lng: number;
	place_id: string | null;
	deposit_type: string[];
	goldfield: string;
	geology: string;
	licence_authority: string;
	regulatory_body: string;
	status: string;
	elevation_m: number;
	notes: string;
};

const sizes = {
	xs: 360,
	sm: 420,
	md: 500,
	lg: 600,
	xl: 600,
};

const Globe = ({ className }: GlobeProps) => {
	const globeEl = useRef<GlobeMethods | undefined>(undefined);
	/* const { scrollYProgress } = useScroll();
    const prevScrollValue = useRef<number>(0);
    useMotionValueEvent(scrollYProgress, "change", (latestValue) => {
        console.log("Current scroll progress: ", latestValue);
        if (globeEl.current) {
            const direction = latestValue > prevScrollValue.current ? "down" : "up";
            prevScrollValue.current = latestValue;
            // Auto-rotate
            const rotation = ((latestValue / 4) * Math.PI * 2);
            console.log('rotation', rotation);
            if (direction === "down") {
                globeEl.current.controls().rotateLeft(-rotation);
            } else {
                globeEl.current.controls().rotateLeft(rotation);
            }
        }
      }); */
	const { t } = useTranslation(["common", "operations"]);
	const breakpoint = useBreakpoint();

	const size = sizes[breakpoint];

	const placesData = (
		t("operations:locations.places", {
			returnObjects: true,
			defaultValue: [],
		}) as LocationPlace[]
	).map((place) => ({
		...place,
		maxR: 1,
		propagationSpeed: 0.5,
		repeatPeriod: 1,
	}));

	const labelsTopOrientation = new Set(["Kenya", "Eswatini", "Malawi"]);

	const labelDotOrientation = (d: LocationPlace) => {
		labelsTopOrientation.has(d.country) ? "top" : "bottom";
	};

	useEffect(() => {
		if (globeEl.current) {
			// Auto-rotate
			globeEl.current.controls().autoRotate = false;
			globeEl.current.controls().autoRotateSpeed = 0.1;
			globeEl.current.controls().enableZoom = false;
		}
	}, []);

	return (
		<div>
			<GlobeGl
				ref={globeEl}
				globeImageUrl="/img/earth/earth-night.jpg"
				bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
				backgroundColor="#00000000"
				atmosphereAltitude={0.05}
				atmosphereColor="#00000000"
				// globeOffset={[-5, -10]}
				width={size}
				height={size}
				showAtmosphere={false}
				labelsData={placesData}
				labelColor={() => "#f3bd27"}
				labelText={"country"}
				labelDotOrientation={labelDotOrientation}
				labelLabel={(d) => (
					<div className="text-primary">
						<div className="text-xs text-onSurface-100">{d.goldfield}</div>
						<div className="text-xs">
							<i>{d.country}</i>
						</div>
						<div className="text-[10px] text-onSurface-100">{d.geology}</div>
					</div>
				)}
				labelSize={0}
				labelDotRadius={1}
				labelResolution={5}
			/>
		</div>
	);
};
export default Globe;
