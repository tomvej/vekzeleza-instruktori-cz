import {createContext, FC, useCallback, useContext, useEffect, useMemo, useState} from 'react';

import breakpoints from '../media.scss';

type Breakpoints = 'sm' | 'md' | 'lg';
type Value = Record<Breakpoints, boolean>;

const mediaContext = createContext<Value>({sm: false, md: false, lg: false});

const useBreakpoint = (breakpoint: string): boolean => {
    const [mediaList] = useState(() => window.matchMedia(`screen and (max-width: ${breakpoint})`));
    const [matches, setMatches] = useState(mediaList.matches);
    const synchronize = useCallback(() => {
        setMatches(mediaList.matches);
    }, [setMatches]);
    useEffect(() => {
        mediaList.addEventListener('change', synchronize);
        return () => mediaList.removeEventListener('change', synchronize);
    }, [setMatches]);

    return matches;
};

export const MediaProvider: FC = ({children}) => {
    const sm = useBreakpoint(breakpoints.sm);
    const md = useBreakpoint(breakpoints.md);
    const lg = useBreakpoint(breakpoints.lg);

    const value = useMemo(() => ({sm, md, lg}), [sm, md, lg]);

    return (
        <mediaContext.Provider value={value}>
            {children}
        </mediaContext.Provider>
    );
};

export const useMedia = (): Value => useContext(mediaContext);
