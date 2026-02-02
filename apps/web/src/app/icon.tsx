import { ImageResponse } from 'next/og';

export const size = {
    width: 512,
    height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#f97316',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: 200,
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                }}
            >
                MI
            </div>
        ),
        {
            ...size,
        },
    );
}
