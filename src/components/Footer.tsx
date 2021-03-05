import {FC} from 'react';

import {ResponsiveContainer} from './ResponsiveContainer';

export const Footer: FC = ({children}) => (
    <footer>
        <ResponsiveContainer>
            {children}
        </ResponsiveContainer>
    </footer>
);
