import { useRecoilState } from "recoil";
import Atom_Users from "../../Atoms/Atom_Users";
import Atom_Products from "../../Atoms/Atom_Products";

import Atom_Using_This_Account from "../../Atoms/Atom_Using_This_Account";
import { useParams } from "react-router-dom";
// ======================================================= //
export default function Add_To_Cart({ checkIsLogIn }) {
    let [atomUsingThisAccount, setAtomUsingThisAccount] = useRecoilState(Atom_Using_This_Account);
    let [atomUsers, setAtomUsers] = useRecoilState(Atom_Users);
    let atomProducts = useRecoilState(Atom_Products)[0];
    let { id } = useParams();


    function handle_Btn() {
        let product = atomProducts.find(ele => ele.id == id);
        let copyUser = { ...atomUsingThisAccount };
        let userCart = [...copyUser.userCart];
        let obj = {
            id: product.id,
            name: product.title,
            description: product.description,
            image: product.image,
            price: product.price,
            brand: product.brand,
            color: product.color,
            count: 1
        }

        userCart.push(obj);
        copyUser.userCart = userCart;
        setAtomUsingThisAccount(copyUser);

        let arrCopy = [...atomUsers];

        for (let i = 0; i < arrCopy.length; i++) {
            if (arrCopy[i].email == copyUser.email) {
                arrCopy[i] = copyUser;
                setAtomUsers(arrCopy);
            }
        }
    }



    return <button onClick={handle_Btn} disabled={checkIsLogIn == true ? false : true} className=" border-0 p-2 w-25 px-4 fw-medium fs-4 rounded-2">
        Add To Cart
    </button>
}