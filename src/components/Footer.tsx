import { logoDark } from "../assets"
import { footerIcons } from "../constants"
import { useInView } from 'react-intersection-observer';

const Footer = () => {

    const { ref: workItLogoRef, inView: workItLogoVisiable } = useInView({triggerOnce: true});
    const { ref: footerIconsRef, inView: footerIconsVisiable } = useInView({triggerOnce: true});

    return (
        <footer className={`py-16 md:pt-20 lg:pt-28 xl:pt-36 |  | flex flex-col justify-center items-center gap-12 | `}>
            <a href="#">
                <img 
                    src={logoDark} 
                    alt="WorkIt Logo Image" 
                    ref={workItLogoRef}
                    className={`w-[6.5rem] md:w-[7rem] |  |  | ${workItLogoVisiable && "fadeInUp"}`}
                />
            </a>

            <ul className={` |  | flex justify-center items-center gap-8 | `}>
                {footerIcons.map((icon) => (
                    <li key={icon.id}>
                        <a href="#">
                            <img
                                src={icon.icon} 
                                alt={icon.alt}
                                ref={footerIconsRef}
                                className={` | hover:invert-0 hover:sepia-[72%] hover:saturate-[2668%] hover:hue-rotate-[262deg] hover:brightness-[6%] hover:contrast-[108%] |  | transition-colors ${footerIconsVisiable && `rubberBand`}`}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )

}

export default Footer