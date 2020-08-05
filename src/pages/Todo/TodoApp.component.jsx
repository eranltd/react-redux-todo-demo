import React from "react";
import AddTodo from "../../components/Todo/AddTodo";
import TodoList from "../../components/Todo/TodoList";
import VisibilityFilters from "../../components/Todo/VisibilityFilter";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./TodoApp.style.scss";
import logo from '../../to-do-list-logo.png'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
      maxWidth: 345,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  media: {
    // height: 140,
  },small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));


export default function TodoApp() {
  const classes = useStyles();

    return (
      <div className="todo-app" >
 <Card className={classes.root}>
 <CardHeader
        avatar={
<Avatar alt="Remy Sharp" src={logo} className={classes.large} />

        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="todo app using react-redux"
        subheader="August 05, 2020"
      />
    </Card>        
    <AddTodo className={classes.root}/>
        <TodoList className={classes.root}/>
        <VisibilityFilters className={classes.root}/>
      </div>
    );
  }