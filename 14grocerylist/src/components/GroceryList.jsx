import { GroceryItem } from "./GroceryItem";

export function GroceryList({ items, onUpdate, onRemove }) {
  const grouped = items.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  return (
    <div className="grocery-list">
      {Object.entries(grouped).map(([cat, items]) => (
        <div key={cat} className="category-block">
          <h3>{cat}</h3>
          {items.map((item) => (
            <GroceryItem
              key={item.id}
              item={item}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
