import { useEffect, useState } from "react";
import { SlEqualizer } from "react-icons/sl";
import { getAllFavorites,removeFavorite } from "../utils/localStroge";
import GadgetDashboard from "../GadgetDashboard/GadgetDashboard";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

    const Dashboard = () => {
        const [gadgets, setGadgets] = useState([])
        const navigate = useNavigate();
        useEffect(() =>{
            const favorites = getAllFavorites()
            setGadgets(favorites)
        }, [])

        const handleRemove = (product_id) => {
            removeFavorite(product_id);
            const favorites = getAllFavorites();
            setGadgets(favorites);
          }

          const handleClose = () => {
            document.getElementById("my_modal_1").close();
            navigate("/");
          };

        

    return (
        <>
        <Helmet>
            <title>Dashbord</title>
        </Helmet>
            <div className="text-center bg-[#9538E2] text-white pb-6 pt-6">
                <h2 className="font-bold text-2xl">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-3 justify-center mt-5">
                    <button className="btn bg-white text-[#9538E2] rounded-3xl px-10">Cart</button>
                    <button className="btn border-[2px] border-solid border-white text-white bg-[#9538E2] rounded-3xl px-6">Wishlist</button>
                </div>
            </div>
            <div className="flex justify-between mt-5 lg:px-16 px-6">
                <h2 className="font-bold text-2xl">Cart</h2>
                <div className="flex gap-4">
                    <h3 className="font-bold text-2xl">Total cost:</h3>
                    <button className="btn border-[2px] border-solid border-[#9538E2] bg-white text-[#9538E2] rounded-3xl lg:px-6 px-3">Sort by Price <SlEqualizer /></button>
                    <button className="btn text-white bg-[#9538E2] rounded-3xl lg:px-10 px-5" onClick={()=>document.getElementById('my_modal_1').showModal()}>Purchase</button>
                </div>
            </div>


                <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center">
                    <div className="flex justify-center mb-4">
                        <div className="text-6xl text-green-400">
                            <MdVerified />
                        </div>
                    </div>
                    <h3 className="font-bold text-2xl">Payment Successfully</h3>
                    <p className="py-4">Thanks for purchasing</p>
                    <div className="modal-action justify-center">
                    <form method="dialog" className="max-w-72">
                        <button className="btn w-56 rounded-full" onClick={handleClose}>Close</button>
                    </form>
                    </div>
                </div>
                </dialog>

            <div>
                {
                    gadgets.map(gadget =>(
                        <GadgetDashboard key={gadget.product_id} handleRemove={handleRemove} gadget={gadget}></GadgetDashboard>
                    ))
                }
            </div>
        </>
    );
};

export default Dashboard;