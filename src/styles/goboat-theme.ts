// import { DefaultTheme } from 'styled-components';
// import { getRemClamp } from '../lib/utils';
// import { ButtonSize } from '../sub-components/buttons/button';
// import { GBColor, GBFont } from './types';

// const GRID_INNER_WIDTH = 1440;
// const GRID_OUTER_MARGIN = 80;
// const GRID_EXTENDED_COLUMN_MIN_WIDTH = 50;
// const GRID_EXTENDED_COLUMN_MAX_WIDTH = 160;

// const colors: Record<GBColor, string> = {
//   white: '#FFFFFF',
//   black: '#1F1F1F',

//   jet: '#333333',
//   charcoal: '#44525F',

//   lightGray: '#F5F6F7',
//   gray: '#E6E7E8',

//   yellow: '#FFDF63',
//   red: '#B22020',
// };

// export const goboatTheme: DefaultTheme = {
//   name: 'GOBOAT',

//   /* Fonts */
//   font: {
//     regular: GBFont.regular,
//     semiBold: GBFont.semiBold,
//     bold: GBFont.bold,
//     variable: GBFont.variable,
//     fallback: GBFont.fallback,
//   },

//   /* Font sizes */
//   // Still uses "getRemClamp" if we want dynamic font sizes after testing
//   fontSize: {
//     desktop: {
//       heading1: getRemClamp(60, { minPixelValue: 60 }),
//       heading2: getRemClamp(50, { minPixelValue: 50 }),
//       heading3: getRemClamp(40, { minPixelValue: 40 }),
//       heading4: getRemClamp(27, { minPixelValue: 27 }),
//       heading5: getRemClamp(22, { minPixelValue: 22 }),
//       heading6: getRemClamp(16, { minPixelValue: 16 }),
//       text: getRemClamp(16, { minPixelValue: 16 }),
//       smallText: getRemClamp(14, { minPixelValue: 14 }),
//       link: getRemClamp(16, { minPixelValue: 16 }),
//       inspirational: getRemClamp(50, { minPixelValue: 50 }),
//     },
//     mobile: {
//       heading1: '2.375rem',
//       heading2: '1.625rem',
//       heading3: '1.125rem',
//       heading4: '1.1125rem',
//       heading5: '1.1rem',
//       heading6: '1rem',
//       text: '1rem',
//       smallText: '0.875rem',
//       link: '1rem',
//       inspirational: '1.625rem',
//     },
//   },

//   /* Colors */
//   color: {
//     white: colors.white,
//     black: colors.black,
//     dark: colors.jet,
//     light: colors.lightGray,

//     primary: colors.yellow,
//     secondary: colors.charcoal,
//     inactive: colors.gray,
//     error: colors.red,
//     textPrimary: colors.jet,
//     textSecondary: colors.charcoal,
//     textDark: colors.jet,
//     textLight: colors.white,
//     linkHover: colors.charcoal,
//     pageBackground: colors.white,
//     burgerMenuBackground: colors.charcoal,
//     burgerMenuDesktop: colors.jet,
//     burgerMenuDark: colors.charcoal,
//     burgerMenuLight: colors.white,
//     menuBackground: colors.lightGray,
//     menuLinksDark: colors.jet,
//     menuLinksLight: colors.lightGray,
//     backgroundButton: colors.charcoal,
//     textButtonOnHover: colors.white,
//     langSelectBackground: colors.white,
//     langSelectBorder: colors.jet,
//     langSelectText: colors.jet,
//     langSelectHover: colors.lightGray,

//     footerBackground: colors.white,
//     footerText: colors.charcoal,
//     footerLink: colors.charcoal,

//     buttonBackgroundPrimary: colors.yellow,
//     buttonBorderPrimary: colors.yellow,
//     buttonTextPrimary: colors.black,

//     buttonBackgroundSecondary: colors.charcoal,
//     buttonBorderSecondary: colors.charcoal,
//     buttonTextSecondary: colors.white,

//     buttonBackgroundLight: colors.lightGray,
//     buttonBorderLight: colors.lightGray,
//     buttonTextLight: colors.black,

//     buttonBackgroundDark: colors.black,
//     buttonBorderDark: colors.black,
//     buttonTextDark: colors.white,

//     buttonBackgroundMenu: 'transparent',
//     buttonBorderMenu: colors.jet,
//     buttonTextMenu: colors.jet,
//     buttonBackgroundFeatured: colors.lightGray,

//     heroHeadline: colors.white,
//     heroOverlay: colors.black,

//     border: colors.charcoal,
//     noImageBackground: colors.lightGray,
//     sectionTagBorder: colors.charcoal,
//     inputBackground: colors.lightGray,
//     seeAlsoBackground: colors.lightGray,
//     factBoxBackground: colors.lightGray,
//     factBoxText: colors.black,
//     pricingTableBorderColor: colors.charcoal,
//     pricingTableHoverColor: colors.lightGray,
//     pricingBlockOptionDefaultBackground: colors.lightGray,
//     pricingBlockOptionMostPopularBackground: colors.charcoal,
//   },

//   /* Spacing */
//   spacing: {
//     none: 0,
//     xsmall: 8,
//     xsmallx: 12,
//     small: 16,
//     smallx: 24,
//     medium: 32,
//     mediumX: 40,
//     mediumXX: 48,
//     mediumXXX: 56,
//     large: 64,
//     xlarge: 80,
//     xxlarge: 104,
//   },

//   /* Breakpoints */
//   breakpoints: {
//     tablet: 768,
//     desktop: 1181,
//     desktopLarge: 1651,
//     extendedGrid:
//       GRID_INNER_WIDTH + 2 * GRID_OUTER_MARGIN + 2 * GRID_EXTENDED_COLUMN_MIN_WIDTH,
//   },

//   /* Grid */
//   grid: {
//     innerWidth: GRID_INNER_WIDTH,
//     extendedColumnMinWidth: GRID_EXTENDED_COLUMN_MIN_WIDTH,
//     extendedColumnMaxWidth: GRID_EXTENDED_COLUMN_MAX_WIDTH,
//     padding: 0,
//     gap: 24,
//     outerMargin: GRID_OUTER_MARGIN,
//     columnCount: 12,
//     mobile: {
//       gap: 0,
//       outerMargin: 16,
//       columnCount: 4,
//     },
//   },

//   /** Buttons */
//   buttons: {
//     borderRadius: '100px',
//     fontSize: {
//       desktop: {
//         [ButtonSize.small]: getRemClamp(14, { minPixelValue: 14 }),
//         [ButtonSize.medium]: getRemClamp(16, { minPixelValue: 16 }),
//         [ButtonSize.large]: getRemClamp(21, { minPixelValue: 21 }),
//       },
//       mobile: {
//         [ButtonSize.small]: '0.875rem',
//         [ButtonSize.medium]: '1rem',
//         [ButtonSize.large]: '1.125rem',
//       },
//     },
//     padding: {
//       desktop: {
//         [ButtonSize.small]: '8px 16px',
//         [ButtonSize.medium]: '18px 38px 17px',
//         [ButtonSize.large]: '22px 55px',
//       },
//       mobile: {
//         [ButtonSize.small]: '8px 16px',
//         [ButtonSize.medium]: '14px 34px',
//         [ButtonSize.large]: '18px 44px',
//       },
//     },
//   },

//   menu: {
//     height: {
//       desktop: {
//         open: '64.67px',
//         closed: '60px',
//       },
//       mobile: {
//         open: '120px',
//         closed: '48px',
//       },
//     },
//     padding: {
//       desktop: '6px 21.33px',
//       mobile: '',
//     },
//   },
// };
