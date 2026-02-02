import Popup from '@/layouts/popup';
import { Button } from './button';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
            <Content>
                <p>Suivre la recette en réalité augmentée</p>

                <ButtonContianer>
                    <Button onClick={() => goTo('classique')}>Non</Button>
                    <Button onClick={() => goTo('AR')}>Oui</Button>
                </ButtonContianer>
            </Content>

            <Image
                src="/AR-illu.png"
                alt="AR Illustration"
                width={400}
                height={300}
            />
        </Popup>
    );
}

const ButtonContianer = styled.div`
    display: flex;
    gap: 16px;
    position: relative;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffffa6;
    border-radius: 16px;
    backdrop-filter: blur(2px);
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 16px;
    p {
        font-size: 1.2rem;
        font-weight: 500;
    }
`;
