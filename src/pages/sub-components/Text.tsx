// import Image from 'next/image';
// import NextLink from 'next/link';
// import { ForwardedRef, forwardRef, useContext } from 'react';
// import styled, { css } from 'styled-components';
// import {
//   StyledExpandableFactBoxContent,
//   StyledFactBoxContent,
// } from '../components/fact-box/style';
// import { SpacingValue } from '../styles/types';
// import { fontRegular, fontSemiBold } from '../styles/fonts';
// import TextColorContext from '../lib/text-color-context';

// export enum TextColor {
//   primary = 'textPrimary',
//   secondary = 'textSecondary',
//   white = 'white',
//   dark = 'textDark',
//   light = 'textLight',
//   themePrimary = 'primary',
// }

// function checkTextColor(color: TextColor | string): color is TextColor {
//   return Object.values(TextColor).includes(color as TextColor);
// }

// export type BaseTextProps = {
//   align?: string;
//   margin?: SpacingValue;
//   marginTop?: SpacingValue;
//   marginBottom?: SpacingValue;
//   color?: TextColor;
//   bold?: boolean;
//   dangerouslySetInnerHTML?: {
//     __html: string;
//   };
// };

// const useTextColor = (propsColor?: string) => {
//   const textColorContext = useContext(TextColorContext);

//   if (propsColor && checkTextColor(propsColor)) return propsColor;

//   if (textColorContext.textColor) return TextColor[textColorContext.textColor];

//   return undefined;
// };

// /**
//  * Common CSS for all headings
//  */
// const baseHeadingCss = css<BaseTextProps>`
//   ${fontSemiBold}

//   line-height: 1.1;
//   margin: 0;
//   padding: 0;
//   margin-top: ${(props) =>
//     props.theme.spacing[props.marginTop || props.margin || 'medium']}px;
//   margin-bottom: ${(props) =>
//     props.theme.spacing[props.marginBottom || props.margin || 'medium']}px;
//   text-align: ${(props) => props.align};
//   color: ${(props) =>
//     props.color && checkTextColor(props.color)
//       ? props.theme.color[props.color]
//       : props.theme.color.textPrimary};
//   overflow-wrap: break-word;
//   hyphens: manual;

//   ${StyledExpandableFactBoxContent} &, ${StyledFactBoxContent} & {
//     color: ${(props) => props.theme.color.factBoxText};
//   }
// `;

// export type StyledHeadingProps = BaseTextProps & {
//   size?: number;
// };

// export type HeadingProps = BaseTextProps & {
//   size?: number;
//   children?: React.ReactNode;
//   style?: React.CSSProperties | undefined;
// };

// /**
//  * Heading 1
//  */
// export const heading1Css = css<StyledHeadingProps>`
//   ${baseHeadingCss}

//   /* Mobile font size */
//   font-size: ${(props) =>
//     `calc(${props.theme.fontSize.mobile.heading1} * ${props.size ? props.size : 1})`};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) =>
//       `calc(${props.theme.fontSize.desktop.heading1} * ${props.size ? props.size : 1})`};
//   }
// `;
// export const StyledHeading1 = styled.h1<StyledHeadingProps>`
//   ${heading1Css}
// `;

// export const Heading1 = (props: HeadingProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledHeading1 {...props} color={textColor}>
//       {props.children}
//     </StyledHeading1>
//   );
// };

// /**
//  * Heading 2
//  */
// export const heading2Css = css<StyledHeadingProps>`
//   ${baseHeadingCss}

//   /* Mobile font size */
//   font-size: ${(props) =>
//     `calc(${props.theme.fontSize.mobile.heading2} * ${props.size ? props.size : 1})`};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) =>
//       `calc(${props.theme.fontSize.desktop.heading2} * ${props.size ? props.size : 1})`};
//   }
// `;
// export const StyledHeading2 = styled.h2<StyledHeadingProps>`
//   ${heading2Css}
// `;

// export const Heading2 = (props: HeadingProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledHeading2 {...props} color={textColor}>
//       {props.children}
//     </StyledHeading2>
//   );
// };

// /**
//  * Heading 3
//  */
// export const heading3Css = css<StyledHeadingProps>`
//   ${baseHeadingCss}

//   /* Mobile font size */
//   font-size: ${(props) =>
//     `calc(${props.theme.fontSize.mobile.heading3} * ${props.size ? props.size : 1})`};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) =>
//       `calc(${props.theme.fontSize.desktop.heading3} * ${props.size ? props.size : 1})`};
//   }
// `;
// export const StyledHeading3 = styled.h3<StyledHeadingProps>`
//   ${heading3Css}
// `;

// export const Heading3 = (props: HeadingProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledHeading3 {...props} color={textColor}>
//       {props.children}
//     </StyledHeading3>
//   );
// };

// /**
//  * Heading 4
//  */
// export const heading4Css = css<StyledHeadingProps>`
//   ${baseHeadingCss}

