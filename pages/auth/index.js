import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/loginForm";
import Footer from "../components/footer";

export default function Auth() {
  return (
    <>
      <Head>
        <title>HaatHee - Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className="action-area">
          <Image
            src="/login-bg.png"
            width={1200}
            height={800}
            layout="fill"
            alt="HaatHee Logo"
          />
          <LoginForm></LoginForm>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
