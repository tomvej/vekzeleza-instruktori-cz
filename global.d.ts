declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare function gtag(command: string, what: string, options: Record<string, string>): void;
