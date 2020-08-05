import React, { memo } from "react";

import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";



// import { connect } from "react-redux";
import cx from "classnames";
import {  useDispatch, /*connect,useSelector*/ } from "react-redux";


const TodoListItem = memo( (props) => {
  
  const dispatch = useDispatch();
        
  //const { useSelector } = useSelector(state => state.auth)
  
  //const [input, setInput] = useState('');
  const todo = props.todo;

  return(
  <ListItem divider={props.divider}>
      {todo && todo.completed ? "👌" : "👋"}{" "}

    <Checkbox
      id={todo.id+'-todo'}
      onClick={() => {dispatch(props.onCheckBoxToggle(todo.id))}}
      checked={props.checked}
      disableRipple
    />
  <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
 <ListItemText htmlFor={todo.id+'-todo'}
    primary={todo.content} />    </span>
   
    
    <ListItemSecondaryAction>
      {<IconButton aria-label="Delete Todo" onClick={() => {dispatch(props.onDeleteButtonClick(todo.id))}}>
        <DeleteOutlined />
      </IconButton>}
    </ListItemSecondaryAction>
  </ListItem>
)});

export default TodoListItem;



// const Todo = memo( ({ todo, toggleTodo }) => (
//   <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
//     {todo && todo.completed ? "👌" : "👋"}{" "}
//     <span
//       className={cx(
//         "todo-item__text",
//         todo && todo.completed && "todo-item__text--completed"
//       )}
//     >
//       {todo.content}
//     </span>
//   </li>
// ));

// // export default Todo;
// export default connect(
//   null,
//   { toggleTodo }
// )(Todo);
