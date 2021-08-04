import React from 'react';
import PersonContext from '../contexts/PersonContext';

const Example1 = () => {
  return (
    <PersonContext.Consumer>
      {(persons) => {
        return (
          <ul>
            {persons.map((person, key) => (
              <li key={key}>{person.name}</li>
            ))}
          </ul>
        );
      }}
    </PersonContext.Consumer>
  );
};

export default Example1;
