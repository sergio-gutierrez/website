// @components/Layout.js
import Link from 'next/link';


const Layout = ({ children }) => (
  <div>
    <nav>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li >
          <Link href="/index">
          </Link>
        </li>
        <li>
          <Link href="/geniusApp">
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </div>
);

export default Layout;
