export const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Buddy... You better start adding items and pack them</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPack = items.filter((item) => item.packed).length;
  const perCent = Math.round((numPack / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        <i>
          {perCent === 100
            ? "You have packed everything. Let's Go!"
            : `You have ${numItems} items on your list and you already packed
          ${numPack} (${perCent}%)`}
        </i>
      </em>
    </footer>
  );
};
