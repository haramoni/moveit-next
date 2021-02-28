import "../styles/global.css";
import { ChallengeContext } from "../contexts/ChallengeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeContext>
      <Component {...pageProps} />
    </ChallengeContext>
  );
}

export default MyApp;
