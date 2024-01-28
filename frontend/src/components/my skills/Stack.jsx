"use client";
import React, { Children, useState } from "react";

import Card from "./Card";

const Stack = ({ onVote, children, ...props }) => {
  const [stack, setStack] = useState(Children.toArray(children));

  // return new array with last item removed
  const pop = (array) => {
    return array.filter((_, index) => {
      return index < array.length - 1;
    });
  };

  const handleVote = (item, vote) => {
    // update the stack
    let newStack = pop(stack);
    setStack(newStack);

    // run function from onVote prop, passing the current item and value of vote
    onVote(item, vote);
  };
  return (
    <div
      className="stack"
      {...props}
      style={{
       
      }}
    >
      {stack.map((item, index) => {
        let isTop = index === stack.length - 1;
        return (
          <Card
            drag={isTop}
            key={item.id || index}
            onVote={(result) => handleVote(item, result)}
          >
            {item}
          </Card>
        );
      })}
    </div>
  );
};

export default Stack;
