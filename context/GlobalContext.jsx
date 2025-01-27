import axios from "axios";
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const baseApiUrl = 'http://localhost:3000'

  const fetchPosts = () => {
    axios.get(`${baseApiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
        console.log(res.data);
      })
  }


  return (
    <GlobalContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGLobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGLobalContext }