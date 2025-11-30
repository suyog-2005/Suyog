import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Chat from './pages/chat/Chat.jsx'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path ='/chat' element={<Chat/>}/>
        <Route path = '/profile'element={<ProfileUpdate/>}/>
      </Routes>
    </div>
  )
}

export default App
