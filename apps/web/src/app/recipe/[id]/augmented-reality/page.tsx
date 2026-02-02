'use client';
import ARScene from '@/components/ar-scene';
import { getFakeRecipeById, RecipeWithIngredients } from '@/data/recipe';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const FALLBACK_IMAGE =
    'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80';

const detectWebGLSupport = () => {
    try {
        const canvas = document.createElement('canvas');
        return Boolean(
            canvas.getContext('webgl') ??
                canvas.getContext('experimental-webgl'),
        );
    } catch (error) {
        console.error('WebGL detection failed', error);
        return false;
    }
};

export default function RecipeAugmentedRealityPage() {
    const params = useParams();
    const recipeId = useMemo(
        () => (typeof params?.id === 'string' ? params.id : null),
        [params],
    );

    const [recipe, setRecipe] = useState<RecipeWithIngredients | null>(null);
    const [supportsWebGL, setSupportsWebGL] = useState(true);

    useEffect(() => {
        setSupportsWebGL(detectWebGLSupport());
    }, []);

    useEffect(() => {
        if (!recipeId) {
            setRecipe(null);
            return;
        }

        const mockRecipe = getFakeRecipeById(recipeId);
        setRecipe(mockRecipe ?? null);
    }, [recipeId]);

    const backUrl = recipeId ? `/recipe/${recipeId}` : '/';
    const recipeDescription =
        recipe?.description ??
        'Plonge cet ecran face au plat pour lancer la projection en realite augmentee.';

    return (
        <Container>
            <ClassicRecipeButton href={backUrl}>
                &larr; Retour a la fiche classique
            </ClassicRecipeButton>
            <ReturnButton href={backUrl}>&larr; Retour a la fiche</ReturnButton>
            <Header>
                <Cover
                    src={recipe?.imageUrl ?? FALLBACK_IMAGE}
                    alt={recipe?.title ?? 'Apercu de la recette'}
                />
                <HeroContent>
                    <Title>{recipe?.title ?? 'Experience augmentee'}</Title>
                    <Description>{recipeDescription}</Description>
                    <StatusBadge $ready={supportsWebGL}>
                        {supportsWebGL
                            ? 'WebGL detecte — pret pour un rendu 3D'
                            : 'WebGL indisponible sur cet appareil'}
                    </StatusBadge>
                </HeroContent>
            </Header>

            <Section>
                <SectionTitle>Zone de visualisation</SectionTitle>
                <Viewport>
                    {supportsWebGL ? (
                        <ARScene />
                    ) : (
                        <ViewportFallback>
                            <p>
                                Active WebGL dans ton navigateur ou passe sur un
                                appareil compatible pour profiter de lexperience
                                3D.
                            </p>
                        </ViewportFallback>
                    )}
                </Viewport>
            </Section>

            <Section>
                <SectionTitle>Instructions rapides</SectionTitle>
                <InstructionList>
                    <li>Place ton plat sur une surface plane et eclairee.</li>
                    <li>
                        Cadre le plat puis utilise la rotation pour inspecter la
                        projection.
                    </li>
                    <li>
                        Ajuste la distance pour verifier la consistance des
                        quantites et de la garniture.
                    </li>
                </InstructionList>
            </Section>

            {recipe && (
                <Section>
                    <SectionTitle>Informations recette</SectionTitle>
                    <MetaGrid>
                        <MetaItem>
                            <MetaLabel>Difficulte</MetaLabel>
                            <MetaValue>
                                {'★'.repeat(recipe.difficulty)}
                            </MetaValue>
                        </MetaItem>
                        <MetaItem>
                            <MetaLabel>Votes</MetaLabel>
                            <MetaValue>{recipe.upvote}</MetaValue>
                        </MetaItem>
                        <MetaItem>
                            <MetaLabel>Calories</MetaLabel>
                            <MetaValue>{recipe.globalCalories} kcal</MetaValue>
                        </MetaItem>
                        <MetaItem>
                            <MetaLabel>Regime</MetaLabel>
                            <MetaValue>{recipe.regim.join(', ')}</MetaValue>
                        </MetaItem>
                    </MetaGrid>
                </Section>
            )}
        </Container>
    );
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
`;

const Header = styled.header`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const Cover = styled.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 24px;
    background-color: #e0e0e0;
`;

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
    line-height: 1.2;
`;

const Description = styled.p`
    margin: 0;
    color: #4f4f4f;
    line-height: 1.5;
`;

const StatusBadge = styled.span<{ $ready: boolean }>`
    align-self: flex-start;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    font-size: 0.85rem;
    background-color: ${(props) => (props.$ready ? '#e8f5e9' : '#ffebee')};
    color: ${(props) => (props.$ready ? '#2e7d32' : '#c62828')};
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SectionTitle = styled.h2`
    margin: 0;
    font-size: 1.3rem;
`;

const Viewport = styled.div`
    position: relative;
    width: 100%;
    height: min(60vh, 480px);
    border-radius: 24px;
    border: 1px solid #e0e0e0;
    background: #fafafa;
    overflow: hidden;
`;

const ViewportFallback = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 100%;
    text-align: center;
    color: #555555;
`;

const InstructionList = styled.ul`
    margin: 0;
    padding-left: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #555555;
`;

const MetaGrid = styled.dl`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin: 0;
`;

const MetaItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem;
    border-radius: 16px;
    background-color: #f7f7f7;
`;

const MetaLabel = styled.dt`
    margin: 0;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #8c8c8c;
`;

const MetaValue = styled.dd`
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
`;

const ReturnButton = styled.a`
    align-self: flex-start;
    color: #0070f3;
    text-decoration: none;
    font-weight: 500;
    &:hover {
        text-decoration: underline;
    }
`;

const ClassicRecipeButton = styled.a`
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
