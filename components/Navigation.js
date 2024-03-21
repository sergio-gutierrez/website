// @components/Layout.js
import Link from 'next/link';
//mport '@styles/globals.css'

const Layout = ({ children }) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href="/index">
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link href="/geniusApp">
            <div>App</div>
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </div>
);

export default Layout;
