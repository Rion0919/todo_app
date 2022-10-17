import React, { ChangeEventHandler, useState } from 'react'
import { ulid } from 'ulid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Todos = {
  id: string;
  content: string;
}

const Input: React.FC = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todos[]>([{id: ulid(), content: 'initialTodo'}]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const inputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo(e.target.value)
  }

  const displayHandler = () => {
    setTodos([...todos, {id: ulid(), content: todo}]);
    setTodo('')
  }

  const deleteHandler = (id: string) => {
    // const newTodos: Todos[] = [{id: "test", content: "Hello"}];
    const todosCopy: Todos[] = todos.map((todo) => ({id: todo.id, content: todo.content}));
    const newTodos: Todos[] = todosCopy.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
    <TextField variant='standard' label="Add todo" value={todo} onChange={inputHandler}/>
    <Button variant='outlined' onClick={displayHandler}>Display</Button>
    <List>
      {todos.map((todo, index) => (
        <>
        <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemIcon onClick={() => {deleteHandler(todo.id)}}>
                <DeleteIcon sx={{ color: grey[900] }} />
              </ListItemIcon>
              <ListItemText onClick={handleOpen}>
                {todo.content}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {`Todo: ${todo.content}`}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: "12px" }}>
              {`ID: ${todo.id}`}
            </Typography>
          </Box>
        </Modal>
      </>
      ))}
    </List>
    </>
  )
}

export default Input
