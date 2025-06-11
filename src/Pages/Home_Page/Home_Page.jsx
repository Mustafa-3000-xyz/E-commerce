import Box_Categories from "../../Components/Box/Box_Categories";
import Box_Products from "../../Components/Box/Box_Products";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Slider_Images from "../../Components/Slider_Images/Slider_Images";
import Top_info from "../../Components/Top_info/Top_info";
// ======================================================= //
export default function Home_Page() {
    return <>
        <Sidebar />
        <Top_info />
        <Header />
        <hr />
        <Slider_Images />
        <Box_Products />
        <Box_Categories />
        <Footer />
    </>
}
