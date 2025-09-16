import { useState,useEffect } from "react"

const Prac3 = () => {

    const [current_time,set_current_time] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            set_current_time(new Date())
        },1000)

        return () => {
            clearInterval(timer)
        }

    },[])

    
    return(
        <>
        <h1>Welcome To Charusat</h1>
        Current Date : {current_time.toLocaleDateString('en-in')}
        <br />
        Current Time : {current_time.toLocaleTimeString('en-in')}
        </>
    )
}

export default  Prac3