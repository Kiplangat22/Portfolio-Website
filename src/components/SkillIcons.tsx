import type { IconType } from 'react-icons';
import {
    SiCss3, SiCypress, SiHtml5, SiJira, SiNodedotjs, SiPostman, SiPython, SiReact, SiTableau, SiTypescript,
} from 'react-icons/si';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';
import { VscAzure } from 'react-icons/vsc';
import { TbChartDots, TbChartHistogram, TbChartLine, TbSql } from 'react-icons/tb';
import { PowerBiIcon } from './PowerBiIcon';

interface SkillIcon {
    Icon: IconType;
    // Brand color; omit for icons that carry their own colors
    color?: string;
}

// Keyed by the skill names used in shared/portfolio.ts
export const skillIcons: Record<string, SkillIcon> = {
    'Tableau': { Icon: SiTableau, color: '#E97627' },
    'Power BI': { Icon: PowerBiIcon },
    'Excel': { Icon: PiMicrosoftExcelLogo, color: '#217346' },
    'SQL': { Icon: TbSql, color: '#0F766E' },
    'Python': { Icon: SiPython, color: '#3776AB' },
    'TypeScript': { Icon: SiTypescript, color: '#3178C6' },
    'Descriptive Analysis': { Icon: TbChartHistogram, color: '#0F766E' },
    'Regression Analysis': { Icon: TbChartDots, color: '#0F766E' },
    'Time Series Analysis': { Icon: TbChartLine, color: '#0F766E' },
    'Jira': { Icon: SiJira, color: '#0052CC' },
    'Postman': { Icon: SiPostman, color: '#FF6C37' },
    'Cypress': { Icon: SiCypress, color: '#17202C' },
    'HTML': { Icon: SiHtml5, color: '#E34F26' },
    'CSS': { Icon: SiCss3, color: '#1572B6' },
    'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
    'React': { Icon: SiReact, color: '#087EA4' },
    'Azure': { Icon: VscAzure, color: '#0078D4' },
};
