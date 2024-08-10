import { logoLight } from "../assets"
import { headerAccess } from "../constants"

const Header = () => {

    return (
        <header className={`container mx-auto py-8 px-6 | | flex justify-between items-center text-neutral-white | `}>
            <a href="#">
                <img 
                    src={logoLight} 
                    alt="WorkIt Logo Image" 
                />
            </a>

            <a 
                href="#"
                className={`pb-1 | text-[1.1rem] hover:text-primary-eucaplyptus font-manrope font-semibold | border-b-[3px] border-b-primary-eucaplyptus | transition-colors`}
            >
                {headerAccess}
            </a>
        </header>
    )

}

export default Header