import { useEffect, useState } from "react"

export default function Rows(props){
    let arr=props.urlarr || [];
    let [rowindex,setRowindex]=useState(0)
    function moveback(){
        if (rowindex==0)
            {}
        else
            {setRowindex(prevIndex => prevIndex + 300)}
    }
    function movefor(){
        if (rowindex<-1800){}
        else
        {setRowindex(prevIndex => prevIndex - 300)}
    }
    console.log(rowindex)
    // useEffect(()=>{document.current.querySelector(".rightbtn").style.top=props.hprop + "px";document.querySelector(".leftbtn").style.top=props.hprop + "px"; 
    // })
    // useEffect(()=>{
    //     if (rowindex==0)
    //         {document.querySelector(".leftbtn").style.display="none"}
    //     else 
    //         {document.quer}
    // },[rowindex])
    return(
        <div>
            <div className="rowcontainer" >
                <div className="contain" style={{transform: `translateX(${rowindex}px)`, transition: "transform 0.5s ease"}}>    
                    {Object.entries(arr).map(([url,link])=>{
            return(
                <a href={link}><img src={url} className="containerimg" height="275px" width="200px"/></a>
            )
        })}
                </div>
            </div>    
            <div className="rightbtn" onClick={movefor} style={{top: props.hprop}}>
            <div className="flex">
                <img src="right-arrow.png" height={"50px"} width="50px" />
            </div>
            </div>
            <div className="leftbtn" id="leftbtn" onClick={moveback} style={{top: props.hprop}}>
            <div className="flex">
                <img src="left-arrow.png" height="50px" width="50px"/>
            </div>
            </div>
        </div>
    )
}