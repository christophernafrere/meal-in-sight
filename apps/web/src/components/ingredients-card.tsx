'use client';
import {
    DEFAULT_INGREDIENT_IMAGE,
    IngredientOnRecipeWithIngredient,
} from '@/data/recipe';
import { Unity } from '@meal-in-sight/db/src/generated/prisma/browser';
import { styled } from 'styled-components';

type IngredientsCardProps = {
    item: IngredientOnRecipeWithIngredient;
};

const formatUnity = (unity: Unity) => {
    if (unity === Unity.Gram) {
        return 'g';
    }
    if (unity === Unity.Litter) {
        return 'L';
    }
    return String(unity).toLowerCase();
};

export default function IngredientsCard({ item }: IngredientsCardProps) {
    const { ingredient, quantity, baseUnity } = item;
    const quantityLabel = `${Intl.NumberFormat('fr-FR').format(quantity)} ${formatUnity(baseUnity)}`;
    const imageUrl = ingredient.imageUrl ?? DEFAULT_INGREDIENT_IMAGE;

    return (
        <Card>
            <Illustration>
                <IllustrationImage src={imageUrl} alt={ingredient.name} />
            </Illustration>
            <Content>
                <Header>
                    <Title>{ingredient.name}</Title>
                    <Quantity>{quantityLabel}</Quantity>
                </Header>
                <Description>{ingredient.description}</Description>
            </Content>
        </Card>
    );
}

const Card = styled.article`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Illustration = styled.div`
    position: relative;
    width: 100%;
    padding-top: 66%;
`;

const IllustrationImage = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
`;

const Quantity = styled.span`
    font-size: 0.95rem;
    font-weight: 500;
    color: #ff7043;
`;

const Description = styled.p`
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.4;
    color: #555555;
`;
