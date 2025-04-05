export default function Channel(){
    let channelimg=["https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-hindirevised-1734374133792.png","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/mtv-1727006354793.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-kannada-1727002458804.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/nick-1727006404112.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/peacock-hub-1727008274306.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/hbo-1732452145408.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-marathi-1727006494654.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-bangla-1727006525266.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-gujarati---1727007509417.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-infinity-1727257439757.jpg"]
    return(
        <div className="channellist">
        <div className="eachclass">
        {channelimg.map((img)=>{
            return(
                <div>
                    <img src={img} className="channel"></img>
                </div>

            )
        })}
        </div>
        </div>
    )
}