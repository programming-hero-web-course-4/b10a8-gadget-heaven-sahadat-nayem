import { Link } from "react-router-dom";


const Categories = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-lifted tabs-lg gap-3 lg:gap-7 lg:bg-gray-200 max-w-52 rounded-lg lg:py-10 py-5">
           {categories.map(category =>( 
            <Link key={category.category} to={`/category/${category.category}`} className="btn lg:max-w-48 max-w-24 rounded-3xl hover:bg-[#9538E2] hover:text-white">{category.category}</Link>
            ))}
        </div>
    );
};

export default Categories;

