import { useEffect, useState } from "react"

export default function Row1(){
    let imagesDict = {
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1736860115169.jpg": "https://www.jiocinema.com/tv-shows/dune-prophecy/3975296",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-cta-1739270331222.jpg": "https://www.jiocinema.com/videos/kohli-ayy-kohli/4111012",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1737221164744.jpg": "https://www.jiocinema.com/tv-shows/mannat-har-khushi-paane-ki/4073044",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1white-1737525174094.jpg": "https://www.jiocinema.com/tv-shows/the-white-lotus/3739481",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/strangedarling-1738130004275.jpg":"https://www.jiocinema.com/movies/strange-darling/4101115",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1727440268287.jpg": "https://www.jiocinema.com/movies/the-family-star/3989688",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1738319581643.jpg": "https://www.jiocinema.com/tv-shows/nykaa-wali-shaadi/4103670",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1736086426642.jpg": "https://www.jiocinema.com/tv-shows/doctors/4074685",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1738566964224.jpg": "https://www.jiocinema.com/tv-shows/bleach-thousand-year-blood-war/4031437",     
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-abominable-1732272501148.jpg":"https://www.jiocinema.com/movies/abominable/4033350",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/watchnowninjahattor1_1-1714635098346.jpg":"https://www.jiocinema.com/tv-shows/ninja-hattori-new/3961940",
        "https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1729190616906.jpg": "https://www.jiocinema.com/movies/double-ismart/4035343"
    };
        let [index,setIndex]=useState(0)
        let a=window.innerWidth<430 ? -3300 : -2400
        
    function movenext(){
    if(index>(a))
    {setIndex(prevIndex=> prevIndex- 300)}
    else
    {}
    }
    function moveback(){
    if(index==0){
    }
    else
    {setIndex(prevIndex=> prevIndex+ 300)          }
    }

    console.log(index)
    return(
    <div>
    <p className="hot">Hot Right Now 🔥</p>
    <div className="plex-wrapper">
     <div className="plex" style={{transform: `translateX(${index}px)`,  transition: "transform 0.5s ease "}}>
        {Object.entries(imagesDict).map(([url,link])=>{
            return(
                <a href={link}><img src={url} height="300px" width="300px"/></a>
            )
        })}
        </div>
        <div className="rightbutton" onClick={movenext}>
        <div className="flex">
            <img src="right-arrow.png" className="right" height="50px" width="50px"/>
        </div>
        </div>
        <div className="leftbutton" id="leftbtn" onClick={moveback}>
        <div className="flex">
            <img src="left-arrow.png"  className="left" height="50px" width="50px"/>
        </div>
        </div>
        </div>
     </div>
    )

}