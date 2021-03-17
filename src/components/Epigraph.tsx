import {FC} from 'react';

import {Box} from './Box';
import style from './Epigraph.module.scss';

export const Epigraph: FC = ({children}) => (
    <Box>
        <div className={style.main}>
            {children}
        </div>
    </Box>
);
