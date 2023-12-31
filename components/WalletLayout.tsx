import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
// import { Swoosh } from "$svgs/swoosh";
import Navbar from "$components/Navbar";
import Footer from "$components/Footer";
import router from "next/router";
import NFLogo from "$components/NFLogo";
import { useEffect, useState } from "react";
import Link from "next/link";

const WalletLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NearFusion</title>
        <meta name="description" content="NearFusion - Let's get tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="home-header">
        <Navbar />
        <div style={{ height: "20vw" }}></div>
        {/* <div className="container">
          <p className="hero-text title-font">
            <div>Start Tracking your</div>
            <div>
              NEAR{" "}
              <span className="contents-text">
                assets <Swoosh className="contents-text-swoosh" />
              </span>
            </div>
          </p>
        </div> */}
        {/* design triangles */}
        <div
          className="bottom-triangle"
          style={{
            left: 0,
            borderLeft: "50vw solid white",
          }}
        />
        <div
          className="bottom-triangle"
          style={{
            right: 0,
            borderRight: "50vw solid white",
          }}
        />
        {/* design triangles */}
      </header>
      <div
        style={{
          maxWidth: "50vw",
          margin: "-20vw auto 0",
          padding: "4rem 0 0",
        }}
      >
        <div className="course-card"><div className="course-card_main">{children}</div></div>
      </div>
      <Footer />
    </>
  );
};

export default WalletLayout;
