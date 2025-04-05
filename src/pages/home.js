import Channel from "../components/channel";
import Header from "../components/header";
import Tagsnav from "../components/tagnav";
import Row1 from "../components/row1";
import Rows from "../components/rows";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Carousal from "../components/carousal";
import { useState,useEffect } from "react";
export default function Home(){
    let languages=["Hindi","Kannada","Bangla","Marathi","English","Gujarati","Tamil"];
    let arr1={    "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1738652124883.jpg": "https://www.jiocinema.com/tv-shows/ram-bhavan/4094372",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1739115144741.jpg": "https://www.jiocinema.com/tv-shows/laughter-chefs-unlimited-entertainment/3970000",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1739098139910.jpg": "https://www.jiocinema.com/tv-shows/mtv-roadies/3498977",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738566983882.jpg": "https://www.jiocinema.com/tv-shows/bleach-thousand-year-blood-war/4031437",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738923784216.jpg": "https://www.jiocinema.com/tv-shows/doree/3847641",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737221180383.jpg": "https://www.jiocinema.com/tv-shows/mannat-har-khushi-paane-ki/4073044",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738821861243.jpg": "https://www.jiocinema.com/tv-shows/apollena/4046851",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737142166937.jpg": "https://www.jiocinema.com/tv-shows/mangal-lakshmi/3910878",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738923151066.jpg": "https://www.jiocinema.com/tv-shows/suman-indori/4011339",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737387000326.jpg": "https://www.jiocinema.com/tv-shows/parineetii/3500071",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-kwaaa-1738567865453.jpg": "https://www.jiocinema.com/tv-shows/komedy-with-akki/3984116",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4_clean-1738568016763.jpg": "https://www.jiocinema.com/tv-shows/royal-enfield-hunter-mtv-hustle-hood-podcast/4058918",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-sunil-1733726396171.jpg": "https://www.jiocinema.com/tv-shows/figuring-out-with-raj-shamani/4021687",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737134781757.jpg": "https://www.jiocinema.com/tv-shows/shiv-shakti/3763715",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738567713276.jpg": "https://www.jiocinema.com/tv-shows/ani-lyst/4012346",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1734434354998.jpg": "https://www.jiocinema.com/tv-shows/megha-barsenge/4001015"
    }
    let arr2={ "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/sanam-teri-kasam-3x4-1713981006727.jpg": "https://www.jiocinema.com/movies/sanam-teri-kasam/3492009",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1729190666919.jpg": "https://www.jiocinema.com/movies/double-ismart/4035343",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1724140181377.jpg": "https://www.jiocinema.com/movies/bhediya/3754021",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/jabwemet3x4-1716734430344.jpg": "https://www.jiocinema.com/movies/jab-we-met/3980148",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4_rathnaam_v3-1728291085669.jpg": "https://www.jiocinema.com/movies/rathnam/4025861",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/de-dana-dan-3x4-1671601858820.jpg": "https://www.jiocinema.com/movies/de-dana-dan/3489376",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1729336689771.jpg": "https://www.jiocinema.com/movies/aranmanai-4/4028266",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1726921755606.jpg": "https://www.jiocinema.com/movies/spider-man-3/4023707",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/gow23x4-1718034670334.jpg": "https://www.jiocinema.com/movies/gangs-of-wasseypur-2/3983815",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1726053283513.jpg": "https://www.jiocinema.com/movies/train-to-busan/3994860",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/hanuman-3x4-1726651696024.jpg": "https://www.jiocinema.com/movies/hanuman/3926455",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1734000503549.jpg": "https://www.jiocinema.com/movies/venom/4030350",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1707999938895.jpg": "https://www.jiocinema.com/movies/2012/3879088",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1727440290785.jpg": "https://www.jiocinema.com/movies/the-family-star/3989688",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1728737226700.jpg": "https://www.jiocinema.com/movies/mangalavaar/4036394",
        "https://v3img.voot.com/resizeMedium,w_256,h_341/v3Storage/assets/3x4-1720264662953.jpg": "https://www.jiocinema.com/movies/the-karate-kid/3993338"}
    let arr3={  "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/isl_m-127_mcfc_vs_fcg_highlights_vertical_3x4-1739381850398.jpg": "https://www.jiocinema.com/sports/football/mumbai-city-fc-vs-fc-goa-highlights/4111092",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_full_highlights_vertical_3x4-1739369862557.jpg": "https://www.jiocinema.com/sports/cricket/haryana-vs-mumbai-full-match-highlights/4111007",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/isl_all_goals_vertical_3x4-1739382126111.jpg": "https://www.jiocinema.com/sports/football/mumbai-city-fc-vs-fc-goa-all-goals/4111089",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_jk_vs_kerala_full_highlights_vertical_3x4-1739369769194.jpg": "https://www.jiocinema.com/sports/cricket/jammu-and-kashmir-vs-kerala-full-match-highlights/4111008",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_full_highlights_vertical_3x4-1739370106369.jpg": "https://www.jiocinema.com/sports/cricket/vidarbha-vs-tamil-nadu-full-match-highlights/4111006",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/week_19_isl_match_of_the_week_vertical_3x4-1739278551843.jpg": "https://www.jiocinema.com/sports/football/match-of-the-week-21-ft-jamie-maclaren/4110409",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_full_highlights_vertical_3x4-1739370203086.jpg": "https://www.jiocinema.com/sports/cricket/saurashtra-vs-gujarat-full-match-highlights/4111005",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/week_19_isl_performer_of_the_week_vertical_3x4-1739278307830.jpg": "https://www.jiocinema.com/sports/football/performer-of-the-week-21-ft-alberto-noguera/4110408",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_rahane_top_knocks_vertical_3x4-1739257311846.jpg": "https://www.jiocinema.com/sports/cricket/mumbai-vs-haryana-ajinkya-rahane-s-108-vs-haryana/4110043",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/isl_highlights_m126_ofc_vs_pfc_vertical_3x4_9-2-2025-1739200102016.jpg": "https://www.jiocinema.com/sports/football/odisha-fc-vs-punjab-fc-highlights/4109809",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_sai_kishore_best_spells_vertical_3x4-1739269289743.jpg": "https://www.jiocinema.com/sports/cricket/vidarbha-vs-tamil-nadu-sai-kishore-s-5-78-vs-vidarbha/4110299",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/isl_m123_hfc_vs_msc_highlights_vertical_3x4-1739018767799.jpg": "https://www.jiocinema.com/sports/football/hyderabad-fc-vs-mohammedan-sc-highlights/4108496",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/isl_m124_ebfc_vs_cfc_highlights_vertical_3x4-1739028358209.jpg": "https://www.jiocinema.com/sports/football/east-bengal-fc-vs-chennaiyin-fc-highlights/4108634",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_dogra_top_knocks_vertical_3x4-1739266593325.jpg": "https://www.jiocinema.com/sports/cricket/jammu-and-kashmir-vs-kerala-paras-dogra-s-132-vs-kerala/4110301",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_rathod_top_knocks_vertical_3x4-1739266753181.jpg": "https://www.jiocinema.com/sports/cricket/vidarbha-vs-tamil-nadu-yash-rathod-s-112-vs-tamil-nadu/4110300",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_surya_top_knocks_vertical_3x4-1739186194335.jpg": "https://www.jiocinema.com/sports/cricket/haryana-vs-mumbai-suryakumar-yadav-s-70-vs-haryana/4109638",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/isl_highlights_vertical_3x4-1738859196546.jpg": "https://www.jiocinema.com/sports/football/fc-goa-vs-odisha-fc-highlights/4107639",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/ranji_cup_karun_top_knock_vertical_3x4-1739091733437.jpg": "https://www.jiocinema.com/sports/cricket/vidarbha-vs-tamil-nadu-karun-nair-s-122-vs-tamil-nadu/4108862"
    }   

    
    return(
    <div>
        <Header/>
        <Tagsnav/>
        <Carousal/>
        <Channel/>
        <Row1/>
        <p className="fresh">Fresh Episodes 🆕</p>
        <div className="languagediv">
            {
                languages.map((lang)=>{
                    return(
                        <p className="langs">{lang}</p>
                    )
                })
            }
        </div>
        <Rows urlarr={arr1}  hprop={1097} />
        <p className="fresh">Must Watch Movies</p>
        <Rows urlarr={arr2} hprop={1445}/>
        <Banner/> 
        <p className="sports">Top Sports Picks</p>
        <Rows urlarr={arr3} hprop={2372} />
        <Footer/>
    </div>
)
}