import {Link} from 'gatsby';
import {FC} from 'react';

import {ResponsiveContainer} from '../components';
import {PageMeta} from '../containers';

const SecondPage: FC = () => (
    <ResponsiveContainer>
        <PageMeta />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </ResponsiveContainer>
);

export default SecondPage;
