import { atom } from "recoil";
// ======================================================= //
let Atom_Using_This_Account = atom({
    key: "Atom_Using_This_Account",
    default: JSON.parse(localStorage.getItem("usingThisAccount")) || null
})

export default Atom_Using_This_Account;

