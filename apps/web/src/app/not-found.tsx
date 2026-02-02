'use client';
import styled from 'styled-components';

export default function NotFoundPage() {
    return (
        <NotFoundSection>
            <img
                src="/404.png"
                alt="404 Not Found"
                style={{ width: '60%', height: 'auto' }}
            />
        </NotFoundSection>
    );
}

const NotFoundSection = styled.section({
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
});
