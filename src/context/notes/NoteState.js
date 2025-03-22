import { useState } from "react"
import noteContext from "./noteContext"

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "67d151cc4ea0fd2dfcbb9bf3",
          "user": "67ce0ff43af267b147d26200",
          "title": "My Title",
          "description": "My description",
          "tag": "personal",
          "date": "2025-03-12T09:20:12.479Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
        
    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>

    )
}

export default NoteState