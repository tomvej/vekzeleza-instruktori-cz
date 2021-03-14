import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {Summary, Title as TitleComponent} from '../components';

interface Props {
    actionLabel: string;
    actionTo: string;
}

export const Title: FC<Props> = ({actionLabel, actionTo}) => {
    const {site} = useStaticQuery<GatsbyTypes.TitleQuery>(graphql`
        query Title {
            site {
                siteMetadata {
                    title
                    description
                    summary {
                        label
                        value
                    }
                }
            }
        }
    `);

    return (
        <TitleComponent
            title={site.siteMetadata!.title}
            subtitle={site.siteMetadata!.description}
        >
            <Summary
                items={site.siteMetadata!.summary}
                actionLabel={actionLabel}
                actionTo={actionTo}
            />
        </TitleComponent>
    );
};
