import { useEffect, useState } from "react";

const Callgit = () => {
    const [state,setState] = useState('')
    const [data,setData] = useState([])
    const [isValid, setIsValid]  = useState(false)
    useEffect(() => {
        if(state.length !== 0){setIsValid(true)}
        else {setIsValid(false)}
    }, [state])
    const clickHandler = (e) => {
        fetch(`https://api.github.com/users/${state}/repos`).then(res => res.json()).then(data => setData(data))

    };
    const changeHandler = (e) => {
       // e.preventDefault()
        setState(e.target.value)
        
    }
    console.log(state)
    return(<div>
        hellow! Tish is for practices
        <div>
            <label>enter userId: </label>
            <input onChange={changeHandler}></input>
            <div>
                <button disabled = {!isValid} onClick={clickHandler}>submit</button>
            </div>
        </div>
        <div>
            {data.map(i => { return(
                <div key = {i.id} style={{borderBottom : '1px solid'}}>
                    {i.name} {i.full_name}
                </div>
            )})}
        </div>
    </div>);
}
export default Callgit;