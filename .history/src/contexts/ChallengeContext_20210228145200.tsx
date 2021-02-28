import { createContext, useState, ReactNode } from "react";

export const ChallengesContext = createContext({});

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void/
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("NewChallenge");
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        startNewChallenge,
        currentExperience,
        challengesCompleted,
        levelUp,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
