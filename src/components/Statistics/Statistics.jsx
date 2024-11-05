import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer} from "recharts";

const Statistics = () => {

    const gadgetdata = [
        { name: "Apple iPhone 14", price: 799, rating: 4.8 },
        { name: "Samsung Galaxy S23", price: 999, rating: 4.6 },
        { name: "Google Pixel 7", price: 699, rating: 4.7 },
        { name: "OnePlus 11", price: 749, rating: 4.5 },
        { name: "Xiaomi 13 Pro", price: 899, rating: 4.4 },
        { name: "Sony Xperia 5 IV", price: 999, rating: 4.3 },
        { name: "Apple Watch Series 9", price: 399, rating: 4.7 },
        { name: "Samsung Galaxy Watch 6", price: 349, rating: 4.5 },
        { name: "Garmin Forerunner 265", price: 449, rating: 4.6 },
        { name: "Apple MacBook Air M2", price: 1199, rating: 4.9 },
        { name: "Dell XPS 13", price: 1299, rating: 4.4 },
        { name: "Lenovo Yoga 9i", price: 1499, rating: 4.8 },
      ];

    return (
        <>

            <div className="text-center bg-[#9538E2] text-white pb-6 pt-6">
                <h2 className="font-bold text-2xl">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

             <div>
                <h2 className="font-bold text-2xl px-28 mt-5">Statistics</h2>
                <div className="px-20 mt-5">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={gadgetdata}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#9538E2" />
                        <Bar dataKey="rating" fill="#FF0000" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>
        </>
    );
};

export default Statistics;