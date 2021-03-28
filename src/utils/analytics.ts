export const pageView = (title: string, path: string): void => {
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
        window.gtag('event', 'page_view', {
            page_path: path,
            page_title: title,
        });
    }
};
