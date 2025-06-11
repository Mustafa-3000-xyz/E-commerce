import { Link, useParams } from "react-router-dom"
import { useRecoilState } from "recoil";
import Atom_Products from "../../Atoms/Atom_Products";
import Style from "./index.module.css";

import styled from 'styled-components';
import Atom_Using_This_Account from "../../Atoms/Atom_Using_This_Account";
import { useEffect, useState } from "react";
import Add_To_Cart from "./Add_To_Cart";
import Go_To_Cart from "./Go_To_Cart";
// ======================================================= //
export default function Show_Product() {
  let atomProduct = useRecoilState(Atom_Products)[0];
  let atomUsingThisAccount = useRecoilState(Atom_Using_This_Account)[0];

  let { id } = useParams();
  let [checkIsLogIn, setCheckIsLogIn] = useState(false);
  let getProduct = atomProduct.find(ele => ele.id == id);


  useEffect(function () {
    if (atomUsingThisAccount != null) {
      setCheckIsLogIn(true);
    }
  }, [atomUsingThisAccount]);

  return <section className=" p-2">
    <div className={`${Style.img_box}`}>
      <img className="w-100 h-100 rounded-2" src={getProduct.image} alt="" />
    </div>

    <hr />

    <div>
      <h3>Information :</h3>
      <ul>
        <li className=" fs-5 fw-medium"> <span className=" text-info">Product Name :</span> {getProduct.title} </li>
        <li className=" fs-5 fw-medium"> <span className=" text-info">Category :</span> {getProduct.category} </li>
        <li className=" fs-5 fw-medium"> <span className=" text-info">Price :</span> <span className=" text-success"> {getProduct.price}$ </span> </li>
      </ul>

      <h3>Description :</h3>
      <p>{getProduct.description}</p>
    </div>

    <hr />

    <div className=" w-100">
      {
        checkIsLogIn == true ?
          atomUsingThisAccount.userCart.length > 0 ?
            atomUsingThisAccount.userCart.find(ele => ele.id == id) ? <Go_To_Cart /> : <Add_To_Cart checkIsLogIn={checkIsLogIn} />
            : <Add_To_Cart checkIsLogIn={checkIsLogIn} />
          : <Add_To_Cart checkIsLogIn={checkIsLogIn} />
      }

    </div>

    <StyledWrapper>
      <Link to={"/"}>
        <button className="pushable position-sticky bottom-0 start-0 mt-4">
          <span className="shadow" />
          <span className="edge" />
          <span className="front fw-bolder"> BACK </span>
        </button>
      </Link>
    </StyledWrapper>
  </section>
}




const StyledWrapper = styled.div`
  .pushable {
    background: transparent;
    padding: 0px;
    border: none;
    cursor: pointer;
    outline-offset: 4px;
    outline-color: deeppink;
    transition: filter 250ms;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: hsl(226, 25%, 69%);
    border-radius: 8px;
    filter: blur(2px);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .edge {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: rgb(241, 240, 240)
  }

  .front {
    display: block;
    position: relative;
    border-radius: 8px;
    background: #008ECC;
    padding: 16px 32px;
    color: white;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 1rem;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .pushable:hover {
    filter: brightness(110%);
  }

  .pushable:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  .pushable:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  .pushable:focus:not(:focus-visible) {
    outline: none;
  }`;