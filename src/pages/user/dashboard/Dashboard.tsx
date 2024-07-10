import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Outlet />
        </div>
    )
}


export default Dashboard;