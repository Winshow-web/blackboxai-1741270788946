import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Student Admission System
          </h2>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Outlet />
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <nav className="space-x-4">
            <Link
              to="/login"
              className="hover:text-primary-500 transition-colors duration-200"
            >
              Student Login
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/register"
              className="hover:text-primary-500 transition-colors duration-200"
            >
              Register
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              to="/admin/login"
              className="hover:text-primary-500 transition-colors duration-200"
            >
              Admin Login
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Student Admission System. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
