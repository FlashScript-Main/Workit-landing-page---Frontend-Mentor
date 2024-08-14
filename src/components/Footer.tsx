import { logoDark } from "../assets"
import { footerIcons } from "../constants"

const Footer = () => {

    return (
        <footer className={`py-16 md:pt-20 lg:pt-28 xl:pt-36 |  | flex flex-col justify-center items-center gap-12 | `}>
            <a href="#">
                <img 
                    src={logoDark} 
                    alt="WorkIt Logo Image" 
                    className={`w-[6.5rem] md:w-[7rem] |  |  | `}
                />
            </a>

            <ul className={` |  | flex justify-center items-center gap-8 | `}>
                {footerIcons.map((icon) => (
                    <li key={icon.id}>
                        <a href="#">
                            <img
                                src={icon.icon} 
                                alt={icon.alt}
                                className={` | hover:invert-0 hover:sepia-[72%] hover:saturate-[2668%] hover:hue-rotate-[262deg] hover:brightness-[6%] hover:contrast-[108%] |  | transition-colors`}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )

}

export default Footer