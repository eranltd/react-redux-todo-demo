import React, { memo,useState  } from "react";
import {  useDispatch, /*connect,useSelector*/ } from "react-redux";
import { addTodo } from "../../redux/actions";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const AddTodo = memo(props => 
    {
        const dispatch = useDispatch();
        
        //const { useSelector } = useSelector(state => state.auth)
        
        const [input, setInput] = useState('');
        const updateInput = input => {
            setInput(input);
        };
            
        const handleAddTodo = () => {
            //props.addTodo(input);
            dispatch(addTodo(input));
            setInput("");
            };

    return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            onChange={e => updateInput(e.target.value)}
            value={input}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={handleAddTodo}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )});
    

export default AddTodo;

//   export default connect(
//   null,
//   { addTodo }
// )(AddTodo);


//export default AddTodo;
