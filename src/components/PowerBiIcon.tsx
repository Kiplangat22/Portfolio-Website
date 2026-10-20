import type { IconType } from 'react-icons';

// Power BI is not in the react-icons library (Microsoft logos were removed from Simple Icons),
// so this is a simple three-bar mark in Power BI's colors. Replace it with the official
// icon file if you prefer: put it in public/ and render an <img> instead.
export const PowerBiIcon: IconType = ({ size = 24, className }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true">
        <rect x="13.5" y="2" width="6" height="20" rx="1.5" fill="#F2C811" />
        <rect x="9" y="7" width="6" height="15" rx="1.5" fill="#E8B10C" />
        <rect x="4.5" y="12" width="6" height="10" rx="1.5" fill="#C99A06" />
    </svg>
);
