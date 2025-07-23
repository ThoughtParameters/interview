import React from 'react';
import { Link } from 'gatsby';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-gray-800 mb-6">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <Link to="/" className="text-white no-underline">
            Thought Parameters
          </Link>
        </h1>
        <nav>
          <Link to="/blog" className="text-white ml-5 no-underline">
            Blog
          </Link>
          <Link to="/learn" className="text-white ml-5 no-underline">
            Learn
          </Link>
          <Link to="/exams" className="text-white ml-5 no-underline">
            Exams
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="text-white ml-5 no-underline">
                Profile
              </Link>
              <button
                onClick={signOut}
                className="text-white ml-5 no-underline bg-transparent border-none cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-white ml-5 no-underline">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
