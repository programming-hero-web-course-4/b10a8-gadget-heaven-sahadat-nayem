import { Link } from "react-router-dom";


const Gadgets = ({object}) => {

    const { product_id, product_title, product_image, price} = object;

    return (
        <div className="card bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={product_image} alt="gadget" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{product_title}</h2>
                <p>Price:{price}</p>
                <Link to={`/gadgets/${product_id}`}>
                    <button className="btn rounded-2xl mx-auto w-40 hover:bg-[#9538E2] hover:text-white">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Gadgets;