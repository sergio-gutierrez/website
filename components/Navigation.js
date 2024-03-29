// @components/Layout.js
import Link from 'next/link';


const Layout = ({ children }) => ( //defines layout that takes single prop, children
  // div wraps entire structure
  // div is the blue container
  <div> 
    <nav>
      <ul style={{ listStyleType: 
        'none', padding: 0, margin: 0 }}> 
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
