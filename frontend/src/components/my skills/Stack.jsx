"use client";
import React, { Children, useState } from "react";
import {motion} from 'framer-motion'

import Card from "./Card";
import Link from "next/link";

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
      {
      stack.length > 0 ? 
      stack.map((item, index) => {
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
      })
    :
    <motion.div className="skills-message" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:5}}>
      <div className="title-wrap">
      <h3>"why settle for ordinary when you can code <span>extraordinary?</span>"</h3>

      </div>
      <div className="button-wrap">
        <Link href='/projects' className="button-primary"><span>Wanna see my projects?</span></Link>
      </div>
    </motion.div>
    }
    </div>
  );
};

export default Stack;
