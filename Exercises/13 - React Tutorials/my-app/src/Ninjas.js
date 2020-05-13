import React from 'react';
import './App.css';

function Ninjas(props) {
  const { ninjas } = props;

  const ninjaList = ninjas.map((ninja) => {
    if (ninja.age > 20) {
      return (
        <div className="Ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="ninja-list">{ninjaList}</div>;
}

export default Ninjas;
