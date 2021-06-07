import React,{ useState} from 'react';
import { Link } from 'react-router-dom';

function Home() {
	const [username, setUsername]= useState('');
	
    return (
        <div>
			<header className="page-header">
				<h3>GITHUB CLONE</h3>
			</header>
            <div id="slide" className="card text-center">
				<label htmlFor="username"> Enter your username: 
					<input type="text" name="username" onChange={event => setUsername(event.target.value)}/>
				</label>
				{/* <a render={(props) => <Profile props={username} />}><button data-testid="button-next" className="small" onClick={getNext} >Next</button></a> */}
				<Link to={{pathname: `profile`,state: username }}><button data-testid="button-next" className="small">Next</button></Link>
            </div>
        </div>
    );

}

export default Home;
