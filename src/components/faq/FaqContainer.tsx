import {FC, useState} from 'react';

import {FaqContextProvider} from './FaqContext';

export const FaqContainer: FC = ({children}) => {
    const [expandedFaq, setExpandedFaq] = useState<number | undefined>();

    return (
        <dl>
            <FaqContextProvider value={{expandedFaq, setExpandedFaq}}>
                {children}
            </FaqContextProvider>
        </dl>
    );
};
