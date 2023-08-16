import { styled } from 'solid-styled-components';
import { rgba } from 'src/app/utils/css';
import { BorderRadiusConfig } from 'src/app/models/border-radius-config';
import { mediaNotTouch, mediaTouch } from 'src/app/styles/media';

const borders: BorderRadiusConfig = {
    m: '100vh',
    s: '8px',
    none: '0'
};

const scaleValues = {
    s: 0.02,
    m: 0.04
};

export const ButtonStyled = styled.button<{
    appearance: 'primary' | 'flat' | 'secondary';
    scale: 's' | 'm';
    hasIcon: boolean;
}>`
    display: ${props => (props.hasIcon ? 'flex' : 'inline-block')};
    gap: ${props => (props.hasIcon ? '6px' : 'unset')};
    align-items: ${props => (props.hasIcon ? 'center' : 'unset')};
    justify-content: ${props => (props.hasIcon ? 'space-between' : 'unset')};
    background-color: ${props =>
        props.appearance === 'flat'
            ? 'transparent'
            : props.appearance === 'secondary'
            ? props.theme!.colors.background.tint
            : rgba(props.theme!.colors.accent, 0.12)};
    color: ${props =>
        props.appearance === 'secondary'
            ? props.theme!.colors.text.primary
            : props.theme!.colors.accent};

    padding: ${props => (props.appearance === 'flat' ? '0' : '9px 16px')};
    border: none;
    border-radius: ${props => borders[props.theme!.borderRadius]};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    font-size: 14px;
    font-weight: 590;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${mediaNotTouch} {
        &:hover {
            transform: ${props =>
                props.disabled ? 'unset' : `scale(${1 + scaleValues[props.scale]})`};
        }
    }

    &:active {
        transform: ${props =>
            props.disabled ? 'unset' : `scale(${1 - scaleValues[props.scale]})`};
    }

    ${mediaTouch} {
        &:active {
            transform: ${props =>
                props.disabled ? 'unset' : `scale(${1 - scaleValues[props.scale] * 2})`};
        }
    }
`;
