import { useEffect, useRef } from "react";

//custom hook for handling multiple keypress events
export const useKey = (cb: (e: KeyboardEvent) => void, guesses: string) => {
  const callBackRef = useRef(cb);
  useEffect(() => {
    callBackRef.current = cb;
  });
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      const letter = e.key.toLowerCase();
      if (
        guesses.includes(letter) ||
        letter === "Enter" ||
        !/[a-z]/.test(letter)
      )
        return;
      callBackRef.current(e);
    };
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [guesses]);
};
