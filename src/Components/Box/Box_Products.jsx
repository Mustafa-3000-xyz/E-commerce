import { useRecoilState } from "recoil";
import Box_Title from "./Box_Title";
import Loading from "../Loading/Loading";
import { useState, useEffect, useRef } from "react";

import Atom_Products from "../../Atoms/Atom_Products";
import { Link } from "react-router-dom";

import Product from "../Product/Product";
// ======================================================= //
export default function Box_Products() {
    let [widthBoxTitle, setWidthBoxTitle] = useState(0);
    let products = useRecoilState(Atom_Products)[0];
    let boxTitle = useRef(null);

    useEffect(() => {
        let width = boxTitle.current.getBoundingClientRect().width;
        setWidthBoxTitle(width);

        window.addEventListener("resize", function () {
            if (boxTitle.current == null) 
                return;
            
            let x = boxTitle.current.getBoundingClientRect().width;
            setWidthBoxTitle(x);
        })
    }, []);

    return (
        <section className=" mb-5">
            <Box_Title showBtn={true} width={`${widthBoxTitle}px`} title={<span ref={boxTitle}> Grap the on <span className="my-text-primary fw-medium">Gaming</span> </span>} />

            <div className="d-flex justify-content-center flex-wrap gap-2">
                {
                    products.length != 0 ?
                        products.filter(ele => ele.category == "gaming").slice(0,5).map(ele => <Product key={ele.id} id={ele.id} category={ele.category} about={ele.description} price={ele.price} img={ele.image} title={ele.title.length > 29 ? ele.title.slice(0,30) : ele.title} /> )
                        : <Loading />
                }
            </div>
        </section>
    );
}