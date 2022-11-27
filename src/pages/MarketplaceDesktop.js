import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MarketplaceDesktop.css";

const MarketplaceDesktop = () => {
  const navigate = useNavigate();

  const onRankingsButtonClick = useCallback(() => {
    navigate("/");
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

  const onRankingsButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="marketplace-desktop-div">
      <div className="navigation-div1">
        <img className="nav-logo1" alt="" src="../nav--logo@2x.png" />
        <div className="nav-nav-menu1">
          <div className="marketplace-div">
            <img
              className="rocketlaunch-icon3"
              alt=""
              src="../rocketlaunch3.svg"
            />
            <div className="button-div5">Marketplace</div>
          </div>
          <button className="rankings-button1" onClick={onRankingsButtonClick}>
            <img
              className="rocketlaunch-icon3"
              alt=""
              src="../rocketlaunch3.svg"
            />
            <div className="button-div6">Rankings</div>
          </button>
          <div className="marketplace-div">
            <img
              className="rocketlaunch-icon3"
              alt=""
              src="../rocketlaunch3.svg"
            />
            <div className="button-div5">Authenticate</div>
          </div>
          <div className="sign-up-div1">
            <img className="user-icon1" alt="" src="../user1.svg" />
            <div className="button-div5">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="frame-div7">
        <div className="headline-subhead2">
          <div className="headline-subhead3">
            <div className="frame-div8">
              <h1 className="browse-marketplace-h1">Marketplace</h1>
              <p className="browse-through-more-than-50k-n">
                Browse through millions of NFTs
              </p>
            </div>
            <input
              className="table-header-input"
              type="text"
              placeholder="Search your favourite NFTs"
            />
          </div>
        </div>
      </div>
      <div className="marketplace-section-div">
        <div className="frame-div9">
          <div className="line-div" />
          <div className="frame-div10">
            <div className="tabs-div1">
              <div className="tab-div4">
                <h2 className="created-h2">NFTs</h2>
                <div className="frame-div11">
                  <p className="p41">302</p>
                </div>
              </div>
              <div className="tab-div5">
                <div className="created-div3">Collections</div>
                <div className="frame-div12">
                  <div className="div44">67</div>
                </div>
              </div>
              <div className="tab-div5">
                <div className="created-div3">Collection</div>
                <div className="frame-div12">
                  <div className="div44">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nft-cards-section">
          <div className="nft-cards-row">
            <a className="nft-card" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <h3 className="nft-name-h3">Magic Mushroom 0325</h3>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder20@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">Shroomie</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="nft-card1" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder1@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Happy Robot 032</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder21@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">BeKind2Robots</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="nft-card1" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder2@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Happy Robot 024</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder21@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">BeKind2Robots</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="nft-cards-row1">
            <a className="nft-card1" target="_blank">
              <img className="image-icon" alt="" src="../image@2x.png" />
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Designer Bear</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon23"
                          alt=""
                          src="../avatar-placeholder23@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">Mr Fox</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="nft-card1" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder3@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Colorful Dog 0356</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder24@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">Keepitreal</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="nft-card1" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder4@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Dancing Robot 0312</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder25@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">Robotica</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="nft-cards-row1">
            <a className="nft-card6" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder5@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <h3 className="nft-name-h31">Cherry Blossom Girl 035</h3>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder26@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">MoonDancer</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="nft-card1">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder6@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Space Travel</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder27@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">NebulaKid</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="nft-card1" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder7@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Sunset Dimension</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder28@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">Animakid</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="nft-cards-row1">
            <a className="nft-card1" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder8@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Desert Walk</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder29@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">Catch 22</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="nft-card1" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder9@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">IceCream Ape 0324</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder30@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">Ice Ape Club</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="nft-card1" target="_blank">
              <div className="image-div">
                <img
                  className="image-placeholder-icon"
                  alt=""
                  src="../image-placeholder10@2x.png"
                />
              </div>
              <div className="nft-info-div">
                <div className="artst-info-div">
                  <div className="nft-name-div">Colorful Dog 0344</div>
                  <div className="artist-avatar-name">
                    <div className="avatar-div20">
                      <div className="asset-12-220">
                        <img
                          className="avatar-placeholder-icon20"
                          alt=""
                          src="../avatar-placeholder31@2x.png"
                        />
                      </div>
                    </div>
                    <div className="nft-artist-div">PuppyPower</div>
                  </div>
                </div>
                <div className="additional-info-div21">
                  <div className="price-div">
                    <div className="price-div1">Price</div>
                    <div className="weth-div">1.63 ETH</div>
                  </div>
                  <div className="highest-bid-div">
                    <div className="price-div1">Highest Bid</div>
                    <div className="weth-div">0.33 wETH</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-div1">
        <div className="footer-info-div1">
          <div className="nft-marketplace-info1">
            <img className="logo-icon1" alt="" src="../logo.svg" />
            <div className="additional-info-div33">
              <p className="nft-marketplace-ui-created-wit1">
                <p className="nft-dashboard-p1">NFT Dashboard</p>
                <p className="all-your-needs1">All your needs in one place</p>
              </p>
              <div className="community-info-div1">
                <p className="join-our-community1">Join our community</p>
                <div className="icons-div1">
                  <button
                    className="discordlogo-button1"
                    onClick={onDiscordLogoButtonClick}
                  >
                    <img className="vector-icon7" alt="" src="../vector.svg" />
                    <img className="vector-icon8" alt="" src="../vector.svg" />
                    <img
                      className="vector-stroke-icon12"
                      alt=""
                      src="../vector-stroke.svg"
                    />
                    <img
                      className="vector-stroke-icon13"
                      alt=""
                      src="../vector-stroke1.svg"
                    />
                    <img
                      className="vector-stroke-icon14"
                      alt=""
                      src="../vector-stroke2.svg"
                    />
                    <img
                      className="vector-stroke-icon15"
                      alt=""
                      src="../vector-stroke3.svg"
                    />
                    <img className="vector-icon7" alt="" src="../vector.svg" />
                    <img className="vector-icon8" alt="" src="../vector.svg" />
                    <img
                      className="vector-stroke-icon12"
                      alt=""
                      src="../vector-stroke.svg"
                    />
                    <img
                      className="vector-stroke-icon13"
                      alt=""
                      src="../vector-stroke1.svg"
                    />
                    <img
                      className="vector-stroke-icon14"
                      alt=""
                      src="../vector-stroke2.svg"
                    />
                    <img
                      className="vector-stroke-icon15"
                      alt=""
                      src="../vector-stroke3.svg"
                    />
                  </button>
                  <button
                    className="discordlogo-button1"
                    onClick={onYoutubeLogoButtonClick}
                  >
                    <img
                      className="vector-stroke-icon20"
                      alt=""
                      src="../vector-stroke8.svg"
                    />
                    <img
                      className="vector-stroke-icon21"
                      alt=""
                      src="../vector-stroke9.svg"
                    />
                  </button>
                  <button
                    className="discordlogo-button1"
                    onClick={onTwitterLogoButtonClick}
                  >
                    <img className="vector-icon11" alt="" />
                    <img
                      className="vector-icon12"
                      alt=""
                      src="../vector4.svg"
                    />
                  </button>
                  <button
                    className="discordlogo-button1"
                    onClick={onInstagramLogoButtonClick}
                  >
                    <img
                      className="vector-stroke-icon22"
                      alt=""
                      src="../vector-stroke10.svg"
                    />
                    <img
                      className="vector-stroke-icon23"
                      alt=""
                      src="../vector-stroke11.svg"
                    />
                    <img
                      className="vector-icon13"
                      alt=""
                      src="../vector5.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-div1">
            <h2 className="explore-h21">Explore</h2>
            <div className="pages-div1">
              <button className="marketplace-button2">Marketplace</button>
              <button
                className="rankings-button2"
                onClick={onRankingsButton1Click}
              >
                Rankings
              </button>
              <a className="connect-a-wallet3" />
            </div>
          </div>
          <div className="subscribe-div1">
            <h2 className="explore-h21">Join our weekly digest</h2>
            <div className="pages-div1">
              <p className="get-exclusive-promotions-upd1">{`Get exclusive promotions & updates straight to your inbox.`}</p>
              <div className="subscribe-form-div1">
                <label className="nft-artist-div">{`Enter your email `}</label>
                <button className="button" onClick={onButtonClick}>
                  <img
                    className="rocketlaunch-icon3"
                    alt=""
                    src="../envelopesimple.svg"
                  />
                  <div className="button-div6">Subscribe</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="frame-footer">
          <div className="divider1" />
          <p className="nft-market-use-this-template1">
            Copyright Ⓒ Aryan Bhosale and Ayush Bhardwaj. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MarketplaceDesktop;
