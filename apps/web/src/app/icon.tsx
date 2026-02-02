import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export const size = {
    width: 512,
    height: 512,
};

export const contentType = 'image/png';

const ICON_FILENAME = 'android-chrome-512x512.png';

export default async function Icon() {
    const iconPath = join(process.cwd(), 'public', ICON_FILENAME);
    const file = await readFile(iconPath);

    return new NextResponse(file, {
        headers: {
            'Content-Type': contentType,
        },
    });
}
