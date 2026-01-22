import Popup from '@/layouts/popup';
import { Button } from './button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

// export default function ARPopup({ recipeId }: { recipeId: string }) {
export default function ARPopup({
    recipeId,
    onClose,
}: {
    recipeId: string;
    onClose: () => void;
}) {
    const router = useRouter();
    const goTo = (mod: 'classique' | 'AR') =>
        router.push(
            `/recipe/${recipeId}/${mod === 'classique' ? '' : '/augmented-reality'}`,
        );
    return (
        <Popup onClose={onClose}>
            <p>Souhaitez vous visualiser la recette en Réalité Augmenté (AR)</p>

            <ButtonContianer>
                <Button onClick={() => goTo('classique')}>
                    Recette classique
                </Button>
                <Button onClick={() => goTo('AR')}>Recette AR</Button>
            </ButtonContianer>
        </Popup>
    );
}

const ButtonContianer = styled.div`
    display: flex;
    gap: 16px;
`;