//   /* Mobile font size */
//   font-size: ${(props) =>
//     `calc(${props.theme.fontSize.mobile.heading4} * ${props.size ? props.size : 1})`};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) =>
//       `calc(${props.theme.fontSize.desktop.heading4} * ${props.size ? props.size : 1})`};
//   }
// `;
// export const StyledHeading4 = styled.h4<StyledHeadingProps>`
//   ${heading4Css}
// `;

// export const Heading4 = (props: HeadingProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledHeading4 {...props} color={textColor}>
//       {props.children}
//     </StyledHeading4>
//   );
// };

// /**
//  * Heading 5
//  */
// export const heading5Css = css<StyledHeadingProps>`
//   ${baseHeadingCss}

//   /* Mobile font size */
//   font-size: ${(props) =>
//     `calc(${props.theme.fontSize.mobile.heading5} * ${props.size ? props.size : 1})`};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) =>
//       `calc(${props.theme.fontSize.desktop.heading5} * ${props.size ? props.size : 1})`};
//   }
// `;
// export const StyledHeading5 = styled.h5<StyledHeadingProps>`
//   ${heading5Css}
// `;

// export const Heading5 = (props: HeadingProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledHeading5 {...props} color={textColor}>
//       {props.children}
//     </StyledHeading5>
//   );
// };

// /**
//  * Heading 6
//  */
// export const heading6Css = css<StyledHeadingProps>`
//   ${baseHeadingCss}

//   /* Mobile font size */
//   font-size: ${(props) =>
//     `calc(${props.theme.fontSize.mobile.heading6} * ${props.size ? props.size : 1})`};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) =>
//       `calc(${props.theme.fontSize.desktop.heading6} * ${props.size ? props.size : 1})`};
//   }
// `;
// export const StyledHeading6 = styled.h6<StyledHeadingProps>`
//   ${heading6Css}
// `;

// export const Heading6 = (props: HeadingProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledHeading6 {...props} color={textColor}>
//       {props.children}
//     </StyledHeading6>
//   );
// };

// /**
//  * Inspirational message
//  */
// export type StyledInspirationalMessageProps = StyledHeadingProps;

// export type InspirationalMessageProps = StyledInspirationalMessageProps & {
//   children?: React.ReactNode;
// };

// export const StyledInspirationalMessage = styled.p<StyledInspirationalMessageProps>`
//   ${fontRegular}

//   color: ${(props) =>
//     props.color && checkTextColor(props.color)
//       ? props.theme.color[props.color]
//       : props.theme.color.textPrimary};

//   margin: 0;
//   padding: 0;

//   line-height: 1.2;

//   text-align: ${(props) => props.align};

//   margin-top: ${(props) => props.theme.spacing[props.marginTop || 'none']}px;
//   margin-bottom: ${(props) => props.theme.spacing[props.marginBottom || 'none']}px;

//   /* Mobile font size */
//   font-size: ${(props) => props.theme.fontSize.mobile.inspirational};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) => props.theme.fontSize.desktop.inspirational};
//   }
// `;

// export const InspirationalMessage = (props: InspirationalMessageProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledInspirationalMessage {...props} color={textColor}>
//       {props.children}
//     </StyledInspirationalMessage>
//   );
// };

// /**
//  * Common CSS for all paragraphs
//  */

// export const baseParagraphCss = css<BaseTextProps>`
//   ${fontRegular}

//   font-weight: ${(props) => (props.bold ? 700 : 400)};
//   line-height: 1.444;

//   margin: 0;
//   padding: 0;

//   color: ${(props) =>
//     props.color && checkTextColor(props.color)
//       ? props.theme.color[props.color]
//       : props.theme.color.textPrimary};

//   margin-top: ${(props) =>
//     props.theme.spacing[props.marginTop || props.margin || 'medium']}px;
//   margin-bottom: ${(props) =>
//     props.theme.spacing[props.marginBottom || props.margin || 'medium']}px;

//   text-align: ${(props) => props.align};
//   overflow-wrap: break-word;
//   hyphens: manual;

//   ${StyledExpandableFactBoxContent} &, ${StyledFactBoxContent} & {
//     color: ${(props) => props.theme.color.factBoxText};
//   }

//   a {
//     color: ${(props) =>
//       props.color && checkTextColor(props.color)
//         ? props.theme.color[props.color]
//         : props.theme.color.textPrimary};
//     text-decoration: underline;
//   }

//   a:hover {
//     color: ${(props) => props.theme.color.linkHover};
//   }
// `;

// /**
//  * Regular Paragraph
//  */
// export const textCss = css<BaseTextProps>`
//   ${baseParagraphCss}

//   /* Mobile font size */
//   font-size: ${(props) => props.theme.fontSize.mobile.text};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) => props.theme.fontSize.desktop.text};
//   }
// `;
// export const StyledText = styled.p`
//   ${textCss}
// `;

// export type TextProps = BaseTextProps & {
//   children?: React.ReactNode;
//   dangerouslySetInnerHTML?: { __html: string } | undefined;
//   style?: React.CSSProperties | undefined;
// };

// export const Text = (props: TextProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledText {...props} color={textColor}>
//       {props.children}
//     </StyledText>
//   );
// };

