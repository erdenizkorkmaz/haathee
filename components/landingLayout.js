import Head from "next/head";
import Footer from "./footer";
import Navigation from "./navigation";

export default function LandingLayout({ children, ...props }) {
  return (
    <>
      <Head>
        <title>Haathee - {props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main className="main">{children}</main>

	    <Footer></Footer>
    </>
  );
}
