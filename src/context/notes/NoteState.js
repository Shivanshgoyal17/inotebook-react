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
        },
        {
          "_id": "67d151cc4ea0fd2dfcbb9bf4",
          "user": "67ce0ff43af267b147d26200",
          "title": "My Title2",
          "description": "My description",
          "tag": "personal",
          "date": "2025-03-12T09:20:12.479Z",
          "__v": 0
        },
        {
          "_id": "67d151cc4ea0fd2dfcbb9bf5",
          "user": "67ce0ff43af267b147d26200",
          "title": "My Title3",
          "description": "My description",
          "tag": "personal",
          "date": "2025-03-12T09:20:12.479Z",
          "__v": 0
        },
        {
          "_id": "67d151cc4ea0fd2dfcbb9bf6",
          "user": "67ce0ff43af267b147d26200",
          "title": "My Title4",
          "description": "My description",
          "tag": "personal",
          "date": "2025-03-12T09:20:12.479Z",
          "__v": 0
        },
        {
          "_id": "67d151cc4ea0fd2dfcbb9bf7",
          "user": "67ce0ff43af267b147d26200",
          "title": "My Title5",
          "description": "My description",
          "tag": "personal",
          "date": "2025-03-12T09:20:12.479Z",
          "__v": 0
        },
        {
          "_id": "67d151cc4ea0fd2dfcbb9bf8",
          "user": "67ce0ff43af267b147d26200",
          "title": "My Title6",
          "description": "My description",
          "tag": "personal",
          "date": "2025-03-12T09:20:12.479Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

      // Add a note
      const addNote = (title, description, tag) =>{
        // TODO: API call
        console.log("Adding a new note")
        const note = {
          "_id": "67d151cc4ea0fd2dfcbb9bf3",
          "user": "67ce0ff43af267b147d26200",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2025-03-12T09:20:12.479Z",
          "__v": 0
        }
        setNotes(notes.concat(note))
      }

      // Delete a note
      const deleteNote = () =>{

      }

      // Edit a note
      const editNote = () =>{

      }

      return(
          <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
              {props.children}
          </noteContext.Provider>

    )
}

export default NoteState