// /**
//  * Small Paragraph
//  */
// export const smallTextCss = css<BaseTextProps>`
//   ${baseParagraphCss}

//   /* Mobile font size */
//   font-size: ${(props) => props.theme.fontSize.mobile.smallText};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) => props.theme.fontSize.desktop.smallText};
//   }
// `;
// export const StyledSmallText = styled.p`
//   ${smallTextCss}
// `;

// export const SmallText = (props: TextProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledSmallText {...props} color={textColor}>
//       {props.children}
//     </StyledSmallText>
//   );
// };

// export const spanCss = css<BaseTextProps>`
//   ${baseParagraphCss}

//   /* Mobile font size */
//   font-size: ${(props) => props.theme.fontSize.mobile.text};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) => props.theme.fontSize.desktop.text};
//   }
// `;

// export const StyledSpan = styled.span`
//   ${spanCss}
// `;

// export const Span = (props: TextProps) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledSpan {...props} color={textColor}>
//       {props.children}
//     </StyledSpan>
//   );
// };

// type StyledLinkProps = BaseTextProps & {
//   className?: string;
//   target?: any;
// };

// /**
//  * Anchor Link
//  */
// export const styledLinkCss = css<StyledLinkProps>`
//   ${fontSemiBold}

//   line-height: 1.3;

//   margin: 0;
//   padding: 0;

//   color: ${(props) =>
//     props.color && checkTextColor(props.color)
//       ? props.theme.color[props.color]
//       : props.theme.color.textPrimary};

//   margin-top: ${(props) => props.theme.spacing[props.marginTop || 'none']}px;
//   margin-bottom: ${(props) => props.theme.spacing[props.marginBottom || 'none']}px;

//   /* Mobile font size */
//   font-size: ${(props) => props.theme.fontSize.mobile.link};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) => props.theme.fontSize.desktop.link};
//   }
// `;
// export const StyledLink = styled.a<StyledLinkProps>`
//   ${styledLinkCss}
// `;

// const LinkArrow = styled.div`
//   display: inline-block;
//   vertical-align: middle;
//   width: 7.5px;
//   height: 14px;
//   margin-left: 8px;

//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     width: 6px;
//     height: 10.67px;
//     margin-left: 10.67px;
//     position: relative;
//   }

//   right: 0px;
//   transition: all 0.2s;

//   ${StyledLink}:hover && {
//     right: -5px;
//   }
// `;

// // TODO: Fix the type of props ↓ (Link should also accept mouse events etc.)
// const LinkComponent = (
//   props: { color?: TextColor; [key: string]: any },
//   ref: ForwardedRef<HTMLAnchorElement>
// ) => {
//   const { children, href, className, target, onClick, style, ...rest } = props;

//   const textColor = useTextColor(props.color);

//   return (
//     <NextLink href={href} passHref>
//       <StyledLink
//         ref={ref}
//         className={className}
//         target={target}
//         onClick={onClick}
//         style={style}
//         {...rest}
//         color={textColor}
//       >
//         {children}
//         {props.arrow && (
//           <LinkArrow>
//             <Image
//               src="/c12.svg"
//               layout="responsive"
//               width="6px"
//               height="10.67px"
//               alt="Arrow right"
//             />
//           </LinkArrow>
//         )}
//       </StyledLink>
//     </NextLink>
//   );
// };

// export const Link = forwardRef(LinkComponent);

// interface StyledListItemProps {
//   color?: TextColor;
// }

// export type ListItemProps = StyledListItemProps & {
//   children?: React.ReactNode;
//   style?: React.CSSProperties | undefined;
// };

// export const listItemCss = css<StyledListItemProps>`
//   ${fontRegular}

//   line-height: 1.444;

//   margin: 0;
//   padding: 0;

//   color: ${(props) =>
//     props.color && checkTextColor(props.color)
//       ? props.theme.color[props.color]
//       : props.theme.color.textPrimary};

//   /* Mobile font size */
//   font-size: ${(props) => props.theme.fontSize.mobile.text};

//   /* Desktop font size */
//   @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
//     font-size: ${(props) => props.theme.fontSize.desktop.text};
//   }

//   ${StyledExpandableFactBoxContent} &, ${StyledFactBoxContent} & {
//     color: ${(props) => props.theme.color.factBoxText};
//   }

//   a {
//     color: ${(props) =>
//       props.color && checkTextColor(props.color)
//         ? props.theme.color[props.color]
//         : props.theme.color.textPrimary};
//     text-decoration: underline;
//   }

//   a:hover {
//     color: ${(props) => props.theme.color.linkHover};
//   }
// `;
// export const StyledListItem = styled.li`
//   ${listItemCss}
// `;

// const ListItemComponent = (props: ListItemProps, ref: ForwardedRef<HTMLLIElement>) => {
//   const textColor = useTextColor(props.color);

//   return (
//     <StyledListItem {...props} color={textColor} ref={ref}>
//       {props.children}
//     </StyledListItem>
//   );
// };

// export const ListItem = forwardRef(ListItemComponent);
