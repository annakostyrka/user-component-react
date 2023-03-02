import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);
  
  const setUserHandler = (userName, userAge) => {
    setUsersList((prevUserslist) => {
      return [...prevUserslist, {name: userName, age: userAge, id: Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={setUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
