import Cart from "./Cart";
import Login_Signup from "./Login_Signup";
import Search from "./Search";
import "./index.css";
// ======================================================= //
export default function Header() {
    function handle_Sidebar_Btn(){
        let sidebar = document.querySelector(".sidebar");
        let sidebarCover = document.querySelector(".sidebar-cover");
        sidebar.style.transform = "translateX(0)";
        sidebarCover.style.width = "100%";
    }


    return <header className=" px-2 mt-3 d-flex justify-content-between align-items-center">
        <div className=" d-flex align-items-center me-3">
            <i onClick={handle_Sidebar_Btn} className="sidebar-btn fa-solid fa-bars-staggered me-2 fs-4 mt-2 cursor-pointer"></i>           
            <h1 className="my-text-primary m-0">FoxShop</h1>
        </div>

        <div className="d-flex align-items-center gap-2 w-75 justify-content-end">
            <Search />

            <Login_Signup />
            <div className="wall"></div>
            <Cart />
        </div>

        <div className="sidebar-cover "></div>
    </header>
}
