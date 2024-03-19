// components/Layout.js

import '../styles.css'; // Import your CSS file


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
