import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
// import dummyNotes from "../dummy_notes";

import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilterNotes] = useState(notes);

  const handleShowSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    handleSearch(newText);
  };

  const handleSearch = (newText) => {
    setFilterNotes(
      notes.filter((note) => {
        const matchText = newText.toLowerCase();
        if (
          note.title.toLowerCase().match(matchText) ||
          note.details.toLowerCase().match(matchText)
        ) {
          return note;
        }
      })
    );
  };

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            onChange={handleTextChange}
            autoFocus
            placeholder="keyword"
          />
        )}
        <button className="btn" onClick={handleShowSearch}>
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
