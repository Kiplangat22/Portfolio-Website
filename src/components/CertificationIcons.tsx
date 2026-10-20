import { SiCisco, SiTableau } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { FaCertificate } from 'react-icons/fa';
import type { CertificationLogo } from '../../shared/types';

// Logo shown on a white tile for each certification. ALX has no icon in react-icons,
// so it uses a wordmark; swap in an <img> of the official logo if you add one to public/.
export const CertificationIcon = ({ logo }: { logo?: CertificationLogo }) => {
    switch (logo) {
        case 'tableau':
            return <SiTableau size={34} style={{ color: '#E97627' }} />;
        case 'sql':
            return <TbSql size={38} style={{ color: '#0F766E' }} />;
        case 'cisco':
            return <SiCisco size={40} style={{ color: '#049FD9' }} />;
        case 'alx':
            return <span className="font-black text-xl tracking-tight text-[#002B56]">ALX</span>;
        default:
            return <FaCertificate size={30} className="text-primary-dark" />;
    }
};
