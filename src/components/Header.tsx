import { logoLight } from "../assets"
import { headerAccess } from "../constants"

const Header = () => {

    return (
        <header className={`container mx-auto py-8 md:py-10 px-6 md:px-8 | | flex justify-between items-center text-neutral-white | `}>
            <a href="#">
                <img 
                    src={logoLight} 
                    alt="WorkIt Logo Image" 
                    className={` |  |  | shutter-in-top`}
                />
            </a>

            <a 
                href="#"
                className={`pb-1 | text-[1.1rem] hover:text-primary-eucaplyptus font-manrope font-semibold | border-b-[3px] border-b-primary-eucaplyptus | transition-colors shutter-in-top`}
            >
                {headerAccess}
            </a>
        </header>
    )

}

export default Header