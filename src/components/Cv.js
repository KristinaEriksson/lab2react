import {useState, useEffect} from 'react';
import vattenfall from '../images/vattenfall.JPG';


export function CvComponent() {
    const [error, setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);
    


    useEffect(() => {
        fetch('./cv.json')
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
            <div className='main-section'>
                <figure className='side-section'>
                    <img src={vattenfall} className='img-profile' alt='Bild på mig vid ett vattenfall'/>
                </figure>
                <div className='main-content'>
                    <h1 className='profile-name'>Kristina Eriksson</h1>
                    <h6>Student</h6>
                    <h5 className='CV-title'>Profil</h5>
                    <p>Ambitiös, nyfiken och hårt arbetande student söker LIA-plats.
                        Redo att använda nyförvärvade kunskaper inom systemutveckling .NET med
                        AI-kompetens. Duktig på att kommunicera och samarbeta, målinriktad och lösningsfokuserad
                        på problem som kan uppstå.</p>
                        <br></br>
                    <h3 className='work'>Arbetslivserfarenhet</h3>
                    
                        
                    {projects.arbetslivserfarenhet.map((info, id)=>{
                        return(
                            <div className='pb-2' key={id}>
                                <h5 key={id + 1}>{info.namn}</h5>
                                <h6 key={id + 2} className='italic'>{info.datum}</h6>
                                <p key={id + 3}>{info.beskrivning}</p>
                            </div>
                        );
                    })}
                    <br></br>
                    <h3 className='education'>Utbildning</h3>
                    {projects.utbildning.map((info, id)=>{
                        return(
                            <div className='pb-2' key={id}>
                                <h5 key={id + 1}>{info.namn}</h5>
                                <h6 key={id + 2}>{info.skola}</h6>
                                <p key={id + 3} className='italic'>{info.datum}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

