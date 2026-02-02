'use client';
import { motion } from 'motion/react';
import styled from 'styled-components';
import { RectangleGogglesIcon } from 'lucide-react';

//export default function RecipeCard({ recipe, iteration }: { iteration: number, recipe: Recipe }) {
export default function RecipeCard({
    title,
    imageUrl,
    difficulty,
    upvote,
    ARDisplay,
    iteration,
    exitDirection,
    isTop,
}: {
    iteration: number;
    title: string;
    imageUrl: string;
    difficulty: number;
    upvote: number;
    ARDisplay: boolean;
    exitDirection: 'like' | 'favorite' | 'dislike';
    isTop: boolean;
}) {
    const exitStyles = (() => {
        if (!isTop) {
            return {
                opacity: 0,
                scale: 0.8,
                translateX: '-50%',
                translateY: `${-50 - iteration * 3.8}%`,
            };
        }

        switch (exitDirection) {
            case 'dislike':
                return {
                    opacity: 0,
                    translateX: '-180%',
                    translateY: `${-50 - iteration * 3.8}%`,
                    rotate: -12,
                };
            case 'favorite':
                return {
                    opacity: 0,
                    translateX: '-50%',
                    translateY: '115%',
                    scale: 0.9,
                    rotate: 6,
                };
            case 'like':
            default:
                return {
                    opacity: 0,
                    translateX: '140%',
                    translateY: `${-50 - iteration * 3.8}%`,
                    rotate: 10,
                };
        }
    })();

    const stackedTranslate = `${-50 - iteration * 3.8}%`;
    const stackedScale = Math.max(0.8, 1 - iteration * 0.05);

    return (
        <RecipeCardContainer
            $imageUrl={imageUrl}
            $iteration={iteration}
            initial={{
                opacity: 0,
                translateX: '-50%',
                translateY: '-55%',
                scale: 0.95,
            }}
            animate={{
                opacity: 1,
                translateX: '-50%',
                translateY: stackedTranslate,
                scale: stackedScale,
            }}
            exit={exitStyles}
            transition={{ duration: 0.2 }}
        >
            {ARDisplay && (
                <ARPins>
                    <RectangleGogglesIcon />
                </ARPins>
            )}

            <DescriptionSection>
                <h2>{title}</h2>
            </DescriptionSection>
        </RecipeCardContainer>
    );
}

const RecipeCardContainer = styled(motion.article)<{
    $iteration: number;
    $imageUrl: string;
}>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 95%;
    height: 90%;
    position: absolute;
    left: 50%;
    top: 50%;

    @media screen {
    }

    /* 0 devant, 1 derrière, 2 encore derrière, ... */
    z-index: ${({ $iteration }) => 100 - $iteration};

    /* Pour éviter les surprises d'origine */
    transform-origin: center;

    border-radius: 18px;
    box-shadow: 0 4px 8px black;
    background-color: white;
    background-image: url(${({ $imageUrl }) => $imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
`;

const ARPins = styled.p`
    position: absolute;
    top: 0;
    right: 16px;
    background-color: red;
    color: white;
    padding: 4px 8px;
    border-radius: 8px;
`;

const DescriptionSection = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    color: white;
    padding: 8px 0;
    box-sizing: border-box;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0)
    );
    padding: 8px 24px;
    h2 {
        margin: 0;
    }
`;
