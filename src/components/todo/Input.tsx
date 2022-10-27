import React, { memo, useState } from 'react';
import { ulid } from 'ulid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import { Todos } from '../../types';

const Input: React.FC = memo(() => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Array<Todos>>([
    { id: ulid(), content: "Let's add Todos!!", check: false },
  ]);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addHandler = (todo: string) => {
    if (todo !== '') {
      setTodos([...todos, { id: ulid(), content: todo, check: false }]);
      setTodo('');
    } else {
      alert('Insert your todo');
    }
  };

  const deleteHandler = (id: string) => {
    const newTodos = todos.filter((d) => id !== d.id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const checkHandler = (id: string) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.check = !todo.check;
        console.log(`${todo.id} is Checked ${todo.check}`);
      }
    });
  };

  return (
    <>
      <TextField
        variant="standard"
        label="Create todo"
        value={todo}
        onChange={inputHandler}
      />
      <Button variant="outlined" onClick={() => addHandler(todo)}>
        Add
      </Button>
      <List>
        {todos.map((todo) => (
          <ListItem disablePadding key={todo.id}>
            <ListItemButton>
              <ListItemIcon
                onClick={() => {
                  if (!todo.check) {
                    deleteHandler(todo.id);
                  }
                }}>
                <DeleteIcon sx={{ color: grey[900] }} />
              </ListItemIcon>
              <ListItemText>{todo.content}</ListItemText>
              <Checkbox onClick={() => checkHandler(todo.id)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
});

export default Input;
