import img1 from './weblogo.png';
import img2 from './plant.png';
const HomePage=()=>{
    return(
        <>
        <div className="home-page landing-page">
            <div className='extra'></div>
            <div className='nav-my'>
            <img className='logo' src={img1}></img>
            <div className='con-home'>
            <div className=" font con-home about"><a href="">About</a></div>
            <div className="font  con-home contact"><a href="">Contact</a></div>
            <div className=" font con-home faqs"><a href="">FAQs</a></div>
            </div>
            <div class="blob-circle blob-my">
           <span></span>
           <span></span>
           <span></span>
           </div>    
            <div className='body-my'>
            <div className='leaf-div'><img className='leaf' src={img2}></img></div>
            <h1 className='font title'>Welcome To Green<h1 id='vision'>Vision</h1></h1>
            <p className='font para '>Discover The Smart Way To Dispose
            </p>
           <br/>
            <div className='button-div'><button className=' font main-button'>Click Here to start</button></div>
            </div>
            </div>
        </div>
        {/* <div className='ele'>
        <div className='element element-1'></div>
        </div> */}
        </>
    );
}
export default HomePage;
