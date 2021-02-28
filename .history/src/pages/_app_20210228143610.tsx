import "../styles/global.css";
import { ChallengesContext } from "../contexts/ChallengeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider>
      <Component {...pageProps} />
    </ChallengesContext.ChallengesContext.Provider>
  );
}

export default MyApp;
