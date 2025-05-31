import Image from "next/image";
import localFont from "next/font/local";
import Layout from "../components/Layout";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function Home() {
  return (
    <Layout title="Home" description="Welcome to our website">
      <h1>Welcome to the home page</h1>
    </Layout>
  )
}