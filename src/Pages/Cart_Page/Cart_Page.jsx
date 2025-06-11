import { useRecoilState } from "recoil";
import Atom_Using_This_Account from "../../Atoms/Atom_Using_This_Account";
import Atom_Users from "../../Atoms/Atom_Users";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// ======================================================= //
export default function Cart_Page() {
    let [atomUsingThisAccount, setAtomUsingThisAccount] = useRecoilState(Atom_Using_This_Account);
    let [atomUsers, setAtomUsers] = useRecoilState(Atom_Users);

    let [itemsTotal, setItemsTotal] = useState(0);
    let [totalProductsPrice, setTotalProductsPrice] = useState(0);

    function increment(id) {
        let userCopy = { ...atomUsingThisAccount };

        let result = userCopy.userCart.map(function (ele) {
            if (ele.id == id) {
                return { ...ele, count: ele.count + 1 }
            }

            return ele;
        });
        userCopy.userCart = result;
        setAtomUsingThisAccount(userCopy);

        let arr = [...atomUsers];

        arr.forEach((element, i) => {
            if (element.email == userCopy.email) {
                arr[i] = userCopy;
                setAtomUsers(arr);
            }
        });
    }

    function decrement(id) {
        let userCopy = { ...atomUsingThisAccount };

        let result = userCopy.userCart.map(function (ele) {
            if (ele.id == id) {
                return { ...ele, count: ele.count > 1 ? ele.count - 1 : ele.count }
            }

            return ele;
        })
        userCopy.userCart = result;
        setAtomUsingThisAccount(userCopy);

        let arr = [...atomUsers];

        arr.forEach((element, i) => {
            if (element.email == userCopy.email) {
                arr[i] = userCopy;
                setAtomUsers(arr);
            }
        });
    }

    function remove(id) {
        let userCopy = { ...atomUsingThisAccount };

        let result = userCopy.userCart.filter(function (ele) {
            if (ele.id != id) {
                return { ...ele }
            }
        })
        userCopy.userCart = result;
        setAtomUsingThisAccount(userCopy);

        let arr = [...atomUsers];

        arr.forEach((element, i) => {
            if (element.email == userCopy.email) {
                arr[i] = userCopy;
                setAtomUsers(arr);
            }
        });
    }

    function items_Total() {
        let total = 0;

        atomUsingThisAccount.userCart.map(function (ele) {
            total += ele.count;
        })

        setItemsTotal(total)
    }

    function subtotal() {
        let total = 0;

        atomUsingThisAccount.userCart.map(function (ele) {
            total += ele.count * ele.price
        });

        setTotalProductsPrice(total);
    }

    useEffect(function () {
        items_Total();
        subtotal();
    }, [atomUsingThisAccount])


    useEffect(function () {
        document.body.style.backgroundColor = "#f3f4f8";
        return () => document.body.style.backgroundColor = "white";
    }, []);


    return <section className="px-2">
        <div className="position-sticky top-0 start-0 w-100">
            <div className="container text-black glass-effect p-3 d-flex justify-content-md-between justify-content-center align-items-center flex-wrap">
                <h3>Shopping Cart <span className="fs-5 fw-normal">items : {itemsTotal}</span></h3>
                <Link to="/">
                    <button className=" px-3 py-2  glass-effect border-1 border-black rounded-2">Continue Shopping</button>
                </Link>
            </div>
        </div>

        <div>
            {
                atomUsingThisAccount.userCart.length > 0 ?
                    atomUsingThisAccount.userCart.map(function (ele) {
                        return <div className="d-flex flex-column p-2 rounded-2 bg-white mb-2" key={ele.id}>
                            <Link to={`/show_product/${ele.id}`} className=" text-decoration-none text-black cursor-pointer">

                                <figure className="me-2 d-flex justify-content-center">
                                    <img style={{ width: "300px" }} src={ele.image} alt="" />
                                </figure>

                                <div className=" w-100 mt-1">
                                    <span className=" fw-medium">{ele.name}</span>

                                    <div>
                                        <ul>
                                            <li className=" fw-medium" style={{ color: "#7c87a8" }}>Price: {ele.price}$</li>
                                            <li className=" fw-medium" style={{ color: "#7c87a8" }}>Color: {ele.color}</li>
                                            <li className=" fw-medium" style={{ color: "#7c87a8" }}>Brand: {ele.brand}</li>
                                        </ul>
                                    </div>

                                    <span className=" fw-medium text-success ">In Stock</span>
                                </div>
                            </Link>

                            <div className=" d-flex align-items-center gap-3 mt-1">
                                <span>Qty : </span>
                                <div className=" d-flex gap-2 align-items-center">

                                    <button onClick={() => decrement(ele.id)} className="btn btn-outline-info">-</button>

                                    <span>{ele.count}</span>

                                    <button onClick={() => increment(ele.id)} className="btn btn-outline-info">+</button>
                                </div>

                                <button onClick={() => remove(ele.id)} className="ms-3 btn btn-outline-danger">
                                    <i className="fa-solid fa-trash"></i>  Remove
                                </button>
                            </div>
                        </div>
                    }) : <h1 className=" text-center">Not Found</h1>
            }
        </div>

        {
            atomUsingThisAccount.userCart.length > 0 ?
                <div className="p-3">
                    <div className=" container">
                        <h3 className=" text-center">Order Summary</h3>
                        <hr />
                        <ul>
                            <li className="fw-medium">Delivery : <span className="text-success">Free</span> </li>
                            <li className="fw-medium">The total : {totalProductsPrice}$ </li>
                        </ul>
                    </div>
                </div>
                : ""
        }
    </section>
}