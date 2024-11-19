// import { createGlobalStyle } from 'styled-components';
// import { GBFont, OCFont } from './types';

// export default createGlobalStyle`
//   /* For browsers that don't support variable fonts */
//   @supports not (font-variation-settings: normal) {
//     @font-face {
//       font-family: ${GBFont.regular};
//       font-display: fallback;
//       src: url('/fonts/Faro-RegularLucky.woff2') format('woff2'),
//         url('/fonts/Faro-RegularLucky.woff') format('woff');
//       font-weight: 400;
//       font-style: normal;
//       text-rendering: optimizeLegibility;
//     }

//     @font-face {
//       font-family: ${GBFont.semiBold};
//       font-display: fallback;
//       src: url('/fonts/Faro-SemiBoldLucky.woff2') format('woff2'),
//         url('/fonts/Faro-SemiBoldLucky.woff') format('woff');
//       font-weight: 600;
//       font-style: normal;
//       text-rendering: optimizeLegibility;
//     }

//     @font-face {
//       font-family: ${GBFont.bold};
//       font-display: fallback;
//       src: url('/fonts/Faro-BoldLucky.woff2') format('woff2'),
//         url('/fonts/Faro-BoldLucky.woff') format('woff');
//       font-weight: 700;
//       font-style: normal;
//       text-rendering: optimizeLegibility;
//     }

//     @font-face {
//       font-family: ${OCFont.regular};
//       font-display: fallback;
//       src: url('/fonts/PublicSans-Regular.woff2') format('woff2'),
//         url('/fonts/PublicSans-Regular.woff') format('woff');
//       font-weight: 400;
//       font-style: normal;
//       text-rendering: optimizeLegibility;
//     }

//     @font-face {
//       font-family: ${OCFont.semiBold};
//       font-display: fallback;
//       src: url('/fonts/PublicSans-SemiBold.woff2') format('woff2'),
//         url('/fonts/PublicSans-SemiBold.woff') format('woff');
//       font-weight: 600;
//       font-style: normal;
//       text-rendering: optimizeLegibility;
//     }

//     @font-face {
//       font-family: ${OCFont.bold};
//       font-display: fallback;
//       src: url('/fonts/PublicSans-Bold.woff2') format('woff2'),
//         url('/fonts/PublicSans-Bold.woff') format('woff');
//       font-weight: 700;
//       font-style: normal;
//       text-rendering: optimizeLegibility;
//     }
//   }

//   /* For browsers that do support variable fonts */
//   @supports (font-variation-settings: normal) {
//     @font-face {
//       font-family: ${GBFont.variable};
//       font-display: fallback;
//       src: url('/fonts/Faro-Variable.woff2') format('woff2');
//       font-weight: 400 700;
//       font-style: normal;
//     }

//     @font-face {
//       font-family: ${OCFont.variable};
//       font-display: fallback;
//       src: url('/fonts/PublicSans-Variable.woff2') format('woff2');
//       font-weight: 400 700;
//       font-style: normal;
//     }
//   }

//   html,
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: ${(props) => props.theme.font.fallback};
//     scroll-padding-top: 75px;
//   }

//   a {
//     text-decoration: none;
//   }

//   * {
//     box-sizing: border-box;
//   }

//   span.highlight-match {
//     background-color: ${(props) => props.theme.color.primary};
//   }

//   strong {
//     font-weight: 600;
//   }
// `;
