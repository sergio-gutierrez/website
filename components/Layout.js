// components/Layout.js

import '../globals.css'; // Import your CSS file
import '@styles/globals.css'


import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
