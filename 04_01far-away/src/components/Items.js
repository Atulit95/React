export default function Item({ item, ondeleteItem, onToggleItem }) {
    return (
      <li
        className="item"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      >
        <input type="checkbox" />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => ondeleteItem(item.id)}>❌</button>
      </li>
    );
  }