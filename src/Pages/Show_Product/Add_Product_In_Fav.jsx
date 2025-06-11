

export default function Add_Product_In_Fav({checkIsLogIn}) {
    return <button disabled={checkIsLogIn == true ? false : true} className=" border-0 p-2 w-25 px-4 fw-medium fs-4 rounded-2">
        Add To Favourite
    </button>
}
