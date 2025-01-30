import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const App = () => {
  const [items, setItems] = useState([]);

  const handleDeleteAll = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete all the items?`
    );
    if (confirmed) setItems([]);
  };

  const handleAddItems = (item) => {
    setItems((items) => {
      return [...items, item];
    });
  };

  const handleDeleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDelete={handleDeleteItem}
        onSelect={handleToggle}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
