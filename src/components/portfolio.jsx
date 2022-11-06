import React from "react"; 
import { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import '../styles/porfolio.css'


const GitHubRepos = () => {
    const [repoArray, setRepoArray] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/danieltolani/repos')
          .then((res) => res.json())
          .then((data) => setRepoArray(data))
      }, []);

      const repoPrev = repoArray.map((repoScan, index) => {
        // destructure the 'Repo Name' from the arrays.
        const {name} = repoScan
        return(
            <div className="repo-card" key= {name}>
                <div className="repo-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="140" fill="none"><g clipPath="url(#a)"><path fill="#fff" d="M90.106 79.806a13.892 13.892 0 0 0 0-19.877c-5.58-5.488-14.627-5.488-20.208 0a13.892 13.892 0 0 0 0 19.877c5.58 5.489 14.628 5.489 20.208 0Z"/><path stroke="#fff" strokeMiterlimit="10" strokeWidth="6.793" d="M80.002 41.294c19.182 0 37.003 2.707 50.438 7.255 16.188 5.48 26.142 13.79 26.142 21.314 0 7.524-10.549 16.67-27.932 22.332-13.142 4.282-30.439 6.52-48.648 6.52-18.209 0-36.347-2.099-49.64-6.567C13.547 86.496 3.417 77.555 3.417 69.863s9.506-15.708 25.467-21.18c13.487-4.621 31.748-7.39 51.118-7.39Z"/><path stroke="#fff" strokeMiterlimit="10" strokeWidth="6.793" d="M54.715 55.664c9.581-16.344 20.872-30.176 31.591-39.35C99.222 5.26 111.513.932 118.14 4.69c6.903 3.915 9.411 17.315 5.713 34.96-2.795 13.34-9.463 29.192-18.563 44.71-9.326 15.908-20.008 29.921-30.58 39.015C61.33 134.879 48.392 139.041 41.62 135.2c-6.573-3.73-9.085-15.945-5.936-32.281 2.663-13.813 9.35-30.752 19.03-47.255Z"/><path stroke="#fff" strokeMiterlimit="10" strokeWidth="6.793" d="M54.738 84.392c-9.61-16.331-16.154-32.857-18.884-46.573-3.286-16.525-.963-29.164 5.657-32.93 6.9-3.93 19.952.627 33.646 12.587 10.356 9.043 20.986 22.642 30.109 38.147 9.355 15.894 16.367 31.992 19.092 45.541 3.452 17.148.656 30.25-6.111 34.101-6.568 3.739-18.582-.218-31.398-11.064-10.823-9.164-22.407-23.321-32.11-39.81Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h160v140H0z"/></clipPath></defs></svg>
                </div>

                <div className="repo-details">
                    <h1 className="repo-name"> {name} </h1>
                    <NavLink to={{
                pathname: `${name}`
               }} >expand this repo</NavLink>
                </div>
            </div>
        )
      })
    return(
        <section className="github-repo">
            <h3 className="card-title"> REPO 01 </h3>
            {repoPrev}
            <Outlet />
        </section>
    )
}

export default GitHubRepos;