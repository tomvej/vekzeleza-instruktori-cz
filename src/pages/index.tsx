import {Link} from 'gatsby';
import {FC} from 'react';

import {ResponsiveContainer} from '../components';
import {PageMeta} from '../containers';

import './style.scss';

const IndexPage: FC = () => (
    <ResponsiveContainer>
        <PageMeta />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </ResponsiveContainer>
);

export default IndexPage;
