import type { NextPage } from "next";
import router from "next/router";
import NFLogo from "$components/NFLogo";
import { useState } from "react";
import Link from "next/link";
import WalletLayout from "$components/WalletLayout";
import Storage from "$utils/storage";

const Home: NextPage = () => {
  const [walletID, setWalletID] = useState("");

  const handleSubmit = () => {
    if (!walletID.endsWith(".near") || walletID.length <= 5) {
      alert("Please enter a valid mainnet wallet id");
      return;
    }
    Storage.saveToLocalStorage("wallet_id", walletID);
    router.push("/dashboard");
  };

  return (
    <>
      <WalletLayout>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem 0",
          }}
        >
          <NFLogo scale={1.4} style={{ zIndex: 2 }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            style={{ marginBottom: "1rem" }}
            className="search-bar"
          >
            <input
              value={walletID}
              onChange={(e) => setWalletID(e.target.value)}
              className="search-bar__input"
              type="text"
              placeholder="Enter your wallet id"
            />
          </form>

          <button onClick={handleSubmit} className="nearfusion-btn btn-primary">
            Watch Account
          </button>
          <Link href="/">
            <a
              style={{
                marginTop: "1rem",
                color: "#48b7d3",
                borderBottom: "1px black solid",
              }}
            >
              Connect your wallet?
            </a>
          </Link>
        </div>
      </WalletLayout>
    </>
  );
};

export default Home;
