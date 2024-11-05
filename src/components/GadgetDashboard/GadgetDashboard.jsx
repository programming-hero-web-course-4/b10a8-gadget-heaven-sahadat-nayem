

const GadgetDashboard = ({gadget}) => {

    const { product_id, product_title, product_image, price, description} = gadget;

    return (
        <div>
            <div className="card card-side max-w-[1280px] max-h-[188px] px-28">
                <figure>
                    <img
                    className="size-32"
                    src={product_image}
                    alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-bold">Price: {price}</p>
                </div>
             </div>
        </div>
    );
};

export default GadgetDashboard;