// @components/Layout.js
import Link from 'next/link';
import '@styles/globals.css'

const Layout = ({ children }) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href="/index">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/geniusApp">
            <a>App</a>
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </div>
);

export default Layout;
