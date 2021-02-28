import { createContext, useState } from "react";

export const ChallengesContext = createContext({});

export function ChallengesProvider() {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{ level, levelUp }}
    ></ChallengesContext.Provider>
  );
}
