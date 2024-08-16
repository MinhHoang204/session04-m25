import React from 'react'
import { useRouter } from 'next/router';
export default function Bai8_ProjectsId() {
    const router = useRouter();
    const { id } = router.query;

    const tasks = [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
    ];
  return (
    <div>
        <h1>Tasks for Project ID: {id}</h1>
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    </div>
  )
}
