import React from 'react';

function TodoList(propItems) {
  const { items } = propItems;

  return (
    <ul>
      { items.map((item) => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
}

export default TodoList;
