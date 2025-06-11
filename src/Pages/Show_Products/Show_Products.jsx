import { useRecoilState } from "recoil";
import Atom_Products_Copy from "../../Atoms/Atom_Products_Copy";
import Product from "../../Components/Product/Product";
import { Link } from "react-router-dom";

import styled from 'styled-components';
import Filter from "../../Components/Filter/Filter";

// ======================================================= //
export default function Show_Products() {
  let atomProductsCopy = useRecoilState(Atom_Products_Copy)[0];

  return <section className="position-relative">
    {
      atomProductsCopy.length > 0 ? <div>
        <Filter />
        <div className=" d-flex justify-content-center flex-wrap gap-1">
          {
            atomProductsCopy.map(ele => <Product key={ele.id} id={ele.id} category={ele.category} about={ele.description} price={ele.price} img={ele.image} title={ele.title.length > 29 ? ele.title.slice(0, 30) : ele.title} />)
          }
        </div>
      </div> : <h1 className="text-center"> Not found </h1>
    }


    <StyledWrapper>
      <Link to={"/"}>
        <button className="pushable position-sticky bottom-0 start-0 m-3">
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