import Rect from "react";

interface People {
  name: string;
  uri: string;
  age: number;
  note: string;
}

interface ListProps {
  people: People[];
}

const List: React.FC<ListProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li>
        <div className="flex h-28 w-96 border-2 items-center justify-evenly">
          <div>
            <h2>{person.name}</h2>
          </div>

          <p>{person.age} years old</p>

          <p>{person.note}</p>
        </div>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

export default List;
