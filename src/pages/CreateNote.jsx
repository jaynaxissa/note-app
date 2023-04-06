import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid"; // this one is a package to create a unique id
import useCreateDate from "../components/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDetails = (e) => {
    setDetails(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // helps to make the page not refresh everytime you submit a new note

    if (title && details) {
      const note = { id: uuid(), title, details, date };
      //add this note to the Notes array
      setNotes((prevNotes) => [note, ...prevNotes]);

      //redirect to home page
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Note details..."
          value={details}
          onChange={handleDetails}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
