import {FC} from 'react';

const NotFoundPage: FC = ()  => {
    if (typeof window !== 'undefined') {
        window.location.replace('/');
    }
    return null;
};

export default NotFoundPage;
