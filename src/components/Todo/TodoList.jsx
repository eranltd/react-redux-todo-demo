import React, { memo /*,useState*/  } from "react";
import { /*connect, ,*/useDispatch, useSelector } from "react-redux";
import { List, Paper /*, Grid*/ } from "@material-ui/core";

import TodoListItem from "../Todo/TodoListItem";
import { getTodosByVisibilityFilter } from  "../../redux/selectors";
import { toggleTodo, removeTodo } from  "../../redux/actions";

// import { VISIBILITY_FILTERS } from "../../constants";


const TodoList = memo(props => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const todos = getTodosByVisibilityFilter(state, state.visibilityFilter);

return(
    
    <>
    {todos && todos.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: "hidden" }}>
          {todos.map((todo, idx) => (
              
              <TodoListItem
                todo={todo}
                key={`todo-${todo.id}`}
                divider= {todo.id !== todos.length - 1}
                onDeleteButtonClick={removeTodo}
                onCheckBoxToggle={toggleTodo}

              />

            ))}


            
          </List>
        </Paper>
      )}
    </>    
)

});


export default TodoList;
    




