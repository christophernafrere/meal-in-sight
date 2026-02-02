'use client';
import ARPopup from '@/components/ARPopup';
import RecipeCard from '@/components/recipe-card';
import { fakeRecipes, RecipeWithIngredients } from '@/data/recipe';
import { HeartCrack, HeartIcon, StarIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
    const totalRecipes = fakeRecipes.length;
    const desiredQueueLength = Math.min(3, totalRecipes);
    const [recipesQueue, setRecipesQueue] = useState<RecipeWithIngredients[]>(
        () => fakeRecipes.slice(0, desiredQueueLength),
    );
    const nextIndexRef = useRef<number>(
        totalRecipes > 0 ? desiredQueueLength % totalRecipes : 0,
    );
    const [showARPopup, setShowARPopup] = useState<boolean>(false);
    const [lastInteractedRecipeId, setLastInteractedRecipeId] = useState<
        string | null
    >(null);
    const [lastSwipeDirection, setLastSwipeDirection] = useState<
        'like' | 'favorite' | 'dislike'
    >('dislike');

    const addRecipeToFavorite = (_recipe: RecipeWithIngredients) => {};

    const shiftRecipe = (
        afterShift?: (recipe: RecipeWithIngredients) => void,
    ) => {
        if (recipesQueue.length === 0 || totalRecipes === 0) {
            return;
        }

        setRecipesQueue((prev) => {
            if (prev.length === 0) {
                return prev;
            }

            const [current, ...rest] = prev;
            afterShift?.(current);

            if (desiredQueueLength === 0) {
                return rest;
            }

            const updated = [...rest];

            // Refill the deck to keep the stack size stable
            while (updated.length < desiredQueueLength && totalRecipes > 0) {
                if (totalRecipes === 1) {
                    updated.push(fakeRecipes[0]);
                    break;
                }

                let appended = false;
                for (let attempt = 0; attempt < totalRecipes; attempt += 1) {
                    const nextIndex = nextIndexRef.current % totalRecipes;
                    nextIndexRef.current =
                        (nextIndexRef.current + 1) % totalRecipes;
                    const candidate = fakeRecipes[nextIndex];

                    if (!candidate) {
                        continue;
                    }

                    if (
                        totalRecipes > desiredQueueLength &&
                        updated.some((recipe) => recipe.id === candidate.id)
                    ) {
                        continue;
                    }

                    updated.push(candidate);
                    appended = true;
                    break;
                }

                if (!appended) {
                    break;
                }
            }

            return updated;
        });
    };

    const likeRecipe = () => {
        shiftRecipe((recipe) => {
            setLastInteractedRecipeId(recipe.id);
            setShowARPopup(true);
        });
    };

    const swipeAction = (direction: 'like' | 'favorite' | 'dislike') => {
        if (!recipesQueue.length) {
            return;
        }

        setLastSwipeDirection(direction);

        if (direction === 'dislike') {
            shiftRecipe();
        } else if (direction === 'favorite') {
            shiftRecipe((recipe) => {
                addRecipeToFavorite(recipe);
            });
        } else if (direction === 'like') {
            likeRecipe();
        }
    };

    const hasRecipes = recipesQueue.length > 0;

    return (
        <HomeContainer>
            <RecipeContent>
                <AnimatePresence initial={false}>
                    {recipesQueue.map((recipe, i) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.title}
                            upvote={recipe.upvote}
                            imageUrl={recipe.imageUrl}
                            difficulty={recipe.difficulty}
                            iteration={i}
                            ARDisplay={recipe.ARDisplay}
                            isTop={i === 0}
                            exitDirection={lastSwipeDirection}
                        />
                    ))}
                </AnimatePresence>
            </RecipeContent>
            <MenuReaction>
                <ActionButton
                    $type="dislike"
                    onClick={() => swipeAction('dislike')}
                    disabled={!hasRecipes}
                >
                    <HeartCrack size={48} />
                </ActionButton>
                <ActionButton
                    $type="star"
                    onClick={() => swipeAction('favorite')}
                    disabled={!hasRecipes}
                >
                    <StarIcon size={48} />
                </ActionButton>
                <ActionButton
                    $type="like"
                    onClick={() => swipeAction('like')}
                    disabled={!hasRecipes}
                >
                    <HeartIcon size={48} />
                </ActionButton>
            </MenuReaction>
            {showARPopup && lastInteractedRecipeId && (
                <ARPopup
                    recipeId={lastInteractedRecipeId}
                    onClose={() => {
                        setShowARPopup(false);
                        setLastInteractedRecipeId(null);
                    }}
                />
            )}
            {!hasRecipes && (
                <EmptyStackMessage>Plus de recettes</EmptyStackMessage>
            )}
            {!hasRecipes && (
                <EmptyStackMessage>Plus de recettes</EmptyStackMessage>
            )}
        </HomeContainer>
    );
}

const HomeContainer = styled.section`
    position: relative;
    width: 95%;
    height: 65vh;
    margin: auto;

    @media (min-height: 800px) {
        height: 80vh;
    }
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

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
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

const EmptyStackMessage = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #666;
    font-size: 1.2rem;
`;
