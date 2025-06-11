import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Atom_Islogin from "../../Atoms/Atom_Islogin";
import Atom_Using_This_Account from "../../Atoms/Atom_Using_This_Account";

import Swal from 'sweetalert2'
// ======================================================= //
export default function Login_Signup() {
    let [atomIsLogin, setAtomIsLogin] = useRecoilState(Atom_Islogin);
    let setAtomUsingThisAccount = useRecoilState(Atom_Using_This_Account)[1];

    function handle_Logout(){
        Swal.fire({
            title: "Are you sure you want to log out ?!",
            showCancelButton: true,
            icon: "warning",
            confirmButtonColor: "red"
        }).then(function(data){
            if (data.isConfirmed == true) {
                setAtomUsingThisAccount(null);
                setAtomIsLogin(null);
            }
        })
    }

    return <>
        {
            atomIsLogin == null ? (

                <Link to="/log_in">
                    <button onClick={() => document.body.style.overflow = "auto"} className="bg-transparent border-0 p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>
                        <span className="my-text-in-web fw-medium">Sign Up / Log In</span>
                    </button>
                </Link>
            ) : <button onClick={handle_Logout} className="bg-transparent border-0 p-0">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                    <path d="m9,12c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm7,5.5v4c0,1.379-1.121,2.5-2.5,2.5H2.5c-1.378,0-2.5-1.121-2.5-2.5V5.321C0,3.184,1.521,1.327,3.617.908L7.813.069c1.031-.204,2.091.059,2.906.726.406.333.725.745.944,1.205h.837c1.93,0,3.5,1.57,3.5,3.5v6c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-6c0-1.379-1.121-2.5-2.5-2.5h-.555c.024.166.055.33.055.501v19.499h1.5c.827,0,1.5-.673,1.5-1.5v-4c0-.276.224-.5.5-.5s.5.224.5.5ZM11,3.501c0-.752-.333-1.456-.915-1.933-.452-.371-1.01-.567-1.582-.567-.164,0-.33.016-.494.049l-4.196.839c-1.63.326-2.813,1.77-2.813,3.433v16.179c0,.827.673,1.5,1.5,1.5h8.5V3.501Zm13,10.999c0-.5-.277-1.154-.677-1.528l-2.496-2.337c-.201-.188-.518-.179-.707.023-.188.201-.178.519.023.707l2.496,2.337c.093.087.158.191.214.298h-8.354c-.276,0-.5.224-.5.5s.224.5.5.5h8.325c-.052.088-.101.179-.179.253l-2.506,2.385c-.2.19-.208.507-.018.707.099.104.23.155.362.155.124,0,.248-.046.345-.138l2.506-2.385c.372-.354.664-.978.664-1.478Z" />
                </svg>
                <span className="my-text-in-web fw-medium">Log Out</span>
            </button>
        }
    </>
}