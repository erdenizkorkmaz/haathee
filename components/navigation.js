import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li className="logo">Logo</li>
          <li className="links">
            <ul>
              <li>
                <Link href="/blog">
                  <a>BLOG</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>PRICING</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>CONTACT US</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="auth">
            <button className="ghost">Contact</button>
            <button className="ghost">Login</button>
            <button>Register</button>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          padding: 0 20px;
          height: 60px;
          background-color: #fff;
          ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            li {
              flex: 1 1;
              display: flex;
              align-items: center;
              &.logo{
                justify-content: start;
              }
              &.links {
                width: 100%;
                margin-left: 2rem;
                justify-content: center;
                li {
                  margin-right: 1rem;
                  white-space: nowrap;
                }
              }
              &.auth {
                justify-content: end;
              }
            }
          }
        }
      `}</style>
      `
    </>
  );
}
