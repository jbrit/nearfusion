import type { NextPage } from "next";
import Head from "next/head";
// import { Swoosh } from "$svgs/swoosh";
import Navbar from "$components/Navbar";
import Footer from "$components/Footer";
import router from "next/router";
import NFLogo from "$components/NFLogo";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WalletLayout from "$components/WalletLayout";
import Storage from "$utils/storage";
import { useQuery } from "@tanstack/react-query";
import { Tab } from "@headlessui/react";
import NearBlocks from "$utils/nearblocks";
// enum Tabs {
//     assets,
//     collectibles,
//     transactions
// }

const Home: NextPage = () => {
  const wallet_id = Storage.getFromLocalStorage("wallet_id") as string;
  const { data: accountData, isLoading: acccountLoading } = useQuery(
    [wallet_id],
    () => NearBlocks.accountInfo<{ account: [{ amount: string }] }>(wallet_id)
  );
  const { data: tokensData, isLoading: tokensLoading } = useQuery(
    [wallet_id, "tokens"],
    () => NearBlocks.tokens(wallet_id)
  );
  //   console.log(accountData);
  console.log(tokensData);
  //   const getAccountInfo = async () => {
  //     const res = await fetch(
  //       "https://api.nearblocks.io/v1/account/" + wallet_id
  //     );
  //     const jsonResponse: {
  //       account: [
  //         {
  //           amount: string;
  //         }
  //       ];
  //     } = await res.json();
  //     const balance = Number(jsonResponse.account[0].amount) / 1e24;
  //     console.log(balance);
  //   };

  useEffect(() => {
    // getAccountInfo();
  }, []);
  return (
    <>
      <WalletLayout>
        <div style={{ display: "flex", marginBottom: "1rem" }}>
          <NFLogo scale={0.8} style={{ zIndex: 2 }} />
          <span
            style={{
              display: "inline-block",
              fontSize: "1.5rem",
              margin: "auto",
            }}
          >
            {wallet_id}
          </span>
          <NFLogo scale={0.8} style={{ zIndex: 2, visibility: "hidden" }} />
        </div>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: 500,
            textAlign: "center",
            margin: "0 0 1rem",
          }}
        >
          {acccountLoading
            ? "Loading..."
            : `${(Number(accountData!.data.account[0].amount) / 1e24).toFixed(
                2
              )} NEAR`}
        </div>
        <Tab.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <Tab.List>
              <Tab as={React.Fragment}>
                {({ selected }) => (
                  <span
                    style={{
                      color: selected ? "black" : "#aaa",
                      borderBottom: "2px solid",
                      borderColor: selected ? "black" : "transparent",
                      cursor: "pointer",
                      fontWeight: 500,
                      margin: "0 0.5rem",
                    }}
                  >
                    Assets
                  </span>
                )}
              </Tab>
              <Tab as={React.Fragment}>
                {({ selected }) => (
                  <span
                    style={{
                      color: selected ? "black" : "#aaa",
                      borderBottom: "2px solid",
                      borderColor: selected ? "black" : "transparent",
                      cursor: "pointer",
                      fontWeight: 500,
                      margin: "0 0.5rem",
                    }}
                  >
                    Collectibles
                  </span>
                )}
              </Tab>
              <Tab as={React.Fragment}>
                {({ selected }) => (
                  <span
                    style={{
                      color: selected ? "black" : "#aaa",
                      borderBottom: "2px solid",
                      borderColor: selected ? "black" : "transparent",
                      cursor: "pointer",
                      fontWeight: 500,
                      margin: "0 0.5rem",
                    }}
                  >
                    Transactions
                  </span>
                )}
              </Tab>
            </Tab.List>
          </div>
          <div
            style={{
              padding: "0 1rem",
              maxHeight: "20rem",
              overflow: "auto",
            }}
          >
            <Tab.Panels>
              <Tab.Panel>
                {tokensLoading && "Loading Assets..."}
                {tokensData?.data.inventory.fts &&
                  tokensData?.data.inventory.fts.map((ft) => (
                    <div
                      key={ft.contract}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#eee",
                        padding: "1rem",
                        marginBottom: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        height={40}
                        width={40}
                        layout="intrinsic"
                        src={
                          ft.ft_metas.icon ??
                          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        }
                      />
                      <div
                        style={{
                          marginLeft: "2rem",
                          fontWeight: 500,
                          fontSize: "1.125rem",
                        }}
                      >
                        {ft.amount} {ft.ft_metas.symbol}
                      </div>
                    </div>
                  ))}
              </Tab.Panel>
              <Tab.Panel>
                {tokensLoading && "Loading Collectibles..."}
                {tokensData?.data.inventory.nfts &&
                  tokensData?.data.inventory.nfts.map((nft) => (
                    <div
                      key={nft.contract}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#eee",
                        padding: "1rem",
                        marginBottom: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        height={40}
                        width={40}
                        layout="intrinsic"
                        src={
                          nft.nft_meta.icon ??
                          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        }
                      />
                      <div
                        style={{
                          marginLeft: "2rem",
                          fontWeight: 500,
                          fontSize: "1.125rem",
                        }}
                      >
                        1 {nft.contract} NFT {nft.nft_meta.symbol}
                      </div>
                    </div>
                  ))}
              </Tab.Panel>
              <Tab.Panel>Transactions</Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </WalletLayout>
    </>
  );
};

export default Home;
