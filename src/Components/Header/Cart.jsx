import { useRecoilState } from 'recoil'
import Atom_Islogin from '../../Atoms/Atom_Islogin';
import { Link } from 'react-router-dom';
// ======================================================= //
export default function Cart() {
    let atomIslogin = useRecoilState(Atom_Islogin)[0];

    return <>
        <Link to="/cart">
            <button className="bg-transparent border-0 p-0 me-2" disabled={atomIslogin == null ? true : false}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M24,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836ZM20.164,13H5.419L4.478,5H21.607Z" /><circle cx="7" cy="22" r="2" /><circle cx="17" cy="22" r="2" /></g></svg>
                <span className=" my-text-in-web fw-medium">Cart</span>
            </button>
        </Link>
    </>
}
