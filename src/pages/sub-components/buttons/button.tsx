// import Link from 'next/link';

// import { PrimaryButton, SecondaryButton } from './style';
// import { SpacingValue } from '../../../styles/types';
// import { ButtonIcon } from './button-icons';

// export enum ButtonType {
//   primary = 'primary',
//   secondary = 'secondary',
// }

// export enum ButtonColor {
//   primary = 'primary',
//   secondary = 'secondary',
//   light = 'light',
//   dark = 'dark',
// }

// export enum ButtonSize {
//   small = 'small',
//   medium = 'medium',
//   large = 'large',
// }

// export enum ButtonAlign {
//   left = 'left',
//   center = 'center',
//   right = 'right',
// }

// export enum ButtonWidth {
//   default = 'default',
//   full = 'full',
// }

// export interface ButtonProps {
//   type?: ButtonType;
//   color?: ButtonColor;
//   size?: ButtonSize;
//   align?: ButtonAlign;
//   width?: ButtonWidth;
//   marginTop?: SpacingValue;
//   marginBottom?: SpacingValue;
//   text?: string;
//   link?: {
//     url: string;
//     title?: string;
//     rel?: string;
//     target?: string;
//   };
//   onClick?: () => void;
//   onMouseEnter?: () => void;
//   onMouseLeave?: () => void;
//   className?: string;
//   disabled?: boolean;
//   htmlType?: string;
//   icon?: ButtonIcon;
// }

// const Button = (props: ButtonProps) => {
//   const {
//     type = ButtonType.primary,
//     color = ButtonColor.primary,
//     size = ButtonSize.medium,
//     align = ButtonAlign.left,
//     width = ButtonWidth.default,
//     marginTop = SpacingValue.small,
//     marginBottom = SpacingValue.small,
//     text,
//     link,
//     className,
//     htmlType = 'button',
//     ...rest
//   } = props;

//   const buttonText = text ?? '';

//   const Button = type === ButtonType.secondary ? SecondaryButton : PrimaryButton;

//   const onClick = () => {
//     if (props.disabled) {
//       return null;
//     }
//     if (props.onClick) {
//       return props.onClick();
//     }
//   };

//   if (link?.url) {
//     // sometimes we have problems with links containing &amp; or u0026amp; instead of just &
//     const url = String(link.url)
//       .replace(/&amp;/g, '&')
//       .replace(/u0026amp;/g, '&');
//     return (
//       <Link href={url}>
//         <a
//           rel={link.rel}
//           target={link.target}
//           style={{ pointerEvents: props.disabled ? 'none' : 'auto' }}
//         >
//           <Button
//             color={color}
//             size={size}
//             align={align}
//             width={width}
//             marginTop={marginTop}
//             marginBottom={marginBottom}
//             onClick={onClick}
//             className={className}
//             dangerouslySetInnerHTML={{ __html: buttonText }}
//             {...rest}
//           />
//         </a>
//       </Link>
//     );
//   }

//   return (
//     <Button
//       color={color}
//       size={size}
//       align={align}
//       width={width}
//       marginTop={marginTop}
//       marginBottom={marginBottom}
//       onClick={onClick}
//       className={className}
//       dangerouslySetInnerHTML={{ __html: buttonText }}
//       {...rest}
//     />
//   );
// };

// export default Button;
