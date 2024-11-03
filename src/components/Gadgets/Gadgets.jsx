import { useEffect, useState } from "react";


const Gatgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect( () =>{
        fetch('./gadgetsData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
            <p>{gadgets.length}</p>
        </div>
    );
};

export default Gatgets;