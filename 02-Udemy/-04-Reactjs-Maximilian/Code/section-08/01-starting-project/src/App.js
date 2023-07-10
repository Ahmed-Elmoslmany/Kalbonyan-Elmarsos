import React, {useState} from 'react';
import UserForm from './components/User/form';
import List from './components/User/List';
function App() {

  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, {userName: uName, age: uAge, id: Math.random.toString()}]
    })
  }
  return (
    <div >
      <UserForm onAddUser={addUserHandler}/>
      <List users={usersList}/>
    </div>
  );
}

export default App;
