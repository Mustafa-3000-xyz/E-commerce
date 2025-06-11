import { useRecoilState } from "recoil";
import Style from "./index.module.css";
import Atom_Products from "../../Atoms/Atom_Products";
import { useNavigate } from "react-router-dom";
import Atom_Products_Copy from "../../Atoms/Atom_Products_Copy";
// ======================================================= //
export default function Box_Title(props) {
    let atomProducts = useRecoilState(Atom_Products)[0];
    let setAtomProductsCopy = useRecoilState(Atom_Products_Copy)[1];

    let navigate = useNavigate();

    
    function handle_Btn(){
        let result = atomProducts.filter(ele => ele.category == "gaming");
        setAtomProductsCopy(result);
        
        navigate("/show_products")
    }



    return <div className="px-2 mb-3">
        <div className="d-flex justify-content-between align-items-center row m-0 mb-1">
            <span className="fs-4 col-6 p-0">{props.title}</span>
            {
                props.showBtn == true ? <button onClick={handle_Btn} className="bg-transparent border-0 fs-3 col-6 text-end p-0">
                    View all
                    <i className="fa-solid fa-angle-right fs-3 my-text-primary ms-1"></i>
                </button> : ""
            }
        </div>

        <div className={Style.wall}>
            <div style={{ width: props.width }} className={Style.wall_cover}></div>
        </div>
    </div>
}

