import HomePage from "@/Components/HomePage";
import { Button, message } from "antd";
import Head from "next/head";

export default function Home() {
  const showMessage = () => {
    message.error("Success!");
  };
  return (
    <>
      <Head>
        <title>Kanban board</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}