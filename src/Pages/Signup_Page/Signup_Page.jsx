import { useRef, useState } from "react";
import styled from 'styled-components';
import Back_Btn from "../../Components/Back_Btn/Back_Btn";
import { useRecoilState } from "recoil";
import Atom_Users from "../../Atoms/Atom_Users";
import { useNavigate } from "react-router-dom";

import Atom_Islogin from "../../Atoms/Atom_Islogin";
import Atom_Using_This_Account from "../../Atoms/Atom_Using_This_Account";
// ======================================================= //
export default function Signup_Page() {
  let [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    userCart: [],
    userFav: []
  });

  let [isSubmit, setIsSubmit] = useState(false);
  let [isAccountHere, setIsAccountHere] = useState("");
  let [atomUsers, setAtomUsers] = useRecoilState(Atom_Users);

  let setUsingThisAccount = useRecoilState(Atom_Using_This_Account)[1];
  let setIsLogin = useRecoilState(Atom_Islogin)[1];
  let navigate = useNavigate();

  function collect_Data(e) {
    let targetValue = e.target.value;
    let targetName = e.target.getAttribute("name");
    let obj = {
      ...userData
    }

    obj[targetName] = targetValue;
    setUserData(obj);
  }

  function send_Data() {
    let check = false;

    for (let i = 0; i < atomUsers.length; i++) {
      if (atomUsers[i].email == userData.email) {
        check = true;
      }
    }

    if (check == false) {
      let REGEX = /^[a-zA-Z0-9_-]+@(gmail|yahoo)\.com$/

      if (REGEX.test(userData.email)) {
        let arr = [...atomUsers];
        arr.push(userData);
        setAtomUsers(arr);
        setIsLogin("done");
        navigate("/");
        setUsingThisAccount(userData);
        
        setUserData({
          userName: "",
          email: "",
          password: "",
          userCart: [],
          userFav: []
        });
      } else {
        setUserData({
          ...userData,
          email: ""
        });
        return `
          This account's email is incorrect.
          these are special characters you can used :  
          -
          _  
        `
      }

    } else {
      setUserData({
        userName: "",
        email: "",
        password: "",
        userCart: [],
        userFav: []
      });
      return "This account is already here";
    }
  }

  function handle_submit() {
    if (userData.email != "" && userData.password != "" && userData.userName != "") {
      setIsSubmit(true);
      setTimeout(function () {
        let result = send_Data();
        setIsAccountHere(result);

        setIsSubmit(false);
      }, 1000)
    }
  }



  return <section className='d-flex flex-column justify-content-center align-items-center h-vh '>
    <h1 className='mb-5'>SignUp to FoxShop</h1>

    {
      isAccountHere != "" ?
        <div className="alert alert-danger w-75 text-center" role="alert">
          {isAccountHere}
        </div>
        : ""
    }

    <StyledWrapper>
      <form className='d-flex flex-column align-items-center' onSubmit={(e) => e.preventDefault()}>
        <input value={userData.userName} onChange={collect_Data} className="input w-75 mb-2" type="text" name="userName" placeholder="Your name" />
        <input value={userData.email} onChange={collect_Data} className="input w-75 mb-2" type="text" name="email" placeholder="Email address" />
        <input value={userData.password} onChange={collect_Data} className="input w-75 mb-2" type="password" name="password" placeholder="Password" />

        <button disabled={isSubmit} className='w-50 my-3' onClick={handle_submit}>
          {isSubmit == true ? <span className="loader"></span> : "Create account"}
        </button>
      </form>
    </StyledWrapper>

    <Back_Btn path="/log_in" />
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