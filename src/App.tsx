import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface People {
  name: string;
  uri: string;
  age: number;
  note: string;
}

function App() {
  const [people, setPeople] = useState<People[]>([
    {
      name: "Lebron",
      age: 23,
      uri: "",
      note: "This is a note",
    },
  ]);

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-xl font-bold pl-16">People Invited to My Party</h1>
        <br></br>
        <List people={people}></List>
        <br></br>
        <AddToList people={people} setPeople={setPeople}></AddToList>
      </div>
    </div>
  );
}

export default App;
