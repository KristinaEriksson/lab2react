
import React, { useState, useEffect} from "react";


export const PortfolioComponent = () => {
    const [error, setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch(`http://api.github.com/users/KristinaEriksson/repos`)
        .then(res => res.json())
        .then(
            (result)=>{
                setIsLoaded(true);
                setProjects(result);
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    if(error){
        return <div>Error: {error.message}</div>
    }
    else if(!isloaded){
        return <div>Loading...</div>
    }
    else{
        return(
            <div>
                <div>
                <h1 className="portfolio">Min Portfolio</h1>
                <ul>
                    {projects.map(project => (
                    <li key={project.name}>
                    <h2>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="gitLink">{project.name}</a>
                    </h2>
                    <p>{project.language}</p>
                    <p>{project.description}</p>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        )
    }
}   

