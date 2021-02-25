import {createContext, FC, useContext, useMemo, useState} from 'react';

interface Context {
    height: number;
    setHeight: (height: number) => void;
}

const NavbarContext = createContext<Context | null>(null);

export const useNavbarContext = (): Context => {
    const value = useContext(NavbarContext);
    if (value === null) {
        throw new Error('Cannot access navbar context, probably using navbar or link without navbar context.');
    }
    return value;
};

export const NavbarContextProvider: FC = ({children}) => {
    const [height, setHeight] = useState(0);
    const value = useMemo(() => ({height, setHeight}), [height, setHeight]);
    return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>;
};


