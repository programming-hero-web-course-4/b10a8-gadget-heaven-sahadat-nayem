import { useEffect, useState } from "react";
import { SlEqualizer } from "react-icons/sl";
import { getAllFavorites } from "../utils/localStroge";
import GadgetDashboard from "../GadgetDashboard/GadgetDashboard";

    const Dashboard = () => {
        const [gadgets, setGadgets] = useState([])
        useEffect(() =>{
            const favorites = getAllFavorites()
            setGadgets(favorites)
        }, [])


        

    return (
        <>
            <div className="text-center bg-[#9538E2] text-white pb-6 pt-6">
                <h2 className="font-bold text-2xl">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-3 justify-center mt-5">
                    <button className="btn bg-white text-[#9538E2] rounded-3xl px-10">Cart</button>
                    <button className="btn border-[2px] border-solid border-white text-white bg-[#9538E2] rounded-3xl px-6">Wishlist</button>
                </div>
            </div>
            <div className="flex justify-between mt-5 px-16">
                <h2 className="font-bold text-2xl">Cart</h2>
                <div className="flex gap-4">
                    <h3 className="font-bold text-2xl">Total cost:</h3>
                    <button className="btn border-[2px] border-solid border-[#9538E2] bg-white text-[#9538E2] rounded-3xl px-6">Sort by Price <SlEqualizer /></button>
                    <button className="btn text-white bg-[#9538E2] rounded-3xl px-10">Purchase</button>
                </div>
            </div>

            <div>
                {
                    gadgets.map(gadget =>(
                        <GadgetDashboard key={gadget.product_id} gadget={gadget}></GadgetDashboard>
                    ))
                }
            </div>
        </>
    );
};

export default Dashboard;