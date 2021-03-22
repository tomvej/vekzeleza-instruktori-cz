import {createElement, Fragment, ReactElement} from 'react';
import rehype from 'rehype-react';

import {MarkdownLink} from './MarkdownLink';

type Ast = GatsbyTypes.Scalars['JSON'];

interface Node {
    type: string;
    tagName?: string;
    children: Node[]
}

export type MarkdownRenderer = (ast: Ast | Node) => ReactElement;

// @ts-expect-error apparently using rehype internals which are not typed
export const createMarkdownRenderer = (components = {}): MarkdownRenderer => new rehype({
    Fragment,
    createElement,
    components: {
        a: MarkdownLink,
        ...components,
    },
}).Compiler;

export const renderMarkdown = createMarkdownRenderer();

export const renderNodes = (renderer: MarkdownRenderer, children: Node[]): ReactElement => renderer({type: 'root', children});


const isHeading = ({type, tagName}: Node) => type === 'element' && tagName === 'h1';

export const splitHeading = (ast: Ast): {heading?: Node, nodes: Node[]} => {
    // @ts-expect-error
    const childNodes: Node[] = ast.children;

    const heading: Node | undefined = childNodes.find(isHeading);
    const nodes: Node[] = childNodes.filter((node) => !isHeading(node));

    return {heading, nodes};
};

export interface AstSection {
    heading: Node;
    children: Node[];
}

export const splitIntoSections = (nodes: Node[], level: number): {preface: Node[], sections: AstSection[]} => {
    const preface: Node[] = [];
    const sections: AstSection[] = [];
    let children = preface;
    nodes.forEach((node) => {
        if (node.type === 'element' && node.tagName === `h${level}`) {
            const section = {heading: node, children: []};
            children = section.children;
            sections.push(section);
        } else {
            children.push(node);
        }
    });
    return {preface, sections};
};
