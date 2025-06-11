import { useRecoilState } from "recoil";
import Home_Page from "./Pages/Home_Page/Home_Page";
import Signup_Page from "./Pages/Signup_Page/Signup_Page";
import { useEffect } from "react";
import axios from "axios";

import Atom_Products from "./Atoms/Atom_Products";
import Atom_Categories from "./Atoms/Atom_Categories";
import Atom_Islogin from "./Atoms/Atom_Islogin";
import { Route, Routes } from "react-router-dom";
import Login_Page from "./Pages/Login_Page/Login_Page";
import Show_Products from "./Pages/Show_Products/Show_Products";
import Atom_Users from "./Atoms/Atom_Users";
import Atom_Using_This_Account from "./Atoms/Atom_Using_This_Account";
import Show_Product from "./Pages/Show_Product/Show_Product";
import Cart_Page from "./Pages/Cart_Page/Cart_Page";
import Atom_Products_Copy from "./Atoms/Atom_Products_Copy";
// ======================================================= //
function App() {

  (function () {
    let setAtomProducts = useRecoilState(Atom_Products)[1];
    let setAtomProductsCopy = useRecoilState(Atom_Products_Copy)[1];

    let setAtomCategories = useRecoilState(Atom_Categories)[1];

    let atomUsers = useRecoilState(Atom_Users)[0];
    let atomLogin = useRecoilState(Atom_Islogin)[0];
    let atomUsingThisAccount = useRecoilState(Atom_Using_This_Account)[0];

    localStorage.setItem("users", JSON.stringify(atomUsers));
    localStorage.setItem("isLogin", JSON.stringify(atomLogin));
    localStorage.setItem("usingThisAccount", JSON.stringify(atomUsingThisAccount));


    async function get_Categories() {
      let res = await axios.get("https://fakestoreapi.in/api/products/category");
      let data = res.data.categories;
      setAtomCategories(data);
    }

    async function get_Products() {
      let res = await axios.get("https://fakestoreapi.in/api/products?limit=150");
      let data = res.data.products;
      let result = data.filter(ele => ele.id != 57 && ele.id != 72);
      let count = 0;
      let arr = [];

      result.forEach(element => {
        let img = new Image();
        img.src = element.image;

        img.onload = function () {
          arr.push(element);
          count++;
          if (count == result.length) {
            setAtomProducts(arr);
            setAtomProductsCopy(arr);
          }
        }

        img.onerror = function () {
          count++;
          if (count == result.length) {
            setAtomProducts(arr);
            setAtomProductsCopy(arr);
          }
        }
      });
    }

    useEffect(() => {
      get_Categories();
      get_Products();
    }, []);
  })();



  return <>
    <Routes>
      <Route path="/" element={<Home_Page />} />
      <Route path="/log_in" element={<Login_Page />} />
      <Route path="/sign_up" element={<Signup_Page />} />
      <Route path="/show_products" element={<Show_Products />} />
      <Route path="/show_product/:id" element={<Show_Product />} />
      <Route path="/cart" element={<Cart_Page />} />
    </Routes>
  </>
}

export default App;