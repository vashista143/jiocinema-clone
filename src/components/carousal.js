import { useState } from "react"
export default function Carousal(){
        let carousalarr={"https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-tv-1725113115166.jpg": "https://www.jiocinema.com/tv-shows/durga/4010499",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-carousel-tv_50shades-1727778969348.jpg": "https://www.jiocinema.com/movies/fifty-shades-of-grey/3758785",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-tv-1739450592354.jpg": "https://www.jiocinema.com/tv-shows/laughter-chefs-unlimited-entertainment/3970000",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/tv-1726053299099.jpg": "https://www.jiocinema.com/movies/train-to-busan/3994860",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-tv-1736505139059.jpg": "https://www.jiocinema.com/movies/anushka-s-nishabdham/4092305",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-carousel-tv-1700056019718.png": "https://www.jiocinema.com/tv-shows/kaalkoot-telugu/3787651",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vijay_hazare_vidrbha_vs_maharashtra_highlights_clean_ctv-1737052942413.jpg": "https://www.jiocinema.com/sports/cricket/vidarbha-vs-maharashtra-highlights/4096007",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-tv-1728062358173.jpg": "https://www.jiocinema.com/tv-shows/khatron-ke-khiladi/3499776",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/isl_highlights_m125_bfc_vs_jfc_clean_ctv-1739119784901.jpg": "https://www.jiocinema.com/sports/football/bengaluru-fc-vs-jamshedpur-fc-highlights/4109119",
    "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-tvdi-1729190726033.jpg": "https://www.jiocinema.com/movies/double-ismart/4035343"}
    let [carindex,setCarindex]=useState(-175)
    let [imgindex,setImgindex]=useState(1)
    let clsname=`carousalimg${imgindex-2}`
    function moveback(){
        if (carindex==380)
            {}
        else
            {setCarindex(prevIndex => prevIndex + 555)
            setImgindex(prevIndex=>prevIndex-1)
            }
    }
    function movefor(){
        if (carindex<-4500){}
        else
        {setCarindex(prevIndex => prevIndex - 555)
        setImgindex(prevIndex=>prevIndex+1)
        }
    }
    console.log(clsname)
    return(
    <div className="carousalcontainer">
        <div className="carousal" style={{transform: `translateX(${carindex}px)`, transition: "transform 0.5s ease"}}>
            {Object.entries(carousalarr).map(([img,link]) => {
                return(
                    <div className={"carimg"}>
                        <a href={link}><img src={img} className="carousalimg" height="315" width="555"></img></a>
                    </div>
                )
            })}
        </div>
        <div className="carousalbtns">
            <div className="carousalleftbtn"  onClick={moveback} style={{top: "150px"}}>
                <img src="left-arrow.png" height="15px" width="15px"/>
            </div>
            <div className="carousalrightbtn" onClick={movefor} style={{top: "150px"}}>
                <img src="right-arrow.png" height={"15px"} width="15px" />
            </div>
        </div>
    </div>
    )
}