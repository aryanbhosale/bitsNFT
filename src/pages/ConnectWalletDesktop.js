import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./ConnectWalletDesktop.css";

// ID: 599883682302-8lrnl418o8k16bqs4dihi2qk7luctqr8.apps.googleusercontent.com
// secret: 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

const ConnectWalletDesktop = () => {

  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID Token: ", response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(user);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "599883682302-8lrnl418o8k16bqs4dihi2qk7luctqr8.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("sign-in-div"),
      {theme: "outline", size: "large"}
    )
  }, []);  

  const navigate = useNavigate();

  const onRankingButtonClick = useCallback(() => {
    navigate("/ranking");
  }, [navigate]);

  const onMarketplaceButtonClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onMetamaskContainerClick = useCallback(() => {
    window.open(
      ""
    );
  }, []);

  const onWalletConnectButtonClick = useCallback(() => {
    window.open(
      ""
    );
  }, []);

  const onCoinbaseButtonClick = useCallback(() => {
    window.open(
      ""
    );
  }, []);

  const onDiscordLogoButtonClick = useCallback(() => {
    window.open("https://discord.gg/bYKEcRuc");
  }, []);

  const onYoutubeLogoButtonClick = useCallback(() => {
    window.open("https://www.youtube.com/@locofy_ai");
  }, []);

  const onTwitterLogoButtonClick = useCallback(() => {
    window.open(
      "https://twitter.com/locofy_ai?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    );
  }, []);

  const onInstagramLogoButtonClick = useCallback(() => {
    window.open("https://www.instagram.com/locofy_ai/");
  }, []);

  const onButtonClick = useCallback(() => {
    window.open(
      ""
    );
  }, []);

  return (
    <div className="connect-wallet-desktop">
      <div className="frame-div14">
        <div className="navigation-div2">
          <img className="nav-logo2" alt="" src="../nav--logo2@2x.png" />
          <button className="nav-nav-menu2">
            <div className="marketplace-div1">
              <img
                className="rocketlaunch-icon6"
                alt=""
                src="../rocketlaunch6.svg"
              />
              <div className="button-div10">Marketplace</div>
            </div>
            <div className="marketplace-div1">
              <img
                className="rocketlaunch-icon6"
                alt=""
                src="../rocketlaunch6.svg"
              />
              <div className="button-div10">Rankings</div>
            </div>
            <div className="connect-a-wallet4">
              <img
                className="rocketlaunch-icon6"
                alt=""
                src="../rocketlaunch6.svg"
              />
              <div className="button-div10">Connect a wallet</div>
            </div>
            <div className="sign-up-div2">
              <img className="user-icon2" alt="" src="../user2.svg" />
              <div className="button-div10">Sign Up</div>
            </div>
          </button>
        </div>
      </div>
      <div className="connect-wallet-section">
        <img
          className="image-placeholder-icon11"
          alt=""
          src="../image-placeholder11@2x.png"
        />
        {user ? (
            <div className="connect-a-wallet5">
            <div className="headline-subhead4">
              <div className="headline-subhead5">
                <h1 className="headline-h1">
                  <h1 className="connect-wallet-h1">Authenticate</h1>
                </h1>
                <div className="subhead-div1">
                  <p className="choose-a-wallet-you-want-to-co">
                    Sign In to proceed
                  </p>
                </div>
              </div>
            </div>
            <div className="wallet-options-div">
              <div className="metamask-div" onClick={onMetamaskContainerClick}>
                <img className="metamask-icon" alt="" src="../metamask.svg" />
                <div className="metamask-div1">Metamask</div>
              </div>
              {/* <button
                className="wallet-connect-button"
                onClick={onWalletConnectButtonClick}
              >
                <img
                  className="metamask-icon"
                  alt=""
                  src="../walletconnect.svg"
                />
                <div className="metamask-div2">Connect Phantom</div>
              </button> */}
            
              <div id="sign-in-div" className="metamask-div2">Google</div>
            </div>
          </div>
        ) : (
          <>
          <div className="connect-a-wallet5">
          <div className="headline-subhead4">
              <div className="headline-subhead5">
                <h1 className="headline-h1">
                  <h1 className="connect-wallet-h1">Congratulations</h1>
                </h1>
                <div className="subhead-div1">
                  <p className="choose-a-wallet-you-want-to-co">
                    You're Signed In as {user?.name}!🎉🎉🎉
                  </p>
                </div>
              </div>
            </div>
          <div className="wallet-options-div">
            <button className="wallet-connect-button" onClick={onMarketplaceButtonClick}>
              <div className="marketplace-div1">
                <img
                  className="rocketlaunch-icon6"
                  alt=""
                  src="../rocketlaunch6.svg" />
                <div className="button-div10">Marketplace</div>
              </div>
            </button>
            <button className="wallet-connect-button" onClick={onRankingButtonClick}>
                <div className="marketplace-div1">
                  <img
                    className="rocketlaunch-icon6"
                    alt=""
                    src="../rocketlaunch6.svg" />
                  <div className="button-div10">Rankings</div>
                </div>
            </button>
            <button className="wallet-connect-button" onClick={(e) => {
              setUser({})
            }}>
              <div className="marketplace-div1">
                <img
                  className="rocketlaunch-icon6"
                  alt=""
                  src="../rocketlaunch6.svg" />
                <div className="button-div10">Sign Out</div>
              </div>
            </button>
          </div>
          </div>
            </>
        )}
      </div>
      <div className="footer-div2">
        <div className="footer-info-div2">
          <div className="nft-marketplace-info2">
            <img className="logo-icon2" alt="" src="../logo2.svg" />
            <div className="additional-info-div34">
              <p className="nft-marketplace-ui-created-wit2">
                <p className="nft-dashboard-p2">NFT Dashboard</p>
                <p className="all-your-needs2">All your needs in one place</p>
              </p>
              <div className="community-info-div2">
                <p className="join-our-community2">Join our community</p>
                <div className="icons-div2">
                  <button
                    className="discordlogo-button2"
                    onClick={onDiscordLogoButtonClick}
                  >
                    <img
                      className="vector-icon14"
                      alt=""
                      src="../vector12.svg"
                    />
                    <img
                      className="vector-icon15"
                      alt=""
                      src="../vector12.svg"
                    />
                    <img
                      className="vector-stroke-icon24"
                      alt=""
                      src="../vector-stroke24.svg"
                    />
                    <img
                      className="vector-stroke-icon25"
                      alt=""
                      src="../vector-stroke25.svg"
                    />
                    <img
                      className="vector-stroke-icon26"
                      alt=""
                      src="../vector-stroke26.svg"
                    />
                    <img
                      className="vector-stroke-icon27"
                      alt=""
                      src="../vector-stroke27.svg"
                    />
                    <img
                      className="vector-icon14"
                      alt=""
                      src="../vector12.svg"
                    />
                    <img
                      className="vector-icon15"
                      alt=""
                      src="../vector12.svg"
                    />
                    <img
                      className="vector-stroke-icon24"
                      alt=""
                      src="../vector-stroke24.svg"
                    />
                    <img
                      className="vector-stroke-icon25"
                      alt=""
                      src="../vector-stroke25.svg"
                    />
                    <img
                      className="vector-stroke-icon26"
                      alt=""
                      src="../vector-stroke26.svg"
                    />
                    <img
                      className="vector-stroke-icon27"
                      alt=""
                      src="../vector-stroke27.svg"
                    />
                  </button>
                  <button
                    className="discordlogo-button2"
                    onClick={onYoutubeLogoButtonClick}
                  >
                    <img
                      className="vector-stroke-icon32"
                      alt=""
                      src="../vector-stroke32.svg"
                    />
                    <img
                      className="vector-stroke-icon33"
                      alt=""
                      src="../vector-stroke33.svg"
                    />
                  </button>
                  <button
                    className="discordlogo-button2"
                    onClick={onTwitterLogoButtonClick}
                  >
                    <img className="vector-icon18" alt="" />
                    <img
                      className="vector-icon19"
                      alt=""
                      src="../vector16.svg"
                    />
                  </button>
                  <button
                    className="discordlogo-button2"
                    onClick={onInstagramLogoButtonClick}
                  >
                    <img
                      className="vector-stroke-icon34"
                      alt=""
                      src="../vector-stroke34.svg"
                    />
                    <img
                      className="vector-stroke-icon35"
                      alt=""
                      src="../vector-stroke35.svg"
                    />
                    <img
                      className="vector-icon20"
                      alt=""
                      src="../vector17.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a className="explore-a">
            <b className="explore-b">Explore</b>
            <div className="pages-div2">
              <div className="marketplace-div2">Marketplace</div>
              <div className="marketplace-div2">Rankings</div>
              <a className="connect-a-wallet6" />
            </div>
          </a>
          <div className="subscribe-div2">
            <b className="explore-b">Join our weekly digest</b>
            <div className="pages-div2">
              <div className="get-exclusive-promotions-upd2">{`Get exclusive promotions & updates straight to your inbox.`}</div>
              <div className="subscribe-form-div2">
                <div className="enter-your-email-here2">{`Enter your email `}</div>
                <button className="button1" onClick={onButtonClick}>
                  <img
                    className="rocketlaunch-icon6"
                    alt=""
                    src="../envelopesimple2.svg"
                  />
                  <div className="button-div10">Subscribe</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="frame-footer1">
          <div className="divider2" />
          <p className="nft-market-use-this-template2">
            Copyright Ⓒ Aryan Bhosale and Ayush Bhardwaj. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ConnectWalletDesktop;
