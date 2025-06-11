import { useEffect, useRef } from "react";
import Cart from "../Header/Cart";
import Login_Signup from "../Header/Login_Signup";
// ======================================================= //
export default function Sidebar() {
    let sidebar = useRef(null);



    useEffect(() => {
        document.body.addEventListener("click", function (e) {
            const target = e.target;
            const sidebarBtn = document.querySelector(".sidebar-btn");
            const sidebarCover = document.querySelector(".sidebar-cover");

            if (sidebar.current == null)
                return;

            if (!sidebar.current.contains(target) && target != sidebarBtn) {
                sidebar.current.style.transform = "translateX(-100%)";
                sidebarCover.style.width = "0";
            }
        });
    }, []);




    return <nav ref={sidebar} className="z-3 my-bg-f5f5f5-in-web text-light py-4 transition-3s w-250 sidebar position-fixed top-0 transform-translateX-100 h-vh">
        <Login_Signup />
        <hr className="progress-bar progress-bar-striped bg-info p-1" role="progressbar" />
        <Cart />
        <hr className="progress-bar progress-bar-striped bg-info p-1" role="progressbar" />
    </nav>
}
