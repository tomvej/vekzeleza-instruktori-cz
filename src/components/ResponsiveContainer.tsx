import classnames from 'classnames';
import {FC} from 'react';

import style from './ResponsiveContainer.module.scss';

interface Props {
    narrow?: boolean;
}

export const ResponsiveContainer: FC<Props> = ({
    children,
    narrow = false,
}) => (
    <div className={classnames(style.main, {[style.narrow]: narrow})}>{children}</div>
);
