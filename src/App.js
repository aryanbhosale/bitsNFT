import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import RankingsDesktop from "./pages/RankingsDesktop";
import MarketplaceDesktop from "./pages/MarketplaceDesktop";
import ConnectWalletDesktop from "./pages/ConnectWalletDesktop";
import { useEffect } from "react";

// ID: 599883682302-8lrnl418o8k16bqs4dihi2qk7luctqr8.apps.googleusercontent.com
// secret: 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

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/ranking":
        title = "Mon🔑 || Ranking";
        metaDescription = "Get live ranking of over 50 🪙's to help you invest wisely";
        break;
      case "/marketplace":
        title = "Mon🔑 || Market";
        metaDescription = "Get over 12 trending NFTs from OpenSea";
        break;
      case "/":
        title = "Mon🔑 || Login";
        metaDescription = "Sign In to continue";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/ranking" element={<RankingsDesktop />} />

      <Route path="/marketplace" element={<MarketplaceDesktop />} />

      <Route
        path="/"
        element={<ConnectWalletDesktop />}
      />
    </Routes>
  );
}
export default App;
