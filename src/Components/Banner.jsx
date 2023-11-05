const Banner = () => {
    return (
        <div>
            {/* banner */}
            <div className="carousel w-[400px] md:w-[600px] lg:w-[1050px] ml-3 md:ml-20 lg:ml-56 h-[200px] md:h-[300px] lg:h-[500px]">
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
            </div>
            <div className="text-center my-8">
                <h1 className="text-4xl lg:text-7xl font-semibold">Find your dream job with <span className="text-green-600">KHUJO</span>!</h1>
            </div>
        </div>
    );
};

export default Banner;