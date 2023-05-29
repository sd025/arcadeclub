import React from 'react';
// import a from '../assets/img/'
import arcadeclub from '../assets/img/arcadeclub.gif';


const Footer = () => {
  return (
    
    <div className="footer">
       <footer className="text-center text-white " style={{backgroundColor: '#202020'}}>

<div className="container ">

  <section className="socical media">
   
    <div className="row text-center ">
     
      <div className="col-xs-10 col-sm-8 text-start">
      <ul className='social gap-3'>
        <li>
            <a href="https://www.facebook.com/">
            <i class="fa-brands fa-facebook-square"></i>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/">
            <i class="fa-brands fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com">
            <i class="fa-brands fa-youtube"></i>
            </a>
        </li>
      </ul>
      </div>

      <div className="col-xs-2 col-sm-4 text-end arrow-box">
        
        
        <a href="#">
        <i class="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    
    </div>

    
  
  </section>

  <div className="footer-links">
    <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6 text-start wrapper-list">
      <div className="left-side-links">
        <div className="left-side">
          <div className="subtitle">
          <span>Resources</span>
          </div>
          <div className="cols d-flex" >
          <ul className="footerLinks first-column">
          <li><a href="/">Support-A-Creator</a></li>
          <li><a href="/">Publish on Arcade Club</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Company</a></li>
          </ul>
          <ul className="footerLinks second-column">
          <li><a href="/">Fan Art Policy</a></li>
          <li><a href="/">UX Research</a></li>
          <li><a href="/">Store EULA</a></li>
          
          </ul>
          <ul className="footerLinks third-column">
          <li><a href="/">Online Services</a></li>
          <li><a href="/">Community Rules </a></li>
          <li><a href="/">Arcade Club Newsroom</a></li>
       
          </ul>
          </div>
        </div>
      </div>
      <div className="right-side-links">
      <div className="right-side">
          <div className="subtitle">
          <span>Made by Arcade Club</span>
          </div>
          <div className="cols d-flex" >
          <ul className="footerLinks first-column">
          <li><a href="https://shubh042.github.io/3d-cube/">The Cube</a></li>
          <li><a href="https://shubh042.github.io/stack-inator">Stack-it</a></li>
          <li><a href="https://shubh042.github.io/orange-carrots">Rabbit Run</a></li>
          <li><a href="https://copter-inator.vercel.app/">The Copter</a></li>
          
          </ul>
          <ul className="footerLinks second-column">
          <li><a href="https://shubh042.github.io/slash-inator">Slash</a></li>
          <li><a href="https://shubh042.github.io/escape-inator">Ninja Escape</a></li>
          <li><a href="https://shubh042.github.io/bullseye/">BullsEye</a></li>
          <li><a href="https://shubh042.github.io/crossroad-inator/">CrossRoad</a></li>
          
          </ul>
          
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr className="my-4" />
 
  <section className="mb-5 copyright">
    <div className="row d-flex justify-content-start text-start">
      <div className="col-lg-6 col-md-12 col-xs-12">
        <p>
        © 2022, NJ Web, Inc. All rights reserved. Arcade Club, Arcade Club, the Arcade Club logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Arcade Club, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Arcade Club International, S.à r.l.   
        </p>
      </div>
    </div>
  </section>

  <div className="row">
    <div className="col-xs-12 col-sm-12 col-lg-6 legal legal-l">
    <ul className='links gap-3'>
        <li>
            <a href="/">Terms of Service
            </a>
        </li>
        <li>
            <a href="/">
            Privacy Policy
            </a>
        </li>
        <li>
            <a href="/">
         Store Refund Policy
            </a>
        </li>
      </ul>

    </div>

    <div className="col-xs-12 col-sm-12 col-lg-6  legal " >
        
        
    <ul className='logos gap-2'>
        <li>
            <a href="/">
            <div className="epic-logo">
            <img 
            src={arcadeclub}
            width="80" 
            height="65"
            />
            </div>
            </a>
        </li>
        <li>
            <a href="/">
            <div className="epic-logo">
                    <span name="epic-logo" class="sc-iBPTik jUHlxN sc-bkzYnD bEiEtT">
                    <svg  role="img" className='ccq' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#000000"></rect><title>Unreal Engine</title><path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 23.52A11.52 11.52 0 1123.52 12 11.52 11.52 0 0112 23.52zm7.13-9.791c-.206.997-1.126 3.557-4.06 4.942l-1.179-1.325-1.988 2a7.338 7.338 0 01-5.804-2.978 2.859 2.859 0 00.65.123c.326.006.678-.114.678-.66v-5.394a.89.89 0 00-1.116-.89c-.92.212-1.656 2.509-1.656 2.509a7.304 7.304 0 012.528-5.597 7.408 7.408 0 013.73-1.721c-1.006.573-1.57 1.507-1.57 2.29 0 1.262.76 1.109.984.923v7.28a1.157 1.157 0 00.148.256 1.075 1.075 0 00.88.445c.76 0 1.747-.868 1.747-.868V9.172c0-.6-.452-1.324-.905-1.572 0 0 .838-.149 1.484.346a5.537 5.537 0 01.387-.425c1.508-1.48 2.929-1.902 4.112-2.112 0 0-2.151 1.69-2.151 3.96 0 1.687.043 5.801.043 5.801.799.771 1.986-.342 3.059-1.441Z" fill="#ffffff"></path></svg>
                      </span>
    </div>
            </a>
        </li>
      </ul>
      </div>
    
    
  </div>
  
</div>



</footer>
    </div>
  
  )
}

export default Footer