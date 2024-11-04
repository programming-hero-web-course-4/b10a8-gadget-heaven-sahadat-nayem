
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories);
    
    return (
        <div>
            <Banner></Banner>
            <div className="flex max-w-[1240px] mx-auto">
                <div className="w-1/2 lg:w-1/5">
                    <Categories categories={categories}></Categories>
                </div>
                <div className="w-4/5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;