// import {
//   DefaultTheme,
//   FlattenInterpolation,
//   ThemedStyledProps,
//   css,
// } from 'styled-components';
// import { encodeColor, getTextColor } from './helpers';
// import { BaseButtonProps } from './style';

// export enum ButtonIcon {
//   arrow = 'arrow',
//   download = 'download',
// }

// type ThemedBaseButtonProps = ThemedStyledProps<BaseButtonProps, DefaultTheme>;

// export const buttonIconCss: Record<
//   ButtonIcon,
//   FlattenInterpolation<ThemedBaseButtonProps>
// > = {
//   [ButtonIcon.arrow]: css<BaseButtonProps>`
//     background-image: ${(props) =>
//       `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${encodeColor(
//         props.theme.color[getTextColor(props.color)]
//       )}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>')`};
//   `,
//   [ButtonIcon.download]: css<BaseButtonProps>`
//     background-image: ${(props) =>
//       `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${encodeColor(
//         props.theme.color[getTextColor(props.color)]
//       )}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//       <polyline points="7 10 12 15 17 10"></polyline>
//       <line x1="12" y1="15" x2="12" y2="3"></line></svg>')`};
//   `,
// };

// export const buttonIconBaseCss = css<BaseButtonProps>`
//   ::after {
//     content: '';
//     background-size: ${(props) => props.theme.buttons.fontSize.mobile[props.size]};
//     background-repeat: no-repeat;
//     width: ${(props) => props.theme.buttons.fontSize.mobile[props.size]};
//     height: ${(props) => props.theme.buttons.fontSize.mobile[props.size]};
//     display: ${(props) => (props.icon ? 'inline-block' : 'none')};
//     margin-left: 10px;
//     vertical-align: middle;
//     ${(props) => (props.icon ? buttonIconCss[props.icon] : null)}
//   }

//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     ::after {
//       background-size: ${(props) => props.theme.buttons.fontSize.desktop[props.size]};
//       width: ${(props) => props.theme.buttons.fontSize.desktop[props.size]};
//       height: ${(props) => props.theme.buttons.fontSize.desktop[props.size]};
//     }
//   }
// `;
