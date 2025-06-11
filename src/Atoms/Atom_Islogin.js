import { atom } from "recoil";
// ======================================================= //
let Atom_Islogin = atom({
    key: "Atom_Islogin",
    default: JSON.parse(localStorage.getItem("isLogin"))
})

export default Atom_Islogin;