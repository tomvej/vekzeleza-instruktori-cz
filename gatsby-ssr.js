import { NavbarContextProvider } from './src/components';

export const wrapRootElement = ({element}) => <NavbarContextProvider>{element}</NavbarContextProvider>;
