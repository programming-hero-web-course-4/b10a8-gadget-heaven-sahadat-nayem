import { useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const GadgetsDetail = () => {

    const {product_id} = useParams();
    const id = parseInt(product_id);
    
    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.product_id === id)
    
    const {product_title, product_image, specification, price, description, rating} = gadget

    return (
        <>

            <div className="text-center bg-[#9538E2] text-white lg:pb-64 pb-32 pt-6">
                <h2 className="font-bold text-2xl">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="hero max-w-[880px] bg-white mx-auto rounded-xl shadow-gray-400 shadow-xl relative lg:bottom-56 bottom-24">
            <div className="hero-content flex-col lg:flex-row">
                <img
                src={product_image}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{product_title}</h1>
                <p className="py-6 font-bold">Price: {price}</p>
                <span className="border-[2px] border-solid border-green-700 rounded-3xl px-3 py-2 bg-green-100 text-green-800 "> In Stock </span>
                <div className="mt-3">
                    <p>1: {specification.screen_size}</p>
                    <p>2: {specification.processor}</p>
                    <p>3: {specification.ram}</p>
                    <p>4: {specification.storage}</p>
                    <p>5: {specification.battery}</p>
                </div>
                <p className="mt-5">{description}</p>
                <p className="font-bold mt-3">Rating ⭐ </p>
                <div>
                <div className="rating gap-3 mt-3">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                    {rating}
                </div>
                </div>
                    <div>
                        <button className="btn bg-[#9538E2] text-white hover:text-black mt-3">Add To Card <FaShoppingCart /></button>
                        <button className="btn ml-3 rounded-full hover:bg-[#9538E2] hover:text-white"><FaHeart /></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default GadgetsDetail;