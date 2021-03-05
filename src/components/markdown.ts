import {createElement, Fragment, ReactElement} from 'react';
import rehype from 'rehype-react';

export type MarkdownRenderer = (ast: GatsbyTypes.Scalars['JSON']) => ReactElement;

// @ts-expect-error apparently using rehype internals which are not typed
export const createMarkdownRenderer = (components = {}): MarkdownRenderer => new rehype({
    Fragment,
    createElement,
    components,
}).Compiler;

export const renderMarkdown = createMarkdownRenderer();
