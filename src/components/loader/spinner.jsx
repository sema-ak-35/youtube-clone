import { FaSpinner } from "react-icons/fa"

const Spinner=({designs})=>{
    return (
        <div className={`${designs} w-full grid place-items-cente `}>
            <FaSpinner  className="animate-spin"/>
        </div>
    )
}
export default Spinner;