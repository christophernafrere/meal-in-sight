'use client';
import RecipeCard from '@/components/recipe-card';
import { HeartCrack, HeartIcon, StarIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
    const [recipesList, setRecipesList] = useState<any[]>([]);
    const fetchMinimalRecipe = () => {
        return setRecipesList([
            ...[
                {
                    title: 'Lasagne',
                    imageUrl: '/lasagne.webp',
                    description: 'lorem ipsum',
                    difficulity: 2, // sur 3
                },
                {
                    title: 'Risotto de champignon',
                    imageUrl: '/risotto-champignon.webp',
                    description: 'lorem ipsum',
                    difficulity: 3, // sur 3
                },

                {
                    title: 'Risotto de champignon',
                    imageUrl: '/risotto-champignon.webp',
                    description: 'lorem ipsum',
                    difficulity: 3, // sur 3
                },

                {
                    title: 'Risotto de champignon',
                    imageUrl: '/risotto-champignon.webp',
                    description: 'lorem ipsum',
                    difficulity: 3, // sur 3
                },
            ],
        ]);
    };
    useEffect(() => {
        fetchMinimalRecipe();
    }, []);
    return (
        <HomeContainer>
            <RecipeContent>
                {recipesList.map((recipe, i) => {
                    return <RecipeCard iteration={i} key={i} />;
                })}
            </RecipeContent>
            <MenuReaction>
                <ActionButton $type="dislike">
                    <HeartCrack size={48} />
                </ActionButton>
                <ActionButton $type="star">
                    <StarIcon size={48} />
                </ActionButton>
                <ActionButton $type="like">
                    <HeartIcon size={48} />
                </ActionButton>
            </MenuReaction>
        </HomeContainer>
    );
}

const HomeContainer = styled.section`
    position: relative;
    width: 95%;
    height: 80vh;
    margin: auto;
`;

const MenuReaction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 20%);
    z-index: 1000;
    gap: 24px;
    width: 80%;
    height: 15%;
`;

const ActionButton = styled(motion.button)<{
    $type: 'like' | 'dislike' | 'star';
}>`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transform: rotateX('18deg');
    background-color: ${({ $type }) => {
        return {
            like: '#eefeff',
            star: '#feffee',
            dislike: '#fff1ee',
        }[$type];
    }};
    border: none;
    box-shadow: 0 8px 12px black;
    cursor: pointer;
`;

const RecipeContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ARTags = styled.div``;
