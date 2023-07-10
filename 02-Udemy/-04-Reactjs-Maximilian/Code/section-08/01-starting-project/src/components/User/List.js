import React from "react";
import Card from "../UI/Card";
import classes from './List.module.css'
import ShowModal from "../UI/showModal";
const List = (props) => {
  // usersList.push(props.users)

  
  return (
    <Card className={classes.users}>

    <ul>
      {props.users.map((item) => (
        <li key={item.id} >
          {item.userName} {item.age} years old
      </li> 
      ))} 
       
    </ul>
      </Card>
)
}

export default List;