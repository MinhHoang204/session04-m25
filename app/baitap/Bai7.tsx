import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bai7_UserList from './Bai7_UserList'
import Bai7_UserDetail from './Bai7_UserDetail'
import Bai7_UserPosts from './Bai7_UserPosts'

export default function Bai7() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Bai7_UserList />} />
        <Route path="/users/:id" element={<Bai7_UserDetail />}>
          <Route path="posts" element={<Bai7_UserPosts />} />
        </Route>
      </Routes>
    </Router>
  )
}
