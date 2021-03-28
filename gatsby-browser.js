import { NavbarContextProvider } from './src/components';
import { MediaProvider } from './src/utils';

export const wrapRootElement = ({element}) => (
    <NavbarContextProvider>
        <MediaProvider>
            {element}
        </MediaProvider>
    </NavbarContextProvider>
);
