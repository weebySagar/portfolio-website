"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Window = () => {
  const inputRef = useRef(null);
  const sectionRef = useRef(null);
  const windowRef = useRef(null);
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [questions, setQuestions] = useState({
    question: "To start, can you tell me your name?",
    placeholder: "Enter name:",
  });
  const [field, setFields] = useState([]);
  const mailtoLink = `mailto:${"sagarmaurya814@gmail.com"}?subject=${encodeURIComponent(
    ""
  )}&body=${encodeURIComponent(
    "Hello my name is " + field[0]?.value + "\n" + field[2]?.value
  )}`;

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setIsFocus(false);
        inputRef.current.blur();
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsFocus(true);
    if (inputRef) {
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setFields(field.concat({ question: questions.question, value: value }));

      setValue("");
    }
  };

  useEffect(() => {
    if (field.length == 1) {
      setQuestions({
        question: "Awesome!, and what's your email?",
        placeholder: "Enter email:",
      });
    } else if (field.length == 2) {
      setQuestions({
        question: "Perfect, and how can I help you?",
        placeholder: "Enter description:",
      });
    } else if (field.length == 3) {
      setQuestions("");
    }
    sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
  }, [field]);

  const handleReset = () => {
    setFields([]);
    setQuestions({
      question: "To start, can you tell me your name?",
      placeholder: "Enter name:",
    });
  };

  return (
    <div
      className="window-container mx-auto"
      onClick={handleClick}
      ref={sectionRef}
    >
      <div className="title-bar d-flex align-items-center sticky-top">
        <div className="rounded-circle button"></div>
        <div className="rounded-circle button"></div>
        <div className="rounded-circle button"></div>
        <span>sagarmaurya814@gmail.com</span>
      </div>
      <div className="window-content">
        <p>Hey there! We&#39;re excited to connect</p>
        <p className="overflow-hidden text-nowrap">
          ----------------------------------------------------------------------------------------------------------
        </p>
        {field.map((f) => (
          <React.Fragment key={f.question}>
            <p>{f.question}</p>
            <p className="answer">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2 inline-block"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>{f.value}</span>
            </p>
          </React.Fragment>
        ))}

        {questions.question && <p>{questions.question}</p>}
        {questions.placeholder && (
          <p>
            <span className="arrow">➜</span>&nbsp;
            <span className="tilde">~</span>&nbsp;
            <span className="opacity-50">{questions.placeholder} </span>
            <span>{value}</span>
            {isFocus && <span className="cursor"></span>}
          </p>
        )}

        {field.length !== 3 && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={inputRef}
              value={value}
              onChange={handleChange}
            />
          </form>
        )}

        {field.length == 3 && (
          <>
            <div className="result">
              <p>Beautiful! Here&#39;s what I got:</p>
              <p>
                <span>name:</span> {field[0].value}
              </p>
              <p>
                <span>email:</span> {field[1].value}
              </p>
              <p>
                <span>description:</span> {field[2].value}
              </p>
            </div>
            <div className="btn-wrap d-flex gap-2 mt-2">
              <button onClick={handleReset} className="reset">
                Reset
              </button>
              <Link href={mailtoLink} className="submit">
                Send!
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Window;
