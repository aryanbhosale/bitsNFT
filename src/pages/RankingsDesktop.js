import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RankingsDesktop.css";

const RankingsDesktop = () => {
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
        <div className="table-items-div">
          <div className="table-items-div1">
            <div className="rank-artist1">
              <div className="ranking-number-div">
                <p className="p1">1</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src="../avatar-placeholder@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Jaydon Ekstrom Bothman</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">2</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src="../avatar-placeholder1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Ruben Carder</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">3</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src="../avatar-placeholder2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Alfredo Septimus</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">4</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src="../avatar-placeholder3@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Davis Franci</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">5</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src="../avatar-placeholder4@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Livia Rosser</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">6</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src="../avatar-placeholder5@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Kianna Donin</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">7</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder6@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Phillip Lipshutz</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">8</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder7@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Maria Rosser</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p1">9</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder8@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Kianna Stanton</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">10</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder9@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Angel Lubin</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">11</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder10@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Allison Torff</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">12</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder11@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Davis Workman</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">13</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder12@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Lindsey Lipshutz</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">14</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder13@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Randy Carder</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">15</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder14@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Lydia Culhane</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">16</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder15@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Rayna Bator</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">17</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder16@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Jocelyn Westervelt</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">18</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src="../avatar-placeholder@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Marilyn Torff</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">19</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon6"
                        alt=""
                        src="../avatar-placeholder9@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Skylar Levin</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
        <div className="table-items-div">
          <div className="table-items-div3">
            <div className="rank-artist2">
              <div className="ranking-number-div2">
                <p className="p19">20</p>
              </div>
              <div className="artist-card-div">
                <div className="artist-avatar-div">
                  <div className="avatar-div">
                    <div className="asset-12-2">
                      <img
                        className="avatar-placeholder-icon"
                        alt=""
                        src="../avatar-placeholder2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="artist-info-div">
                  <b className="dish-studio-b">Terry Dorwart</b>
                  <div className="additional-info-div">
                    <div className="total-sales-div">Total Sales:</div>
                    <div className="eth-div">34.53 ETH</div>
                  </div>
                </div>
                <div className="ranking-number-div1">
                  <div className="div4">1</div>
                </div>
              </div>
            </div>
            <div className="stats-div">
              <div className="change-div1">
                <p className="change-p">+1.41%</p>
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
