import React from 'react';
import { Card } from './Card';

export const Robots = props => {
  return (
      <ul>
          {props.robots.map((robot, i) => <Card key={i} name={robot.name} email={robot.name} img={robot.username}/>)}
      </ul>
  );
};
