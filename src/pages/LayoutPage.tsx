import Footer from "@/components/layouts/footer"
import Header from "@/components/layouts/header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;