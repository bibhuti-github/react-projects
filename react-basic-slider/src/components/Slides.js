import React,{ useState} from 'react';

function Slides({slides}) {
	const [count, changeCount]= useState(0);
	const [prev, prevState]= useState(true);
	const [next, nextState]= useState(false);
	//prevState(disabled);
	console.log(slides[0]);
	
	const getPrev=()=>{
		changeCount(count - 1);
		if(count === 1){
			prevState(true);
			nextState(false);
		}else{
			nextState(false);
		}
	}; 
	const getNext=()=>{
		changeCount(count + 1);
		prevState(false);
		if(count === 3){
			nextState(true);
		}
	};
	const restart= ()=>{
		changeCount(0);
		prevState(true);
		nextState(false);
	};
	
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart} >Restart</button>
                <button data-testid="button-prev" className="small" disabled={prev} onClick={getPrev} >Prev</button>
                <button data-testid="button-next" className="small" disabled={next} onClick={getNext} >Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[count].title}</h1>
                <p data-testid="text">{slides[count].text}</p>
            </div>
        </div>
    );

}

export default Slides;
