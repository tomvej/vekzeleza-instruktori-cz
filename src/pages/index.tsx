import {Link} from 'gatsby';
import {FC} from 'react';

import {ResponsiveContainer} from '../components';
import SEO from '../components/seo';

import './style.scss';

const IndexPage: FC = () => (
    <ResponsiveContainer>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
    </ResponsiveContainer>
);

export default IndexPage;
