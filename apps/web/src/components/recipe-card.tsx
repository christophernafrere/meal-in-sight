'use client';
import { motion } from 'motion/react';
import styled from 'styled-components';

export default function RecipeCard({ iteration }: { iteration: number }) {
    return (
        <RecipeCardContainer iteration={iteration}>
            {iteration}
            <ARPins>AR disponible</ARPins>
        </RecipeCardContainer>
    );
}

const RecipeCardContainer = styled(motion.article)<{ iteration: number }>`
    width: 95%;
    height: 90%;
    position: absolute;
    left: 50%;
    top: 50%;

    /* 0 devant, 1 derrière, 2 encore derrière, ... */
    z-index: ${({ iteration }) => 100 - iteration};

    /* Pour éviter les surprises d'origine */
    transform-origin: center;

    ${({ iteration }) => {
        const stepY = 3; // écart vertical entre cartes (px)
        const stepScale = 0.05; // perte de taille par carte
        const y = -50 - iteration * stepY; // monte quand iteration augmente
        const scale = Math.max(0.8, 1 - iteration * stepScale); // 0 la plus grande
        return `transform: translate(-50%, ${y}%) scale(${scale});`;
    }}

    border-radius: 18px;
    box-shadow: 0 4px 8px black;
    background-color: white;
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
