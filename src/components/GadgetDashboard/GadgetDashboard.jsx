import { IoIosRemoveCircleOutline } from "react-icons/io";

const GadgetDashboard = ({gadget, handleRemove}) => {

    const { product_id, product_title, product_image, price, description} = gadget;

    return (
        <div className="lg:px-28 mt-5">
            <div className="card card-side max-w-[1280px] lg:max-h-[188px] px-4 py-2 bg-gray-200 mb-5">
                <figure>
                    <img
                    className="lg:size-32 size-16 w-full h-full rounded-xl"
                    src={product_image}
                    alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-bold">Price: {price}</p>
                </div>

                <div className="text-red-600 text-2xl" onClick={() =>handleRemove(product_id)}>
                    <IoIosRemoveCircleOutline />
                </div>
             </div>
        </div>
    );
};

export default GadgetDashboard;