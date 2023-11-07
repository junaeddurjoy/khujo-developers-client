const Banner = () => {
    return (
        <div>
            {/* banner */}
            {/* <div className="carousel w-[400px] md:w-[600px] lg:w-[1050px] ml-3 md:ml-20 lg:ml-56 h-[200px] md:h-[300px] lg:h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.optimalvirtualemployee.com/wp-content/uploads/2022/12/Web-Developer-skill.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://w0.peakpx.com/wallpaper/59/567/HD-wallpaper-web-designing-training-in-pune-web-design-web-design-training-in-pune-website-design-training-web-development-course-in-pune-web-development-training-in-india-website-design-training-in-india.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn.sanity.io/images/tlr8oxjg/production/5c3120359be5c4f225cd7b817811217041b759ab-1192x668.png?w=3840&q=80&fit=clip&auto=format" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
            <div className="hero  w-[400px] md:w-[600px] lg:w-[1050px] ml-3 md:ml-20 lg:ml-56 h-[200px] md:h-[300px] lg:h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/3snKzbJ/1699333383633.png)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content pt-12 md:pt-20 lg:pt-0 pl-56 md:pl-80  lg:pl-[550px]">
                    <div className="w-44 md:w-48 lg:w-96 text-black">
                        <h1 className="lg:mb-5 md:text-2xl lg:text-5xl font-bold">Find your dream job with <span className="text-green-600">KHUJO</span>!</h1>
                        <p className="mb-5 text-xs lg:text-lg">Start your journey towards professional happiness today with KHUJO!</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;