import { useRecoilState } from "recoil"
import Atom_Products_Copy from "../../Atoms/Atom_Products_Copy";

import Style from "./index.module.css";
import $ from "jquery";
import { useEffect, useState } from "react";
// ======================================================= //
export default function Filter() {
    let [atomProductsCopy, setAtomProductsCopy] = useRecoilState(Atom_Products_Copy);
    let [takeProductsCopy, setTakeProductsCopy] = useState([]);

    function handle_Btns(e) {
        let btn = e.target;
        let btnValue = btn.innerText;

        $(btn).addClass("my-bg-primary");
        $(btn).addClass("my-text-f5f5f5");

        $(btn).siblings().removeClass("my-bg-primary");
        $(btn).siblings().removeClass("my-text-f5f5f5");

        check_Btn_Value(btnValue)
    }

    function check_Btn_Value(btnValue) {
        switch (btnValue) {
            case "All":
                setAtomProductsCopy(takeProductsCopy);
                break;
            case "Oldest":
                let result1 = [...atomProductsCopy].sort(function (a, b) {
                    return a.discount- b.discount
                })
                setAtomProductsCopy(result1);
                break;
            case "Latest":
                let result2 = [...atomProductsCopy].sort(function (a, b) {
                    return b.discount - a.discount
                })
                setAtomProductsCopy(result2);
                break;

            case "Expensive":
                let result3 = [...atomProductsCopy].sort(function (a, b) {
                    return b.price - a.price;
                })
                setAtomProductsCopy(result3);
                break;

            case "Cheap":
                let result4 = [...atomProductsCopy].sort(function (a, b) {
                    return a.price - b.price;
                })
                setAtomProductsCopy(result4);
                break;
        }
    }

    useEffect(function () {
        if (takeProductsCopy.length == 0) {
            setTakeProductsCopy(atomProductsCopy);
        }
    }, []);

    return <div className={`${Style.btns_bos} p-3 d-flex flex-wrap justify-content-sm-start justify-content-center gap-3`}>
        <button onClick={handle_Btns} className="border-0 px-3 fs-5 fw-semibold rounded-5 transition-3s my-bg-primary my-text-f5f5f5"> All </button>
        <button onClick={handle_Btns} className="border-0 px-3 fs-5 fw-semibold rounded-5 transition-3s"> Oldest </button>
        <button onClick={handle_Btns} className="border-0 px-3 fs-5 fw-semibold rounded-5 transition-3s"> Latest </button>
        <button onClick={handle_Btns} className="border-0 px-3 fs-5 fw-semibold rounded-5 transition-3s"> Expensive </button>
        <button onClick={handle_Btns} className="border-0 px-3 fs-5 fw-semibold rounded-5 transition-3s"> Cheap </button>
    </div>
}
