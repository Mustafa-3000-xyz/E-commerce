import { atom } from "recoil";
// ======================================================= //
let Atom_Users = atom({
    key: "Atom_Users",
    default: JSON.parse(localStorage.getItem("users")) || []
})

export default Atom_Users;