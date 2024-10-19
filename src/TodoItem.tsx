import React from 'react';

interface TodoItemProps {
  todo: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>{todo}</li>
  );
};

export default TodoItem;
