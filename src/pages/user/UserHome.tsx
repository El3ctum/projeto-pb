import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Outlet, Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link to="quotations" className="block py-2 px-4 rounded hover:bg-gray-700">
                Quotations
              </Link>
            </li>
            <li className="mb-2">
              <Link to="profile" className="block py-2 px-4 rounded hover:bg-gray-700">
                Profile
              </Link>
            </li>
            <li className="mb-2">
              <Link to="settings" className="block py-2 px-4 rounded hover:bg-gray-700">
                Settings
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">
                Logout
              </Link>
            </li>
            <li className="mb-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">UserHome Page</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default UserHome;
