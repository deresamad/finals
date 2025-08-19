import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  
  // Helper function to determine if the link is active
  const isActive = (path) => {
    return router.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navigation">
      <h2>Navigation</h2>
      <ul>
        <li className={isActive('/')}> 
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={isActive('/about')}> 
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={isActive('/demo')}> 
          <Link href="/demo">
            <a>Demo</a>
          </Link>
        </li>
      </ul>

      {/* Programmatic navigation example */}
      <div className="nav-buttons">
        <button onClick={() => router.push('/')}>Go to Home</button>
        <button onClick={() => router.push('/about')}>Go to About</button>
      </div>
    </nav>
  );
};

export default Navigation;