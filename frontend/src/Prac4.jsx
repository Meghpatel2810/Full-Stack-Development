import { useState,useEffect } from "react";

const Prac4 = () => {

    const [count,setcount] = useState(0);
    const [firstname,changefirstname] = useState("")
    const [lastname,changelastname] = useState("")

    const inc = () => {setcount(count+1)}
    const dec = () => {setcount(count-1)}
    const reset = () => {setcount(0)}
    const inc5 = () => {setcount(count+5)}

    const first = (event) => {
        changefirstname(event.target.value)
    }

    const last = (event) => {
        changelastname(event.target.value)
    }

    return(
        <>
            <h1>Count : {count} </h1>
            <button onClick={inc} >Increment</button>
            <button onClick={dec} >Decrement</button>
            <button onClick={reset} >Reset</button>
            <button onClick={inc5} >Increment 5</button>

            <h1>Welcome to Charusat</h1>

            First Name : <input type="text" value={firstname} onChange={first} /> <br />
            Last Name : <input type="text" value={lastname} onChange={last} />
            <br/>
            First Name : {firstname} <br />
            Last Name : {lastname}
        </>
    )
}

export default Prac4;