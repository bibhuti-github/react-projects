import React,{ useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Profile(props) {
	const [userImg, setUserImg]= useState('');
	const [userProfileName, setUserProfileName]= useState('');
	const [username, setUsername]= useState('');
	const [userComp, setUserComp]= useState('');
	const [userBio, setUserBio]= useState('');
	const [userLocation, setUserLocation]= useState('');
	const [compBlog, setCompBlog]= useState('');
	const [twitterUsername, setTwitterUsername]= useState('');
	const [popularRepos, setPopularRepos]= useState([]);
	// const [username, setUsername]= useState('');

	useEffect(() => {
		fetch(`https://api.github.com/users/${props.location.state}`)
		.then(response => response.json())
		.then((jsonData) => {
			//console.log(jsonData);
			setUserImg(jsonData.avatar_url);
			setUserProfileName(jsonData.name);
			setUsername(jsonData.login);
			setUserComp(jsonData.company);
			setUserLocation(jsonData.location);
			setCompBlog(jsonData.blog);
			setTwitterUsername(jsonData.twitter_username);
			setUserBio(jsonData.bio);
			
		})
		.catch((error) => {
			console.error(error);
		})

		fetch(`https://api.github.com/users/${props.location.state}/repos?per_page=6&order=asc&sort=id`)
		.then(response => response.json())
		.then((jsonData) =>{
			const loadedRepos= [];
			for(const key in jsonData){
				loadedRepos.push({
					id: key, 
					name: jsonData[key].name, 
					description: jsonData[key].description
				});
			}
			setPopularRepos( loadedRepos);	
		})
	}, [props.location.state]);

	
    return (
        <div>
			<header className="page-header">
				<nav>
					<a href="/">Home</a>
				</nav>
			</header>

			<div className="row">
				<div className="side">
					<div >
						<img className="user-img"  alt="user-img" src={userImg}/></div>
					<h2 className="profile-name">{userProfileName}</h2>
					<p className="profile-username">{username}</p>
					<div className="user-bio">
						<div className="mb-3">
							<p>{userBio}</p>
						</div>
						<ul className="">
							<li className="pt-1" show_title="false">
									<span className=""><div>{userComp}</div></span>
							</li>
							<li className="pt-1" show_title="false">
									<span className=""><div>{userLocation}</div></span>
							</li>
							<li className="pt-1" show_title="false">
									<span className=""><div>{compBlog}</div></span>
							</li>
							<li className="pt-1" show_title="false">
									<span className=""><div>@{twitterUsername}</div></span>
							</li>
						</ul>
					</div>
				</div>
				<div className="main">
					<h2>Popular repositories</h2>
					<div className="popular-repos">
						{popularRepos.map(repos =>(
							<div key={repos.id}>
								<Link to={{pathname: `repo`, state: `${username}/${repos.name}`, params: userImg}}><p className="repo-name">{repos.name}</p></Link>
								<p className="repo-desc">{repos.description}</p>
							</div>
						))}
					</div>
					
				</div>
			</div>

			<div className="footer">
				<h2>Footer</h2>
			</div>
        </div>
    );

}

export default Profile;
