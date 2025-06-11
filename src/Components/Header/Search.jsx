import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Atom_Products from '../../Atoms/Atom_Products';
import Atom_Products_Copy from '../../Atoms/Atom_Products_Copy';
// ======================================================= //
export default function Search() {
    let [searchText, setSearchText] = useState("");
    let navigate = useNavigate();

    let atomProducts = useRecoilState(Atom_Products)[0];
    let setAtomProductsCopy = useRecoilState(Atom_Products_Copy)[1];

    function handle_Search_When_Writing(e) {
        let valueSearch = e.target.value;
        setSearchText(valueSearch);
    }

    function handle_Search_Enter(e){
        let arr = [];

        if (e.key == "Enter") 
        {
            for (let i = 0; i < atomProducts.length; i++) {
                if(atomProducts[i].title.toLowerCase().includes(searchText.toLowerCase())){
                    arr.push(atomProducts[i]);
                }
            }

            setAtomProductsCopy(arr);
            navigate("/show_products");
        }
    }




    return <StyledWrapper>
        <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" /></g></svg>
            <input onKeyDown={handle_Search_Enter} onChange={handle_Search_When_Writing} className="input py-3 w-100 fw-medium fs-5" placeholder="Search" type="search" />
        </div>
    </StyledWrapper>
}

const StyledWrapper = styled.div`
flex:1;
  .group {
   display: flex;
   line-height: 28px;
   align-items: center;
   position: relative;
   border-color: rgba(234,76,137,0.4);
  }

  .input {
   padding: 0 1rem;
   padding-left: 2.5rem;
   border: none;
   border-radius: 5px;
   outline: none;
   color: #0d0c22;
   transition: .3s ease;
   background-color: #f3f9fb;
  }

  .input::placeholder {
   color: #9e9ea7;
  }

  .input:focus, input:hover {
   outline: none;
   box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .icon {
   position: absolute;
   left: .5rem;
   fill: #008ECC;
   width: 25px;
  }`;