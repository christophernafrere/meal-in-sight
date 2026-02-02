'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { PropsWithChildren, useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

// Collects styled-components styles during the server render and reuses them on the client.
export default function StyledComponentsRegistry({
    children,
}: PropsWithChildren) {
    const [styledComponentsSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsSheet.getStyleElement();
        styledComponentsSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') {
        return <>{children}</>;
    }

    return (
        <StyleSheetManager sheet={styledComponentsSheet.instance}>
            {children}
        </StyleSheetManager>
    );
}
