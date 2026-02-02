'use client';
import IngredientsCard from '@/components/ingredients-card';
import { getFakeRecipeById, RecipeWithIngredients } from '@/data/recipe';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ClassicRecipePage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<RecipeWithIngredients | null>(null);

    useEffect(() => {
        if (typeof id !== 'string') {
            setRecipe(null);
            return;
        }

        const mockRecipe = getFakeRecipeById(id);
        setRecipe(mockRecipe ?? null);
    }, [id]);

    return (
        <Container>
            <ReturnButton href="/">&larr; Retour aux recettes</ReturnButton>
            <ARRecipeButton href={`/recipe/${id}/augmented-reality`}>
                Voir en Réalité Augmentée
            </ARRecipeButton>

            <RecipeImage
                src={
                    recipe?.imageUrl ??
                    'https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/assets/6075182186d092000b192cee/best-free-travel-images-image-2.jpg'
                }
                alt={recipe?.title ?? 'Image de la recette'}
            />
            <Title>{recipe?.title || 'Nom de la recette'}</Title>

            <Description>
                {recipe?.description ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, temporibus et! Expedita, nam quisquam sunt perspiciatis atque esse omnis! Voluptates, reprehenderit a dolorem unde dolores omnis iste in rerum tempore.'}
            </Description>

            <IngredientSection>
                <h2>Ingrédients</h2>
                <IngredientList>
                    {recipe?.ingredients?.length ? (
                        recipe.ingredients.map((ingredient) => (
                            <IngredientsCard
                                key={ingredient.ingredientId}
                                item={ingredient}
                            />
                        ))
                    ) : (
                        <p>Aucun ingrédient disponible pour cette recette.</p>
                    )}
                </IngredientList>
            </IngredientSection>
            <RecipeStepSection>
                <h2>Étapes de la recette</h2>
                {recipe?.steps?.length ? (
                    <StepList>
                        {recipe.steps.map((step, index) => (
                            <StepItem key={index}>
                                <StepNumber>Étape {index + 1}</StepNumber>
                                <StepDescription>
                                    {step.description}
                                </StepDescription>
                                {step.imageUrl && (
                                    <StepImage
                                        src={step.imageUrl}
                                        alt={`Image de l'étape ${index + 1}`}
                                    />
                                )}
                            </StepItem>
                        ))}
                    </StepList>
                ) : (
                    <p>Aucune étape disponible pour cette recette.</p>
                )}
            </RecipeStepSection>
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    p {
        margin: 0;
    }
`;

const RecipeImage = styled.img`
    background-color: #e0e0e0;
    display: block;
    border-radius: 24px;
    width: 100%;
    height: 30vh;
    object-fit: cover;
`;
const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0;
    padding: 0;
`;
const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
`;

const IngredientSection = styled.section`
    margin-top: 2rem;
`;

const IngredientList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
`;

const RecipeStepSection = styled.section`
    margin-top: 2rem;
`;

const StepList = styled.ol`
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StepItem = styled.li`
    background-color: #f5f5f5;
    border-radius: 16px;
    padding: 1rem;
`;

const StepNumber = styled.p`
    font-weight: 600;
    margin: 0 0 0.5rem;
`;

const StepDescription = styled.p`
    margin: 0;
    line-height: 1.4;
`;

const StepImage = styled.img`
    margin-top: 0.75rem;
    width: 100%;
    border-radius: 12px;
    max-height: 220px;
    object-fit: cover;
    background-color: #e0e0e0;
`;

const ReturnButton = styled.a`
    display: inline-block;
    margin-bottom: 1rem;
    color: #0070f3;
    text-decoration: none;
    font-weight: 500;
    &:hover {
        text-decoration: underline;
    }
`;

const ARRecipeButton = styled.a`
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: inline-block;
    margin-top: 1rem;
    color: #0070f3;
    text-decoration: none;
    font-weight: 500;
    background-color: #ffeaeacc;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    &:hover {
        text-decoration: underline;
    }
`;
