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
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/connect-wallet-desktop":
        title = "";
        metaDescription = "";
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
      <Route path="/" element={<RankingsDesktop />} />

      <Route path="/marketplace-desktop" element={<MarketplaceDesktop />} />

      <Route
        path="/connect-wallet-desktop"
        element={<ConnectWalletDesktop />}
      />
    </Routes>
  );
}
export default App;
