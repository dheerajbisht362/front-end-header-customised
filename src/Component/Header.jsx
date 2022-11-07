import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Header({}){
    const { id } = useParams();
    const [logo,setLogo] = useState("")
    const [storeName, setStoreName] = useState("")
    const [socialLinks, setSocialsLinks] = useState([])
    const [showBottomMenu, setShowBottomMenu] = useState(false)
    
    useEffect(()=>{
        fetch(`http://localhost:4000/usersLayout/${id}`)
        .then(res=> res.json())
        .then(res=> renderContent(res))
    },[])

    function renderContent(res){
        console.log(res)
        setLogo(res.logo)
        setStoreName(res.storeName)
        setSocialsLinks(res.socialLinks)
        setShowBottomMenu(res.showBottomMenu)
    }

    return <div>
        <div style={{display:"flex", justifyContent: "space-around",  boxShadow: "5px 10px #BBB"}}>
            <div>
                <img src={logo} width="50" margin="20px"/>
            </div>
            <div style={{margin:"20px", fontSize:"20px"}}>
                {storeName}
            </div>
            <div>
            {socialLinks?.facebook &&
                <a href={socialLinks.facebook}  target="_blank" rel="noopener noreferrer">
                    <img width="50" src="data:image/jpeg;base64,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"/>
                </a>
            }
            {socialLinks?.instagram &&
                <a href={socialLinks.instagram}  target="_blank" rel="noopener noreferrer">
                    <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"/> 
                    </a>
            }
            </div>
        </div>
        {showBottomMenu &&
            <div style={{display:"flex", justifyContent: "space-around", marginTop:'20px'}}>
                <div>Shop</div>
                <div>Account</div>
                <div>Cart</div>
                <div>Category</div>
            </div>
        }
    </div>
}