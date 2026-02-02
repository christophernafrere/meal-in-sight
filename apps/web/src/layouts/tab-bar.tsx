'use client';
import { HomeIcon, StarIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

function TabBar() {
    const currentPath = usePathname();
    if (currentPath?.startsWith('/recipe')) {
        return null;
    }
    const tabs = [
        {
            icon: StarIcon,
            path: '/favorites',
            name: 'Favorites',
        },
        {
            icon: HomeIcon,
            path: '/',
            name: 'Accueil',
        },
        {
            icon: UserIcon,
            path: '/account',
            name: 'Compte',
        },
    ];
    return (
        <Container>
            {tabs.map((tab, id) => (
                <TabElement
                    key={id}
                    href={tab.path}
                    selected={currentPath === tab.path}
                >
                    <tab.icon size={40} />
                    {tab.name}
                </TabElement>
            ))}
        </Container>
    );
}

export default TabBar;

const Container = styled.div`
    width: 80%;
    height: 10vh;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
    left: 50%;
    bottom: 25px;
    transform: translate(-50%, 0);
    background-color: white;
    box-shadow: 0 4px 8px black;
    border-radius: 25px;
`;

const TabElement = styled(Link)<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    text-decoration: none;
    transition: 500ms;
    ${({ selected }) =>
        selected
            ? 'transform: translateY(-20%) scale(1.2)'
            : 'transform: translateY(0) scale(1)'};
`;
