import React,{ useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Repo(props) {
	const userState= props.location.state.split('/');
	//console.log(props);
	const [repoProjects, setRepoProjects]= useState([]);
	// const [username, setUsername]= useState('');

	useEffect(() => {

		fetch(`https://api.github.com/repos/${userState[0]}/${userState[1]}/contents/`)
		.then(response => response.json())
		.then((jsonData) =>{
			const loadedRepoProjects= [];
			for(const key in jsonData){
				loadedRepoProjects.push({
					id: key, 
					name: jsonData[key].name
				});
			}
			//console.log(jsonData);
			setRepoProjects( loadedRepoProjects);
				
		})
	}, [props.location.state]);
	
    return (
        <div>
			<header className="page-header">
				<nav>
					<a href="/">Home</a>
				</nav>
			</header>

			<div className="repo">
				<div className="row ">
					<div className="col-2">
						{/* <a className="owner-name" href="/profile">{userState[0]}</a>/<a href="/repo" class="repo-name">{userState[1]}</a> */}
						<Link className="owner-name" to={{pathname: `profile`,state: userState[0] }}>{userState[0]}</Link>/<Link className="repo-name" to={{pathname: `repo`,state: `${userState[0]}/${userState[1]}`}}>{userState[1]}</Link>
					</div>
				</div>
				<div className="col-12">
					<div className="row d-flex">
						<div className="col-1 mt-5 ml-5"><select name="branch"><option value="">master</option></select></div>
						<div className="col-1 mt-5 ml-5 mr-5 pt-5 pr-5 pl-5"><span className="count-branch">branch</span></div>
						<div className="col-8 mt-5 ml-5 mr-5 pt-5 pr-5 pl-5"><span className="count-tags">tags</span></div>
					</div>
					<div className="repo-projects">
						<ul>
							{repoProjects.map(project =>(
								// <div key={repos.id}>
								// 	<Link to={{pathname: `repo`,state: repos.name }}><p className="repo-name">{repos.name}</p></Link>
								// 	<p className="repo-desc">{repos.description}</p>
								// </div>
								<li key={project.id}>
									<span>{project.name}</span>
									<span>{project.path}</span>
								</li>
							))}
						</ul>
						
					</div>
					
				</div>
			</div>

			<div className="footer">
				<h2>Footer</h2>
			</div>
        </div>
    );

}

export default Repo;
