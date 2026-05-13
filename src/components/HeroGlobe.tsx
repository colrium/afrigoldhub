import GlobeGl, { GlobeMethods } from "react-globe.gl";
import {  useEffect, useRef } from "react";
import { Trans, useTranslation } from "next-i18next/pages";
import { useFrame } from "@react-three/fiber";
interface GlobeProps {
	hideRings: boolean;
	showcase: [string];
	className?: string;
}


const Globe = ({ hideRings=false, showcase=["places"], className }: GlobeProps) => {
    const globeEl = useRef<GlobeMethods|undefined>(undefined);
    const { t } = useTranslation("common");
    const placesData =( t("operations.locations.places", { returnObjects: true }) as {
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
	}[]).map((place) => ({
		...place,
		maxR: 1,
		propagationSpeed: 0.5,
		repeatPeriod: 1,
	}));
    
    const labelsTopOrientation = new Set(["Kenya", "Eswatini", "Malawi"]);
	
    useEffect(() => {
        if (globeEl.current) {
			// Auto-rotate
			globeEl.current.controls().autoRotate = false;
            globeEl.current.controls().autoRotateSpeed = 0.1;
            globeEl.current.controls().enableZoom = false;
		}
		
    }, []);
    
   
    
	return (
		<GlobeGl
			ref={globeEl}
			globeImageUrl="/img/earth/earth-night.jpg"
			bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
			backgroundColor="#00000000"
			atmosphereAltitude={0.05}
			atmosphereColor="#00000000"
			globeOffset={[-50, -50]}
			width={620}
			height={620}
			showAtmosphere={false}
			labelsData={placesData}
			labelColor={() => "#f3bd27"}
			labelText={"country"}
			labelDotOrientation={(d) => (labelsTopOrientation.has(d.country) ? "top" : "bottom")}
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
	);
};
export default Globe;
