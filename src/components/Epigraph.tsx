import {FC} from 'react';

import {Box} from './Box';
import {Centering} from './Centering';
import style from './Epigraph.module.scss';

export const Epigraph: FC = ({children}) => (
    <Box>
        <Centering>
            <div className={style.main}>
                {children}
            </div>
        </Centering>
    </Box>
);
