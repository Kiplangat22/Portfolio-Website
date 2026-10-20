import { useEffect, useRef, useState } from 'react';

// True once the element has scrolled into view (stays true afterwards).
export function useInView<T extends Element>(threshold = 0.15) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!('IntersectionObserver' in window)) {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

export const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
