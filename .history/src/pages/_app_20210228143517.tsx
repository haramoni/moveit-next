import "../styles/global.css";
import { ChallengesContext } from "../contexts/ChallengeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext>
      <Component {...pageProps} />
    </ChallengesContext>
  );
}

export default MyApp;
