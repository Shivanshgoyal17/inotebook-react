import { useState } from "react"
import noteContext from "./noteContext"

const NoteState = (props) =>{
    const s1 = {
        "name": "Shivansh",
        "class": "5b"
    }
    const [state, setState] = useState(s1)
    const update = () =>{
        setTimeout(()=>{
            setState({
                "name": "Stark",
                "class": "10b"
            })
        }, 1000)
    }
    
    return(
        <noteContext.Provider value={{state: state, update: update}}>
            {props.children}
        </noteContext.Provider>

    )
}

export default NoteState