import React from 'react';
import { Link } from 'gatsby';

function Headerbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Headerbar;
