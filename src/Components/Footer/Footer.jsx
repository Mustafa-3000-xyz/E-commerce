import Style from "./index.module.css";
// ======================================================= //
export default function Footer() {
    return <footer className="my-bg-primary p-4 pt-5 text-light d-flex justify-content-center flex-wrap gap-4 position-relative">
        <div className={Style.about_fox_shop}>
            <h3 className="fs-1">FoxShop</h3>

            <div className=" mt-3">
                <p className=" m-0 mb-1 fw-medium">Social media</p>
                <ul>
                    <li>
                        <a className="ms-1 text-white text-decoration-none" href="https://t.me/MyFox20" target="_blank">
                            <i className="fa-brands fa-telegram fs-4 "></i> <span className=" text-decoration-underline">Telegram</span>
                        </a>
                    </li>

                    <li className=" mt-2">
                        <a className="ms-1 text-white text-decoration-none" href="https://github.com/Mustafa-3000-xyz" target="_blank">
                            <i className="fa-brands fa-github fs-4"></i> <span className=" text-decoration-underline">GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className=" mt-3">
                <p className=" m-0 mb-1 fw-medium">Download App</p>
                <div className={Style.img_box}>
                    <img className="cursor-pointer" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=ar" alt="" />
                    <img className="cursor-pointer" src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg" alt="" />
                </div>
            </div>
        </div>

        <div className=" d-flex gap-4 flex-wrap">
            <div>
                <h3 className=" border-bottom border-3 py-2">Most Popular Categories</h3>
                <ul>
                    <li>Cars</li>
                    <li>Hello 2</li>
                    <li>Hello 3</li>
                    <li>Hello 4</li>
                    <li>Hello 5</li>
                    <li>Hello 7</li>
                    <li>Hello 8</li>
                    <li>Hello 9</li>
                </ul>
            </div>

            <div>
                <h3 className=" border-bottom border-3 py-2">Custom Services</h3>
                <ul>
                    <li>About</li>
                    <li>Terms & Conditions</li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                    <li>E-wast Policy</li>
                </ul>
            </div>
        </div>
    </footer>
}