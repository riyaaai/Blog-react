import React from 'react'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import BlogSection from './Components/Blog'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import BlogDetails from './Components/BlogDetails'

const App = () => {
  return (
    <Routes>

        <Route
            path="/"
            element={
                <div>
                    <Navbar/>
                    <Hero/>
                    <BlogSection/>
                    <Subscribe/>
                    <Footer/>
                </div>
            }
        />

        <Route
            path="/blog/:id"
            element={
                <div>
                    <Navbar/>
                    <BlogDetails/>
                    <Footer/>
                </div>
            }
        />

    </Routes>
)
}

export default App
