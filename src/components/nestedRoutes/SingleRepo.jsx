import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../styles/repos.css'

const SingleRepo = () => {
    const {repoId} = useParams()
    const navigate = useNavigate()

    // console.log(repoId)

    const [repoArray, setRepoArray] = useState([])
    const [repoIndex, setRepoIndex] = useState(null)
    // const [singleRepo, setSingleRepo] = useState({})
    let singleRepo = {}

    useEffect(() => {
        fetch('https://api.github.com/users/danieltolani/repos')
          .then((res) => res.json())
          .then((data) => setRepoArray(data))
      }, []);

      const tester = repoArray.map( (arrayScanner, index) => {
            if(repoId === (arrayScanner?.name)) {
                const {name} = arrayScanner;
                if(name){
                    singleRepo = arrayScanner
                    return
                }
                return;
            }
            return
      })

    //   singleRepo !== 0 && console.log(singleRepo)
    console.log(singleRepo)
    // const [description, setDescription] = useState('')

    // useEffect(() => {
    //     if(singleRepo.description !== null){
    //         setDescription(singleRepo.description)
    //         return
    //     }else{
    //         setDescription('This project has no description')
    //         return
    //     }
    // }, [description]);
    const description = singleRepo.description;
    const language = singleRepo.language;
      
    return(
        <section className="single-repo">
            <div className="repo-card-wrapper">
            <div className="repo-card">
                <div className="repo-intro">
                    <div className="repo-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="60" fill="none"><g clipPath="url(#a)"><path fill="#fff" d="M38.26 34.075a5.855 5.855 0 0 0 0-8.378c-2.352-2.313-6.166-2.313-8.518 0a5.855 5.855 0 0 0 0 8.378c2.352 2.314 6.166 2.314 8.518 0Z"/><path stroke="#fff" strokeMiterlimit="10" strokeWidth="3.178" d="M34 17.843c8.086 0 15.597 1.141 21.26 3.058 6.823 2.31 11.018 5.812 11.018 8.983 0 3.172-4.446 7.026-11.773 9.413-5.539 1.805-12.83 2.748-20.504 2.748-7.675 0-15.32-.884-20.923-2.768-7.087-2.382-11.357-6.15-11.357-9.393 0-3.242 4.007-6.62 10.734-8.927 5.685-1.948 13.382-3.114 21.546-3.114Z"/><path stroke="#fff" strokeMiterlimit="10" strokeWidth="3.178" d="M23.343 23.9c4.038-6.89 8.797-12.72 13.315-16.586 5.444-4.659 10.625-6.483 13.417-4.9 2.91 1.65 3.967 7.299 2.408 14.736-1.178 5.622-3.988 12.304-7.824 18.844-3.93 6.705-8.433 12.612-12.89 16.445-5.638 4.849-11.091 6.603-13.946 4.984-2.77-1.572-3.829-6.72-2.502-13.606 1.123-5.822 3.941-12.962 8.022-19.917Z"/><path stroke="#fff" strokeMiterlimit="10" strokeWidth="3.178" d="M23.352 36.008c-4.05-6.883-6.808-13.849-7.959-19.63-1.385-6.965-.406-12.292 2.385-13.88 2.908-1.656 8.409.265 14.18 5.306 4.366 3.811 8.846 9.543 12.691 16.078 3.943 6.7 6.899 13.485 8.047 19.195 1.455 7.228.277 12.75-2.575 14.373-2.769 1.576-7.832-.092-13.234-4.663-4.562-3.862-9.444-9.83-13.535-16.779Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.281.438h67.438v59.008H.281z"/></clipPath></defs></svg>
                    
                    </div>     
                    <div className="repo-details">
                        <h1>{repoId}</h1>
                        <p> {singleRepo.description ? description : "This project has no description" } </p>
                    </div>
                </div>
                
                <div className="repo-data-s">
                    <div className="repo-data">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.75 12 2.83 2.83 5.67-5.66"/></svg>
                        <h4> {singleRepo.clone_url} </h4>
                    </div>
                    <div className="repo-data">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.75 12 2.83 2.83 5.67-5.66"/></svg>
                        <h4> ID - {singleRepo.id} </h4>
                    </div>
                    <div className="repo-data">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.75 12 2.83 2.83 5.67-5.66"/></svg>
                        <h4> {singleRepo.language ? language : "Written in no language" } </h4>
                    </div>
                    <div className="repo-data">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.75 12 2.83 2.83 5.67-5.66"/></svg>
                        <h4> {singleRepo.size}MB in size </h4>
                    </div>
                    <div className="repo-data">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.75 12 2.83 2.83 5.67-5.66"/></svg>
                        <h4> START - {singleRepo.created_at} </h4>
                    </div>
                    <div className="repo-data">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.75 12 2.83 2.83 5.67-5.66"/></svg>
                        <h4> STOP - {singleRepo.updated_at} </h4>
                    </div>
                </div>

            </div>
            <button onClick={()=> navigate('/github-repos')} className='navigate-button'>
            <svg className="back-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none"><path stroke="#D9E5D4" strokeWidth="3" d="M23.348 9.167 3 9.176m0 0 7.373-7.546M3 9.176l7.089 6.926"/></svg>
                Go Back</button>
            </div>
            
        </section>
    )
}

export default SingleRepo;