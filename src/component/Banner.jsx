

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/nbjWyFS/6.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-normal">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn bg-[#E3B577]">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="h-[300px]  bg-[#ECEAE3] ">
                <div className="flex justify-center items-center mx-auto gap-8">
                <div className="mt-0 ml-4 lg:mt-12 lg:ml-0">
                    <img src="https://i.ibb.co/jrfnyDX/1.png" alt="" />
                    <h3 className="text-2xl font-semibold">Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design<br/> & aroma of your coffee</p>
                </div>
                <div className="mt-0 lg:mt-12">
                    <img src="https://i.ibb.co/cyF9H8k/2.png" alt="" />
                    <h3 className="text-2xl font-semibold">High Quality</h3>
                    <p>We served the coffee to you maintaining<br/> the best quality</p>
                </div>
                <div className="mt-0 lg:mt-12">
                    <img src="https://i.ibb.co/zGPxGf4/3.png" alt="" />
                    <h3 className="text-2xl font-semibold">Pure Grades</h3>
                    <p>The coffee is made of the green coffee<br/> beans which you will love</p>
                </div>
                <div className="mt-0 lg:mt-12">
                    <img src="https://i.ibb.co/Sm6Kft9/4.png" alt="" />
                    <h3 className="text-2xl font-semibold">Proper Roasting</h3>
                    <p>Your coffee is brewed by first roasting<br/> the green coffee beans</p>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;