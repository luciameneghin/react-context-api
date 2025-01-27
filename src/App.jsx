import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "../context/GlobalContext"

import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import AboutPage from "./pages/AboutPage"
import PostDetailPage from "./pages/PostDetailPage"
import FormPage from "./pages/FormPage"

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/posts' Component={PostsPage} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/post-detail/:id' Component={PostDetailPage} />
            <Route path='/add-post' Component={FormPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App

