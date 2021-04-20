import { connect } from 'react-redux';


const counter=(props)=> {
    console.log(props);
    return (
        <>
            <header className="App-header">
                COUNTs: {props.ctr}
            </header>
            <div className="row">
                <div className="col-3">
                    <span className="border box-1"  onClick={props.onAddCounter}>ADD 10</span>
                </div>
                <div className="col-3">
                    <span className="border box-2" onClick={props.onIncrementCounter}>INCREMENT</span>
                </div>
                <div className="col-3">
                    <span className="border box-3"  onClick={props.onDecrementCounter}>DECREMENT</span>
                </div>
                <div className="col-3">
                    <span className="border box-4"  onClick={props.onSubtractCounter}>SUBTRACT 5</span>
                </div>
            </div>
        </>
        

    );

}
const mapStateToProps= (state) => {
    return{
        ctr:state.counter
    };
}

const mapDispatchToProps= (dispatch) =>{
    return{
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 10 }),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', val: 5})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(counter);