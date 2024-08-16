import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
export default function Bai7_UserDetail() {
    const { id } = useParams();
  return (
    <div>
       <h1>User Detail for User ID: {id}</h1>
       <Link to="posts">View Posts</Link>
       <Outlet /> 
    </div>
  )
}
