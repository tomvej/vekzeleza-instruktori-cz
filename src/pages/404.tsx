import {FC} from 'react';

import {ResponsiveContainer} from '../components';
import {PageMeta} from '../containers';

const NotFoundPage: FC = () => (
    <ResponsiveContainer>
        <PageMeta />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ResponsiveContainer>
);

export default NotFoundPage;
