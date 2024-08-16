import React from 'react'
import { useParams } from 'react-router-dom';
export default function Bai4() {
    const { companyName } = useParams<{ companyName: string }>();
  return (
    <div>
      <h1>Company name: <strong>{companyName}</strong></h1>
    </div>
  )
}
