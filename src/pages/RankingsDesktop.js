import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RankingsDesktop.css";

const RankingsDesktop = () => {
 const options = {
	method: 'GET',
	headers: {
    'Access-Control-Allow-Origin': '*',
		'X-RapidAPI-Key': '9af57b7114mshb4e9f585f4b3977p1bef9djsna2d5678aeb56',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};



  const [coins, setCoins] = useState([])

  const fetchData = () => {
    fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", options)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.data.coins)
        setCoins(data.data.coins)
 
        console.log(coins)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const navigate = useNavigate();

  const onMarketplaceButtonClick = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

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

  const onMarketplaceButton1Click = useCallback(() => {
    navigate("/marketplace-desktop");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);
 let i = 1;
  return (
    <div className="rankings-desktop-div">
      <div className="frame-div">
        <div className="navigation-div">
          <img className="nav-logo" alt="" src="../nav--logo@2x.png" />
          <div className="nav-nav-menu">
            <button
              className="marketplace-button"
              onClick={onMarketplaceButtonClick}
            >
              <img
                className="rocketlaunch-icon"
                alt=""
                src="../rocketlaunch.svg"
              />
              <a className="button-a">Marketplace</a>
            </button>
            <div className="rankings-div">
              <img
                className="rocketlaunch-icon"
                alt=""
                src="../rocketlaunch.svg"
              />
              <div className="button-div">Rankings</div>
            </div>
            <div className="rankings-div">
              <img
                className="rocketlaunch-icon"
                alt=""
                src="../rocketlaunch.svg"
              />
              <div className="button-div">Authenticate</div>
            </div>
            <div className="sign-up-div">
              <img className="user-icon" alt="" src="../user.svg" />
              <div className="button-div">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
      <div className="headline-subhead">
        <div className="headline-subhead1">
          <div className="headline-div">
            <h1 className="top-creators-h1">Rankings</h1>
          </div>
          <div className="subhead-div">
            <h3 className="check-out-top-ranking-nft-arti">
              Check out top coins of the day!
            </h3>
          </div>
        </div>
      </div>
      <div className="frame-div1">
        <div className="tabs-div">
          <div className="tab-div">
            <h3 className="created-h3">Today</h3>
            <div className="frame-div2">
              <div className="div">302</div>
            </div>
          </div>
          <div className="tab-div1">
            <div className="created-div">This Week</div>
            <div className="frame-div3">
              <div className="div">67</div>
            </div>
          </div>
          <div className="tab-div1">
            <div className="created-div">This Month</div>
            <div className="frame-div3">
              <div className="div">67</div>
            </div>
          </div>
          <div className="tab-div1">
            <div className="created-div">All Time</div>
            <div className="frame-div3">
              <div className="div">67</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rankings-div1">
        <div className="table-header-div">
          <div className="table-headers-div">
            <div className="rank-artist">
              <p className="p">#</p>
              <p className="artist-p">Coin</p>
            </div>
            <div className="stats-header-div">
              <div className="change-div">
                <p className="change-p">Change</p>
              </div>
              <div className="nfts-sold-div">
                <div className="nfts-sold-div1">NFTs Sold</div>
              </div>
              <div className="nfts-sold-div">
                <p className="change-p">USD</p>
              </div>
            </div>
          </div>
        </div>
        {coins != [] > 0 && (coins.map(coin => (
          <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">{i}</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src={coin.iconUrl}
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">{coin.name}</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">{coin.btcPrice}ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">{i}</div>{i++}
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">{coin.change}%</p>
              </div>
              <div className="nfts-sold-div">
                <div className="nfts-sold-div1">602</div>
              </div>
              <div className="nfts-sold-div">
                <p className="change-p">12.4 ETH</p>
              </div>
            </div>
          </div>
        </div>
           
          )))}

      </div>
      <div className="footer-div">
        <div className="footer-info-div">
          <div className="nft-marketplace-info">
            <img className="logo-icon" alt="" src="../logo.svg" />
            <div className="additional-info-div20">
              <p className="nft-marketplace-ui-created-wit">
                <p className="nft-dashboard-p">NFT Dashboard</p>
                <p className="all-your-needs">All your needs in one place</p>
              </p>
              <div className="community-info-div">
                <p className="join-our-community">Join our community</p>
                <div className="icons-div">
                  <button
                    className="discordlogo-button"
                    onClick={onDiscordLogoButtonClick}
                  >
                    <img className="vector-icon" alt="" src="../vector.svg" />
                    <img className="vector-icon1" alt="" src="../vector.svg" />
                    <img
                      className="vector-stroke-icon"
                      alt=""
                      src="../vector-stroke.svg"
                    />
                    <img
                      className="vector-stroke-icon1"
                      alt=""
                      src="../vector-stroke1.svg"
                    />
                    <img
                      className="vector-stroke-icon2"
                      alt=""
                      src="../vector-stroke2.svg"
                    />
                    <img
                      className="vector-stroke-icon3"
                      alt=""
                      src="../vector-stroke3.svg"
                    />
                    <img className="vector-icon" alt="" src="../vector.svg" />
                    <img className="vector-icon1" alt="" src="../vector.svg" />
                    <img
                      className="vector-stroke-icon"
                      alt=""
                      src="../vector-stroke.svg"
                    />
                    <img
                      className="vector-stroke-icon1"
                      alt=""
                      src="../vector-stroke1.svg"
                    />
                    <img
                      className="vector-stroke-icon2"
                      alt=""
                      src="../vector-stroke2.svg"
                    />
                    <img
                      className="vector-stroke-icon3"
                      alt=""
                      src="../vector-stroke3.svg"
                    />
                  </button>
                  <button
                    className="discordlogo-button"
                    onClick={onYoutubeLogoButtonClick}
                  >
                    <img
                      className="vector-stroke-icon8"
                      alt=""
                      src="../vector-stroke8.svg"
                    />
                    <img
                      className="vector-stroke-icon9"
                      alt=""
                      src="../vector-stroke9.svg"
                    />
                  </button>
                  <button
                    className="discordlogo-button"
                    onClick={onTwitterLogoButtonClick}
                  >
                    <img className="vector-icon4" alt="" />
                    <img className="vector-icon5" alt="" src="../vector4.svg" />
                  </button>
                  <button
                    className="discordlogo-button"
                    onClick={onInstagramLogoButtonClick}
                  >
                    <img
                      className="vector-stroke-icon10"
                      alt=""
                      src="../vector-stroke10.svg"
                    />
                    <img
                      className="vector-stroke-icon11"
                      alt=""
                      src="../vector-stroke11.svg"
                    />
                    <img className="vector-icon6" alt="" src="../vector5.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-div">
            <h2 className="explore-h2">Explore</h2>
            <div className="pages-div">
              <button
                className="marketplace-button1"
                onClick={onMarketplaceButton1Click}
              >
                Marketplace
              </button>
              <button className="rankings-button">Rankings</button>
              <div className="div" />
            </div>
          </div>
          <div className="subscribe-div">
            <b className="join-our-weekly-digest">Join our weekly digest</b>
            <div className="pages-div">
              <div className="get-exclusive-promotions-upd">{`Get exclusive promotions & updates straight to your inbox.`}</div>
              <div className="subscribe-form-div">
                <div className="total-sales-div">{`Enter your email `}</div>
                <div className="button-div3" onClick={onButtonContainerClick}>
                  <img
                    className="rocketlaunch-icon"
                    alt=""
                    src="../envelopesimple.svg"
                  />
                  <div className="button-div">Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-div6">
          <div className="divider" />
          <p className="nft-market-use-this-template">
            Copyright Ⓒ Aryan Bhosale and Ayush Bhardwaj. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankingsDesktop;
