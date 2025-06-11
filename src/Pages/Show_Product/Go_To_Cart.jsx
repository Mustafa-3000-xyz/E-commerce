import { Link } from "react-router-dom";

export default function Go_To_Cart() {
    return <Link to="/cart">
        <button className=" border-0 p-2 w-25 px-4 fw-medium fs-4 rounded-2">
            Go to cart
        </button>
    </Link>
}