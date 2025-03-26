import { useState } from "react";
import noteContext from "./noteContext";
import { data } from "react-router-dom";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZTBmZjQzYWYyNjdiMTQ3ZDI2MjAwIn0sImlhdCI6MTc0MTU1Nzc5M30.NN-ngnY5AUy4QRBnYOaQKb69JHQfGRLnttL-UEAHPvg",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Adding a new note");
    const note = {
      _id: "67d151cc4ea0fd2dfcbb9bf3",
      user: "67ce0ff43af267b147d26200",
      title: title,
      description: description,
      tag: tag,
      date: "2025-03-12T09:20:12.479Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Get all notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZTBmZjQzYWYyNjdiMTQ3ZDI2MjAwIn0sImlhdCI6MTc0MTU1Nzc5M30.NN-ngnY5AUy4QRBnYOaQKb69JHQfGRLnttL-UEAHPvg",
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZTBmZjQzYWYyNjdiMTQ3ZDI2MjAwIn0sImlhdCI6MTc0MTU1Nzc5M30.NN-ngnY5AUy4QRBnYOaQKb69JHQfGRLnttL-UEAHPvg",
      }
    });
    const json = response.json();
    console.log(json)

    console.log("Deleting the note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjZTBmZjQzYWYyNjdiMTQ3ZDI2MjAwIn0sImlhdCI6MTc0MTU1Nzc5M30.NN-ngnY5AUy4QRBnYOaQKb69JHQfGRLnttL-UEAHPvg",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
