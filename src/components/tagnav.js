export default function Tagsnav(){
let tagsarray=["For You","Premium","Laughter Chefs","Cricket","MTV Roadies XX","FREE Movies","Bigg Boss","News","BBK","Kids & Family","AUS vs IND","FREE Anime","Studios","ISL","FREE ShowsTATA IPL"]
return(
    <div className="tags">
            {tagsarray.map((singletag)=>{
                return(
                    <p className="stag">{singletag}</p>)
            })}
    </div>

    )
}