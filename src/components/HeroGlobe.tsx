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
  
    const placesData = [
		{
			lat: 0.4664,
			lng: 34.0886,
			place_id: "ChIJ5ZHcDPihfxcR39saSb3FhNQ",
			region: "Busia District, Eastern Region",
			text: "Busia-Kakamega Greenstone Belt",
			country: "Uganda",
		},
		{
			lat: -0.9711,
			lng: 34.2574,
			place_id: "ChIJ6xpyTCen1BkRvwDanI4UM0k",
			region: "Migori County, Nyanza Region",
            text: "Migori Greenstone Belt (Lake Victoria Goldfields)",
            country: "Kenya",
		},
		{
			lat: -2.8676,
			lng: 32.1865,
			place_id: "ChIJg3NfLjAYzxkRn-znACNIG5k",
			region: "Geita District, Geita Region",
            text: "Lake Victoria Goldfield - Geita Greenstone Belt",
            country: "Tanzania",
		},
		{
			lat: 8.6438,
			lng: -10.9714,
			place_id: null,
			region: "Kono District, Eastern Province",
            text: "Kono-Kenema Greenstone Belt, West African Craton",
            country: "Sierra Leone",
		},
		{
			lat: -26.4384,
			lng: 27.4259,
			place_id: "ChIJTcMEZRXPlR4RSELvZ88nXs8",
			region: "West Rand, Gauteng Province",
            text: "Witwatersrand Basin",
            country: "South Africa",
		},
		{
			lat: -26.2037,
			lng: 31.0303,
			place_id: "ChIJXRJk03zc6B4R2sc1kB0ABco",
			region: "Hhohho Region, northwest Eswatini",
            text: "Hhohho Greenstone Belt",
            country: "Eswatini",
		},
		{
			lat: -13.7984,
			lng: 32.8802,
			place_id: null,
			region: "Mchinji District, Central Region",
            text: "Central Malawi Greenstone Belt",
            country: "Malawi",
		},
	].map((place) => ({
		...place,
		maxR: 1,
		propagationSpeed: 0.5,
		repeatPeriod: 1,
	}));
    
    const labelsTopOrientation = new Set(["Kenya", "Eswatini", "Malawi"]);
	
    useEffect(() => {
        if (globeEl.current) {
			// Auto-rotate
			globeEl.current.controls().autoRotate = true;
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
					<div className="text-xs text-onSurface-100">{d.text}</div>
					<div className="text-xs">
						<i>{d.region}</i>
					</div>
				</div>
			)}
			labelSize={1.25}
			labelDotRadius={1}
			labelResolution={5}
		/>
	);
};
export default Globe;
