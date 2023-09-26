import {FaFacebookSquare,FaYoutube,FaBehance,FaInstagram} from 'react-icons/fa'
import  IMG  from '../images/pic.jpeg'
const HeaderImg = ()=>{
    return(<>

         <div className='img_side'>
  
            <div className="img_content">
                <div className="image">
                <img  src={IMG} />
               </div> 

             <div className='text_links'>
                <span className='author'> Nova Fernandez </span>
                <div className='icons'>
                     <span><FaBehance/></span>
                     <span><FaInstagram/></span>
                     <span><FaFacebookSquare/></span>
                     <span><FaYoutube/></span>
                 </div>
       </div>     
       </div> 

      
    </div>
    
    </>)
}

export default HeaderImg