// import styled, { css } from 'styled-components';
// import { fontBold } from '../../styles/fonts';
// import { ButtonAlign, ButtonColor, ButtonProps, ButtonSize, ButtonWidth } from './button';
// import { ButtonGroupAlignment } from './button-group';
// import { SpacingValue } from '../../../styles/types';
// import { getBackgroundColor, getBorderColor, getTextColor } from './helpers';
// import { buttonIconBaseCss } from './button-icons';

// export interface BaseButtonProps extends ButtonProps {
//   color: ButtonColor;
//   size: ButtonSize;
//   align: ButtonAlign;
//   width: ButtonWidth;
//   marginTop: SpacingValue;
//   marginBottom: SpacingValue;
// }

// const baseButtonCss = css<BaseButtonProps>`
//   ${fontBold}

//   font-size: ${(props) => props.theme.buttons.fontSize.mobile[props.size]};
//   line-height: 1.18;
//   white-space: nowrap;
//   letter-spacing: 0.48px;

//   display: block;

//   border: none;
//   border-radius: ${(props) => props.theme.buttons.borderRadius};

//   box-shadow: 0px 0px 0px 1.5px
//     ${(props) => props.theme.color[getBorderColor(props.color)]};

//   cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};

//   padding: ${(props) => props.theme.buttons.padding.mobile[props.size]};

//   margin-top: ${(props) => props.theme.spacing[props.marginTop]}px;
//   margin-bottom: ${(props) => props.theme.spacing[props.marginBottom]}px;

//   margin-left: ${(props) =>
//     props.align === 'center' || props.align === 'right' ? 'auto' : 0};
//   margin-right: ${(props) =>
//     props.align === 'center' || props.align === 'left' ? 'auto' : 0};

//   ${(props) => (props.width === ButtonWidth.full ? 'width: 100%;' : null)}

//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) => props.theme.buttons.fontSize.desktop[props.size]};
//     padding: ${(props) => props.theme.buttons.padding.desktop[props.size]};
//     transition: transform 0.2s ease-out;

//     :hover {
//       transform: scale(0.95);
//     }
//   }
// `;

// // This button type has a filled background
// export const PrimaryButton = styled.button<BaseButtonProps>`
//   ${baseButtonCss}
//   ${buttonIconBaseCss}

//   background: ${(props) => props.theme.color[getBackgroundColor(props.color)]};
//   color: ${(props) => props.theme.color[getTextColor(props.color)]};
// `;

// // This button type has a transparent background
// // The text color for this button type is always the same as the border color
// export const SecondaryButton = styled.button<BaseButtonProps>`
//   ${baseButtonCss}
//   ${buttonIconBaseCss}

//   background-color: transparent;
//   color: ${(props) => props.theme.color[getBorderColor(props.color)]};
// `;

// export const ButtonGroupContainer = styled.div<{ align: ButtonGroupAlignment }>`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: ${(props) => props.align};
//   --gap: ${(props) => props.theme.spacing[SpacingValue.small]}px;
//   margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
//   width: calc(100% + var(--gap));

//   @media only screen and (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     --gap: ${(props) => props.theme.spacing[SpacingValue.medium]}px;
//   }

//   & > * {
//     margin: var(--gap) 0 0 var(--gap);
//   }
// `;
