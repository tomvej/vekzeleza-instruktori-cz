import {createContext, useContext} from 'react';

interface FaqContextValue {
    expandedFaq?: number;
    setExpandedFaq: (id?: number) => void;
}

const FaqContext = createContext<FaqContextValue | null>(null);

export const FaqContextProvider = FaqContext.Provider;

type FaqContextApi = [boolean, () => void];

export const useFaqContext = (id: number): FaqContextApi => {
    const context = useContext(FaqContext);
    if (context === null) {
        throw new Error('Cannot access FAQ context. Probably using FaqItem outside of FaqContainer.');
    }
    const active = id === context.expandedFaq;

    return [
        active,
        () => context.setExpandedFaq(active ? undefined : id),
    ];
};
