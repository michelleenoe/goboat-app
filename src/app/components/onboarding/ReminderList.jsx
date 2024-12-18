import ListItem from "./ListItem";

const ReminderList = ({ items }) => {
  return (
    <ul className="space-y-4 text-left">
      {items.map((item, index) => (
        <ListItem
          key={index}
          iconSrc={item.iconSrc}
          altText={item.altText}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default ReminderList;
