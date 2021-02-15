import {FC} from 'react';

import {ResponsiveContainer} from '../components';
import SEO from '../components/seo';

const NotFoundPage: FC = () => (
    <ResponsiveContainer>
        <SEO title="404: Not found" />
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </ResponsiveContainer>
);

export default NotFoundPage;
