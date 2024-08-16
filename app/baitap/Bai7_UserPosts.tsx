import React from 'react'
import { useParams } from 'react-router-dom';

export default function Bai7_UserPosts() {
    const { id } = useParams();
  return (
    <div>
      <h1>Posts for User ID: {id}</h1>
      <ul>
        <li>Post 1</li>
        <li>Post 2</li>
        <li>Post 3</li>
      </ul>
    </div>
  )
}
