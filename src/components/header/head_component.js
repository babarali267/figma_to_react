
import HeaderText from "./head_text_comp"
import HeaderImg from "./head_img_comp"
import { Bottom_box,Header_box } from "./Boxs/boxs"
import './style.css'
const Header =()=>{
     return(<>
         <div className="hero_section">
                  <HeaderText />
                  <HeaderImg />
         </div>

         <Bottom_box />
         <Header_box />

     </>)
}

export default Header