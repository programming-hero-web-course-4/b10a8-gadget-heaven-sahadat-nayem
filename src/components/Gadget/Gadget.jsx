import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadgets from "../Gadgets/Gadgets";


const Gadget = () => {

    const data = useLoaderData();
    const{category} = useParams();
    const[card, setCard] = useState([]);

    useEffect(() => {
        if(category){
            const filterCard =[...data].filter(
                device => device.category === category
            );
            setCard(filterCard);
        }
        else{
            setCard(data)
        };
    },[category,data]);


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    card.map((object => (
                        <Gadgets key={object} object = {object}></Gadgets>
                    )))
                }
            </div>
        </>
    );
};

export default Gadget;