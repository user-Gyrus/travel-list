export const Item = ({ item, onDelete, onSelect }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onSelect(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
        <button onClick={() => onDelete(item.id)}>❌</button>
      </span>
    </li>
  );
};
