import React from 'react';

export default (props) => {

  if (props.symbols !== 0 && props.sec !== 0) {
    console.log(props.sec);
    const wpm = (props.symbols/5) / (props.sec/60);
    if(props.sec >=60){
      return (
        <div>{Math.round(wpm)} wpm</div>
      )
    }else if(!props.finishState){
      return (
        <div className="text-right">00:{props.sec} </div>
      )
    }
  }
  
  return null;
}