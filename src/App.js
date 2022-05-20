import React from "react";
import { useState } from "react";
import Header from "./components/Header.jsx";
import StartPage from "./components/StartPage.jsx";
import EmptyPage from "./components/EmptyPage.jsx";
import UserPage from "./components/UserPage.jsx";
import Loader from "./components/Loader.jsx";


const App = () =>{
    const [startPage, setStartPage] = useState(true);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState({});
  
   const getUserData = async () => {
      setLoading(true)

      let URL = `https://api.github.com/users/${userName}`;
      const response = await fetch(URL)
      const data = await response.json()
    
      setUserData(data)
      setStartPage(false)
      setLoading(false)
    }
  
    return (
      <div className="app">
        <Header 
          setUserName = {setUserName}
          getUserData = {getUserData}
        />
        {startPage ? <StartPage /> :
          userData.login ? <UserPage 
          userData = {userData}/> : 
          <EmptyPage loading = {loading} setLoading = {setLoading}/>
        }
        {loading ? <Loader /> : ''}
      </div>
    );
}
export default App;
