import React, { useState } from "react";
import { People as Persons } from "./../App";

interface Props {
  people: Persons[];
  setPeople: React.Dispatch<React.SetStateAction<Persons[]>>;
}

const AddToList: React.FC<Props> = ({ people, setPeople }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    uri: "",
    note: "",
  });

  const handleChagne = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (!formInput.name || !formInput.age) {
      return;
    }

    setPeople([
      ...people,
      {
        name: formInput.name,
        age: parseInt(formInput.age),
        note: formInput.note,
        uri: formInput.uri,
      },
    ]);

    setFormInput({
      name: "",
      age: "",
      uri: "",
      note: "",
    });
  };

  return (
    <div className="flex flex-col">
      <input
        value={formInput.name}
        name="name"
        type="text"
        placeholder="Name"
        className="border border-black"
        onChange={handleChagne}
      ></input>
      <br></br>
      <input
        value={formInput.age}
        name="age"
        className="border border-black"
        type="number"
        placeholder="Age"
        onChange={handleChagne}
      ></input>
      <br></br>
      <textarea
        value={formInput.note}
        name="note"
        className="border border-black"
        onChange={handleChagne}
        placeholder="Note"
      ></textarea>
      <br></br>
      <button className="bg-blue-400" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
