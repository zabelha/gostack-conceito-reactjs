import React, { useState } from 'react'

import './App.css'
import backgroundImg from './assets/code.jpg'

import Header from './components/Header'

function App() {
    const [projects, serProjects] = useState(['Desenvolvimento app', 'Desenvolvimento web'])
    
    function handleAddProject() {
        serProjects([...projects, `novo projeto ${Date.now()}`])

        console.log(projects)
    }
    return (
        <>
            <Header title="Projects"/>

            <img src={backgroundImg}/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type='button' onClick={handleAddProject} >Adicionar Projeto </button>
        </>
    )
}

export default App;