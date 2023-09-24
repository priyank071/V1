import img3 from './back.jpg';
import img4 from './weblogo.png';
import img5 from './twitter.png';
import img6 from './instagram.png'
import img7 from './email.png';
const AboutPage=()=> {
  return(
    <>
    <div className="about-body">
    <div className='about-con font'>
    <h1>About Us :</h1>
    <p>At Green Vision, we stand at the intersection of nature and technology, driven by a vision of harmonious coexistence. We firmly believe that the rapid evolution of technology should seamlessly align with the preservation of our precious natural world. Our E-Waste Facility Locator is the embodiment of this belief, serving as the bridge that connects the dynamic realm of cutting-edge electronics with the essential mission of safeguarding our environment.
    </p>
    <h2> Our Mission:</h2>
    <p>Our mission is crystal clear: to lead the way in promoting sustainable technology consumption and responsible e-waste disposal. We are passionate about fostering a future where technological innovations not only enhance our lives but also contribute to the well-being of our planet. With each step we take, we strive to inspire and empower individuals and businesses to make eco-conscious choices in the world of technology.
    </p>
    <h2>Why Choose Green Vision?</h2>
    <ul>
    <li>
    <h4>Nature-Tech Synergy: </h4>
    <p> We are dedicated to achieving a perfect synergy between nature and technology, where advancements are made with sustainability at the forefront.
    </p>
    </li>
    <li>
    <h4>E-Waste Solutions:</h4>
    <p>Our E-Waste Facility Locator simplifies the process of finding certified recycling facilities, making responsible e-waste disposal easier than ever.
    </p>
    </li>
    <li>
    <h4>Data Security:</h4>
    <p>Trust in our commitment to your data security, as we partner with facilities that prioritize secure data erasure.
    </p>
    </li>
    <li>
    <h4>Community Engagement:</h4>
    <p> We actively engage with communities, schools, and businesses to raise awareness about responsible e-waste management and its positive impact.
    </p>
    </li>
   </ul>
   <p>Join Us in Shaping a Sustainable Future:
    Feel free to reach out if you have questions or want to get involved. Together, we'll create a greener, more sustainable world.
    </p>
   </div>
  <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <span class="logo_name my-logo">Green Vision</span>
        </div>
        <div class="media-icons">
          <a href='https://instagram.com/greenvision24?utm_source=qr&igshid=OGU0MmVlOWVjOQ=='><img className='logo-footer' src={img6}></img></a>
          <a href="https://x.com/greenvision2409?t=A_yO2zBC9m696U7B6zkTiA&s=08"><img className='logo-footer' src={img5} ></img></a>
          <a href="https://x.com/greenvision2409?t=A_yO2zBC9m696U7B6zkTiA&s=08"><img className='logo-footer' src={img7} ></img></a>
        </div>  
      </div>
      <div class="link-boxes">
        <ul class="box input-box">
          <li class="link_name">Your Queries</li>
          <li><input type="text" placeholder="Enter your message"/></li>
          <li><input type="button" value="Send"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 <a href="#">Green Vision.</a>All rights reserved</span>
      </div>
    </div>
   </footer>
   </div>
    </>
  );
}
export default AboutPage;


{/* // <div className='footer-div'>
//          <div className='my-row'>
//           <div className='my-col'>
//             <img className='logo-footer' src={img4}></img>
//             <p></p>
//           </div> 
//           <div className='col'>
//              <form>
//               <input type='text' placeholder='Enter your name'></input>
//               <input type='text' placeholder='Enter Message'></input>
//               <button type='submit'>Send</button>
//              </form>
//           </div>
//          </div>
//          </div>
// <a href='https://instagram.com/greenvision24?utm_source=qr&igshid=OGU0MmVlOWVjOQ=='> <img className="insta" src={img6}></img></a>
// <a href="https://x.com/greenvision2409?t=A_yO2zBC9m696U7B6zkTiA&s=08"> <img className="twitter" src={img5}></img></a> */}