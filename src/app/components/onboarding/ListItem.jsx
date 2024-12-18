import Image from "next/image";

const ListItem = ({ iconSrc, altText, text }) => {
  return (
    <li className="flex items-center">
      <Image
        src={iconSrc}
        alt={altText}
        width={32}
        height={32}
        className="mr-4"
      />
      {text}
    </li>
  );
};

export default ListItem;
