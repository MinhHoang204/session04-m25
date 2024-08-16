import React from 'react'
import Link from 'next/link';
export default function Bai8_Projects() {
    const projects = [
        { id: 1, name: 'Project A' },
        { id: 2, name: 'Project B' },
    ];
  return (
    <div>
        <h1>Projects</h1>
        <ul>
            {projects.map(project => (
                <li key={project.id}>
                    <Link href={`/projects/${project.id}`}>{project.name}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
