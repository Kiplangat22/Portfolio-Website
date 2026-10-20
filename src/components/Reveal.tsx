import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

// Fades and lifts its children in the first time they scroll into view.
// `delay` (seconds) staggers items in a grid or list.
export const Reveal = ({
    children,
    delay = 0,
    className = '',
    style,
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    style?: CSSProperties;
}) => {
    const { ref, inView } = useInView<HTMLDivElement>();
    return (
        <div
            ref={ref}
            className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s`, ...style }}
        >
            {children}
        </div>
    );
};
