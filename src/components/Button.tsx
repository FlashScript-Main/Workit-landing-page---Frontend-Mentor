import { StringType } from "../types"

const Button = ({text}: {text: StringType}) => {

    return (
        <button className={`py-3 px-6 | text-base text-primary-dark-purple hover:text-primary-eucaplyptus font-manrope font-black bg-primary-eucaplyptus hover:bg-primary-dark-purple border-2 border-primary-eucaplyptus |  | transition-colors`}>
            {text}
        </button>
    )

}

export default Button