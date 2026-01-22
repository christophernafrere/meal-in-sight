'use client';
import ARPopup from '@/components/ARPopup';
import RecipeCard from '@/components/recipe-card';
import { HeartCrack, HeartIcon, StarIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export type FakeRecipeType = {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    upvote: number;
    difficulty: number;
    ARDisplay: boolean;
};

export default function Home() {
    const router = useRouter();
    const [recipesList, setRecipesList] = useState<FakeRecipeType[]>([]);
    const [showARPopup, setShowARPopup] = useState<boolean>(false);
    const fetchMinimalRecipe = () => {
        return setRecipesList([
            ...[
                {
                    id: 1,
                    title: 'Lasagne',
                    imageUrl:
                        'https://franco.panzani.com/_ipx/f_webp&q_80&s_1800x1192/https://backend.franco.panzani.com/app/uploads/2024/07/lasagne-classique.jpg',
                    description:
                        'Pates fraiches superposees avec sauce bolognaise mijotee, couche de bechamel onctueuse et fromage gratine dore au four.',
                    difficulty: 2, // sur 3
                    upvote: 863,
                    ARDisplay: true,
                },
                {
                    id: 2,
                    title: 'Risotto de champignon',
                    imageUrl:
                        'https://img.cuisineaz.com/660x660/2018/09/25/i142810-risotto-de-champignons-de-paris.jpeg',
                    description:
                        'Risotto cremoso aux champignons sauvages, parfume au vin blanc et parmesan, garni de persil frais.',
                    difficulty: 3, // sur 3
                    upvote: 240,
                    ARDisplay: false,
                },
                {
                    id: 3,
                    title: 'Salade césar',
                    imageUrl:
                        'https://florette.fr/wp-content/uploads/2024/08/Salade-cesar-Florette.jpg',
                    description:
                        'Salade croquante avec poulet grille, croûtons aillés, copeaux de parmesan et sauce césar onctueuse.',
                    difficulty: 1, // sur 3
                    upvote: 540,
                    ARDisplay: true,
                },
            ],
        ]);
    };
    const addRecipeToFavorite = () => {};

    const likeRecipe = async () => {
        // const currentRecipeId = recipesList[0].id;
        // try {
        //     const response = await fetch(
        //         `https://api.meal-in-sight.fr/recipe/${currentRecipeId}/like`,
        //         {
        //             method: 'POST',
        //         },
        //     );

        //     if (response.status === 200) {
        //         setShowARPopup(true);
        //     }
        // } catch (error) {
        //     throw new Error('Internal Server Error');
        // }

        setShowARPopup(true);
    };

    const swipeAction = (direction: 'like' | 'favorite' | 'dislike') => {
        if (direction === 'dislike') {
            setRecipesList((prev) => prev.slice(1));
        } else if (direction === 'favorite') {
            alert('favorite');
        } else if (direction === 'like') {
            likeRecipe();
        }
    };
    useEffect(() => {
        fetchMinimalRecipe();
    }, []);
    return (
        <HomeContainer>
            <RecipeContent>
                <AnimatePresence initial={false} mode="popLayout">
                    {recipesList.map((recipe, i) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.title}
                            upvote={recipe.upvote}
                            imageUrl={recipe.imageUrl}
                            difficulty={recipe.difficulty}
                            iteration={i}
                            ARDisplay={recipe.ARDisplay}
                        />
                    ))}
                </AnimatePresence>
            </RecipeContent>
            <MenuReaction>
                <ActionButton
                    $type="dislike"
                    onClick={() => swipeAction('dislike')}
                >
                    <HeartCrack size={48} />
                </ActionButton>
                <ActionButton
                    $type="star"
                    onClick={() => swipeAction('favorite')}
                >
                    <StarIcon size={48} />
                </ActionButton>
                <ActionButton $type="like" onClick={() => swipeAction('like')}>
                    <HeartIcon size={48} />
                </ActionButton>
            </MenuReaction>
            {/* {showARPopup && <ARPopup recipeId={recipesList[0].id.toString()} />} */}
            {showARPopup && (
                <ARPopup
                    recipeId={'15'}
                    onClose={() => {
                        setShowARPopup(false);
                    }}
                />
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
