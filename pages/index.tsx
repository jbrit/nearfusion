import type { NextPage } from "next";
import Head from "next/head";
// import { Swoosh } from "$svgs/swoosh";
import Navbar from "$components/Navbar";
import Footer from "$components/Footer";
import router from "next/router";
import NFLogo from "$components/NFLogo";
import { useEffect, useState } from "react";
import Link from "next/link";
import WalletLayout from "$components/WalletLayout";

const Home: NextPage = () => {
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
          <button
            onClick={() => alert("Nice try bro")}
            className="nearfusion-btn btn-primary"
          >
            Connect Wallet
          </button>
          <Link href="/watch-account">
            <a
              style={{
                marginTop: "1rem",
                color: "#48b7d3",
                borderBottom: "1px black solid",
              }}
            >
              Watch an account?
            </a>
          </Link>
        </div>
      </WalletLayout>
    </>
  );
};

export default Home;
