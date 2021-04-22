import GatsbyImage, {FluidObject} from 'gatsby-image';
import {FC} from 'react';

interface Props {
    name: string;
    image: FluidObject;
}

export const TeamMember: FC<Props> = ({name, image, children}) => (
    <div>
        <h2>{name}</h2>
        <GatsbyImage fluid={image} />
        {children}
    </div>
);
