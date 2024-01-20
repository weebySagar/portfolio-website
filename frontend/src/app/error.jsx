"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h2>Something went wrong</h2>
      <p className="text-danger">{error.message}</p>
      <button
        className="button-primary"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <span>

        Try again
        </span>
      </button>
    </div>
  );
}
