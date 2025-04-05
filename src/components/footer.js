export default function Footer(){
    return(
        <div className="mainfooter">
            <div className="footera">
                <div className="haha">
                    <table className="jiocinemasupport">
                        <tr>
                            <th>JioCinema</th>
                            <th>Support</th>
                        </tr>
                        <tr>
                            <td><a href="https://www.jiocinema.com/">For You</a></td>
                            <td><a href="https://help.jiocinema.com/?uid=c00c5952-3823-8d44-61e7-f74e28c6d667&profilename=Update_Your_Name_1522">Help Center</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.jiocinema.com/sports">Sports</a></td>
                            <td><a href="https://help.jiocinema.com/articles/terms-and-conditions/terms-and-conditions/641d382892cd636d4c10983d?uid=c00c5952-3823-8d44-61e7-f74e28c6d667&profilename=Update_Your_Name_1522">Terms OF Use</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.jiocinema.com/movies">Movies</a></td>
                            <td><a href="https://help.jiocinema.com/articles/terms-and-conditions/privacy-policy/641d3829d903444a7aef49b1?uid=c00c5952-3823-8d44-61e7-f74e28c6d667&profilename=Update_Your_Name_1522">Privacy Policy</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.jiocinema.com/tv-shows">TV Shows</a></td>
                            <td><a href="https://help.jiocinema.com/articles/terms-and-conditions/content-complaints/641d382892cd636d4c10983e?uid=c00c5952-3823-8d44-61e7-f74e28c6d667&profilename=Update_Your_Name_1522">Content Complaints</a></td>
                        </tr>
                    </table>
                </div>
                <hr className="mobhr"/>
                <div className="connect">
                    <p className="hoty">Connect With Us</p>
                    <table className="tablepos" cellSpacing="10px">
                        <tr > 
                            <td className="connecttd"><a href="https://www.facebook.com/JioCinema/"><img src="https://www.jiocinema.com/images/facebook.svg" className="connectimg" height="30px" width="30px"/></a></td>
                            <td className="connecttd"><a href="https://x.com/JioCinema"><img src="https://www.jiocinema.com/images/x.svg" className="connectimg" height="30px" width="30px"/></a></td>
                            <td className="connecttd"><a href="https://www.instagram.com/officialjiocinema/"><img src="https://www.jiocinema.com/images/instagram.svg" height="40px" width="40px" className="connectimg"/></a></td>
                            <td className="connecttd"><a href="https://www.youtube.com/channel/UC8To9CFsZzvPafxMLzS08iA"><img src="https://www.jiocinema.com/images/youtube.svg" height="40px" width="40px" className="connectimg"/></a></td>
                        </tr>
                    </table>
                </div>
                <div className="download">
                    <p className="down">Download the App</p>
                    <div className="cent">
                    <table className="dwn" cellSpacing="10px">
                        <tr>
                            <td><a href="https://play.google.com/store/apps/details?id=com.jio.media.ondemand&hl=en_IN&gl=US"><img src="https://www.jiocinema.com/images/googlePlay.svg"/></a></td>
                            <td><a href="https://apps.apple.com/in/app/jiocinema/id1067316596"><img src="https://www.jiocinema.com/images/appleStore.svg"/></a></td>
                        </tr>
                    </table>
                    </div>
                </div>
            
            </div>
            <div className="footerb">
            <hr className="hrspecs"/>
                <p style={{marginLeft:"25px", fontSize:"0.8rem"}}>Copyright © Star India Private Limited, 2024. All rights reserved.</p>
                <img src="https://www.jiocinema.com/images/payments/jio-logo.png" className="jiologo" height="50px" width="50px"/>
            </div>
        </div>
    )
}