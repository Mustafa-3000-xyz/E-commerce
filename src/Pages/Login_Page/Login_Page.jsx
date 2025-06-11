import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Back_Btn from "../../Components/Back_Btn/Back_Btn";

import Atom_Users from "../../Atoms/Atom_Users";
import Atom_Islogin from "../../Atoms/Atom_Islogin";
import Atom_Using_This_Account from "../../Atoms/Atom_Using_This_Account";
// ======================================================= //
export default function Login_Page() {
  let [personData, setPersonData] = useState({
    email: "",
    password: ""
  });

  let setUsingThisAccount = useRecoilState(Atom_Using_This_Account)[1];
  let setIsLogin = useRecoilState(Atom_Islogin)[1];
  let atomUsers = useRecoilState(Atom_Users)[0];
  let [isSubmit, setIsSubmit] = useState(false);
  let [takeMes, setTakeMes] = useState("");
  let navigate = useNavigate();

  function collect_Data(e) {
    let obj = {
      ...personData
    }

    let targetValue = e.target.value;
    let targetName = e.target.getAttribute("name");
    obj[targetName] = targetValue;

    setPersonData(obj);
  }

  function isAccountHere() {
    let check = false;

    if (atomUsers.length > 0) {
      for (let i = 0; i < atomUsers.length; i++) {
        if (atomUsers[i].email == personData.email && atomUsers[i].password == personData.password) {
          setIsLogin("done");
          navigate("/");
          check = true;
          setUsingThisAccount(atomUsers[i]);
        }
      }
    } else {
      return "Your accont not here";
    }

    if (check == false) {
      return "Your email or password is incorrect";
    }
  }

  function handle_submit() {
    if (personData.email != "" && personData.password != "") {
      setIsSubmit(true);

      setTimeout(function () {
        let result = isAccountHere();
        setTakeMes(result);

        setPersonData({
          email: "",
          password: ""
        });

        setIsSubmit(false);
      }, 1000);
    }
  }

  return <section className='d-flex flex-column justify-content-center align-items-center h-vh position-relative '>
    <h1 className='mb-5'>LogIn to FoxShop</h1>

    {
      takeMes != "" ?
        <div className="alert alert-danger w-75 text-center" role="alert">
          {takeMes}
        </div>
        : ""
    }

    <StyledWrapper>
      <form className='d-flex flex-column align-items-center' onSubmit={(e) => e.preventDefault()}>
        <input value={personData.email} onChange={collect_Data} className="input w-75 mb-2" type="text" name="email" placeholder="Email address" />
        <input value={personData.password} onChange={collect_Data} className="input w-75 mb-2" type="password" name="password" placeholder="Password" />

        <button disabled= {isSubmit} onClick={handle_submit} className='w-50 my-3'> 
          {isSubmit == true ? <span className="loader"></span> : "Check" }  
        </button>
        
        <p>Don't Have an account? <Link className=' my-text-in-web' to="/sign_up">SignUp</Link> </p>
      </form>
    </StyledWrapper>

    <Back_Btn path="/"/>
  </section>
}

const StyledWrapper = styled.div`
  width:100%;

  button {
    --bg: #008ECC;
    --text-color: #fff;
    position: relative;
    width: 150px;
    border: none;
    background: var(--bg);
    color: var(--text-color);
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #f5f5f5 0px 7px 2px, #000 0px 8px 5px;
  }

  button:hover {
    opacity: 1;
  }

  button:active {
    top: 4px;
    box-shadow:#f5f5f5 0px 3px 2px,#000 0px 3px 5px;
  }

  .input {
    padding: 0.875rem;
    font-size: 1rem;
    border: 1.5px solid #000;
    border-radius: 0.5rem;
    box-shadow: 2.5px 3px 0 #008ECC;
    outline: none;
    transition: ease 0.25s;
  }

  .input:focus {
    box-shadow: 5.5px 7px 0 #008ECC;
}`;