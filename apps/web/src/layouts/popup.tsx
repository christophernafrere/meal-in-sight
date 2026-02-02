'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { XIcon } from 'lucide-react';
type PopupType = {
    children: ReactNode;
    fromButton?: boolean;
    buttonText?: string;
    width?: string;
    height?: string;
    onClose: () => void;
};

export default function Popup({
    children,
    fromButton,
    buttonText,
    onClose,
}: PopupType) {
    return (
        <>
            <BgPopup>
                <PopupFrame>
                    <CloseButton onClick={onClose}>
                        <XIcon />
                    </CloseButton>
                    {children}
                </PopupFrame>
            </BgPopup>
            {fromButton && <button>{buttonText}</button>}
        </>
    );
}

const BgPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000092;
    backdrop-filter: blur(4px);
    z-index: 1000;
`;

const PopupFrame = styled.div<{ width?: string; height?: string }>`
    position: relative;
    ${({ width, height }) =>
        `
                width: ${width || '80vw'};
                min-height: ${height || '30vh'};
            `}
    background-color: white;
    z-index: 1500;
    border-radius: 20px;
    box-shadow: 0px 6px 12px #14d0ff9f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        text-align: center;
    }
`;

const CloseButton = styled.button`
    background-color: red;
    color: white;
    padding: 0px;
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 16px;
    right: 16px;
`;
