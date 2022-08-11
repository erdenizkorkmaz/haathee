import Image from "next/image";
import LandingLayout from "../components/landingLayout";

export default function Home() {
  return (
    <>
      <LandingLayout
        title="Build a Connected Culture and Engage Your Team"
        description="Build a Connected Culture and Engage Your Team"
      >
        <div>
          <h1>
            Row Line 1<br />
            Row Line 2<br />
            Row Line 3
          </h1>
          <h2>
            Lucky Carrot is a Peer Recognition and Employee Engagement Platform
          </h2>
          <button>GET STARTED</button>
        </div>
        <div>
          <Image
            src="/landing-bg.png"
            alt="haathee"
            width={1200}
            height={800}
            layout="fill"
          />
        </div>
      </LandingLayout>
      <style jsx>{`
        h1 {
          font-size: 7rem;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
