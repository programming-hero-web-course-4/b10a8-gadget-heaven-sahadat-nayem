


const Banner = () => {
    return (
        <>
            {/* Banner part start */}

            <div className="hero min-h-screen bg-[#9538E2] rounded-xl max-w-[1240px] max-h-[694px] mx-auto">
                <div className="hero-content text-center">
                    <div>
                    <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className="py-6 text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-white text-[#9538E2] rounded-3xl px-6">Shop Now</button>
                    </div>
                </div>
            </div>

            {/* Banner part end */}

            <div>
                <img className="lg:max-w-[662px] mx-w-[331px] lg:max-h-[435px] max-h-[216px] mx-auto rounded-xl relative bottom-32 bg-[#ffffff4c] p-3" src="/public/assets/banner.jpg" alt="" />
            </div>
            <h2 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
        </>
    );
};

export default Banner;