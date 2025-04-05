import { useState } from "react";

export default function Banner() {
    let banner = {
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1714876334737.jpg": "https://www.jiocinema.com/movies/airlift/3966490",
"https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/bose-1674103896987.jpg": "https://www.jiocinema.com/tv-shows/bose-dead-alive/3498117",
"https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1719221975344.jpg": "https://www.jiocinema.com/movies/mangal-pandey-the-rising/3963037",
"https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/veer-shivaji-3x4-1674589413381.jpg": "https://www.jiocinema.com/tv-shows/veer-shivaji/3499538",
"https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/dharohar-bharat-ki-punarutthaan-ki-kahani-3x4-1709636159797.jpg": "https://www.jiocinema.com/tv-shows/dharohar-bharat-ki-punarutthaan-ki-kahani/3724731",
"https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1715028200025.jpg": "https://www.jiocinema.com/movies/madras-cafe/3962913",
"https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/code-m--3x4-1707120874685.jpg": "https://www.jiocinema.com/tv-shows/code-m/3500254",
"https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/chakravartin-ashoka-samrat-ivy-3x4-1674377348839.jpg": "https://www.jiocinema.com/tv-shows/chakravartin-ashoka-samrat/3499804",
"https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1726062717157.jpg": "https://www.jiocinema.com/movies/indian-soldier-never-on-holiday/3501442",
"https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/heyram3x4-1706174188106.jpg": "https://www.jiocinema.com/movies/hey-ram/3501919",
"https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/crackdown-s2-3x4-1707120324383.jpg": "https://www.jiocinema.com/tv-shows/crackdown/3500235",
"https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1720794338856.jpg": "https://www.jiocinema.com/movies/kohram/3995304",
"https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1720794084762.jpg": "https://www.jiocinema.com/movies/hindustan-ki-kasam/3995333",
"https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4bandon-1738130011022.jpg": "https://www.jiocinema.com/tv-shows/bandon-mein-tha-dum/3500245"
};

    let [bannerIndex, setBannerIndex] = useState(0);
    function moveBack(){
        if (bannerIndex==0)
            {}
        else
            {setBannerIndex(prevIndex => prevIndex + 300)}
    }
    function moveForward(){
        if (bannerIndex<-1500){}
        else
        {setBannerIndex(prevIndex => prevIndex - 300)}
    }
    return (
        <div className="banner-container">
            <div className="banner-bg">
                <img className="banner-image" src="https://v3img.voot.com//v3Storage/assets/safe-area--tv_-web-1737465367199.png" alt="Banner" />
                </div>
                <div className="banner-text">
                    <h1 className="banner-title">Nation First!</h1>
                    <p className="banner-subtitle">Experience patriotism with our top picks of movies & shows!</p>
                </div>
            <div className="banner-carousel">
                <div className="carousel-track" style={{ transform: `translateX(${bannerIndex}px)` }}>
                    {Object.entries(banner).map(([image, link]) => (
                        <a href={link} key={link} className="carousel-item">
                            <img src={image} alt="Movie Poster" className="carousel-image" />
                        </a>
                    ))}
                </div>
            </div>
            
            <div className="rightbtn" onClick={moveForward} style={{top: "51.8%", right:"0px"}}>
            <div className="flex">
                <img src="right-arrow.png" height={"50px"} width="50px" />
            </div>
            </div>
            <div className="leftbtn" id="leftbtn" onClick={moveBack} style={{top :"51.8%", left:"40px"}}>
            <div className="flex">
                <img src="left-arrow.png" height="50px" width="50px"/>
            </div>
            </div>
        </div>
    );
}
