import { useRecoilState } from "recoil";
import Box_Title from "./Box_Title";
import { useEffect, useRef, useState } from "react";

import Atom_Products from "../../Atoms/Atom_Products";
import Atom_Categories from "../../Atoms/Atom_Categories";
import { useNavigate } from "react-router-dom";

import Loading from '../Loading/Loading';

import Style from "./index.module.css";
import Atom_Products_Copy from "../../Atoms/Atom_Products_Copy";
// ======================================================= //
export default function Box_Categories() {
    let [getWidthTitle, setGetWidthTitle] = useState("");
    let boxTitle = useRef(null);
    let navigate = useNavigate();

    let products = useRecoilState(Atom_Products)[0];
    let categories = useRecoilState(Atom_Categories)[0];
    let setProductsCopy = useRecoilState(Atom_Products_Copy)[1];


    function handle_Btns(text) {
        let result = products.filter(ele => ele.category == text);
        setProductsCopy(result);

        navigate("/show_products");
    }

    useEffect(function () {
        let width = boxTitle.current.getBoundingClientRect().width;
        setGetWidthTitle(width);

        window.addEventListener("resize", function () {
            if (boxTitle.current == null)
                return;

            let x = boxTitle.current.getBoundingClientRect().width;
            setGetWidthTitle(x);
        })
    }, []);



    return <section className="mb-5">
        <Box_Title showBtn={false} width={getWidthTitle} title={<span ref={boxTitle}>Shop From <span className="my-text-primary fw-medium">Top Categories</span> </span>} />
        <div className=" d-flex flex-wrap justify-content-center gap-3 fw-medium fs-5">
            {
                categories.length && products.length > 0 ?
                    categories.map((ele, i) => <button onClick={()=> handle_Btns(ele)} className=" btn fw-medium btn-outline-primary" key={i}>
                        {ele}
                    </button>) : <Loading />
            }
        </div>
    </section>
}
