import React from 'react';
import PersonContext from '../contexts/PersonContext';

const Example2 = (props) => {
  const persons = React.useContext(PersonContext);
  return (
    <ul>
      {persons.map((person, key) => (
        <li key={key}>{person.name}</li>
      ))}
    </ul>
  );
};

export default Example2;
