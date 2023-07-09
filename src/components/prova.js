import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import LogoIGF from "../images/logoIsolatedGames.png";
import LogoIN from "../images/RS_Insta.png";
import LogoYT from "../images/RS_Youtube.png";
import LogoTW from "../images/RS_Twitter.png";
import LogoRD from "../images/RS_TikTOk.png";

const Footer = ()=>{
    return(

<div className="footer-basic ">
  <footer className="container-fluid">
    <div className="footerStyle position-static d-flex   ">
       <div className="col-4 align-self-start">     
      <ul className="mt-3 no-bullets">
      <li><button type="button" className="btn linkUnderline" data-bs-toggle="modal" data-bs-target="#example">LEGAL NOTICE OF COOKIES</button></li>
                <div className="modal modalBG" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl ">
                    <div className="modal-content modalBG">
                      <div className="modal-header">
                        <h5 className="modal-title text-start textColor1 ms-5" id="exampleModalLabel">LEGAL NOTICE OF COOKIES</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                    <div className="modal-body modalBG">
                        <div className="container mt-5 text-start modalBG">
                <p><strong>ISOLATED GAMES SL</strong> uses “cookies” to ensure a proper operation of our website, improving safety and getting a higher efficiency and personalization of the services offered to users. If you continue browsing or press the “OK” button, you accept all its use. If you do not accept this use, press “NOT OK”. In this case ISOLATED GAMES SL can not guarantee the full functionallity of the website
                </p>
                <p>You can get more information on our <strong>cookies policy.</strong></p>

                <h5><strong>1.WHAT ARE COOKIES?</strong></h5>
                <p>Cookies are small data files that are received at the terminal from the website visited and used to record certain interactions browsing a Web site storing data that can be retrieved and updated. These files are stored on the user’s computer and contains anonymous data that are not harmful to your computer. They are used to remember the user preferences such as preferred language, login or customization of the page.
                    Cookies can also be used to record anonymous information about how a visitor uses a site. For example, from which website is accessed, or has used a “banner” advertising to reach.</p>
                
                <h5><strong>2.WHY DO WE USE COOKIES?</strong></h5>

                <p><strong>FRANCESC ROMERO COSTA</strong> strictly necessary and essential uses cookies to use our sites and allow you to move freely use secure areas, custom settings, etc. In addition, <strong>ISOLATED GAMES SL</strong> uses cookies to collect data relating to the analysis of web usage. These are used to help improve the customer service, measuring the use and performance of the site, to optimize and customize it.</p>

                <p>Our sites also may contain links to social networks (like Facebook or Twitter). <strong>ISOLATED GAMES SL</strong> does not control the cookies used by these external websites. For more information about cookies and other social networking websites of others, we suggest reviewing their own policies cookies.</p>

                <p>This website uses “cookies” as follows:</p>

                <ul className="">
                  <li> Analytics: Google Analytics is a free service offered by Google Inc. and includes information about the web pages accessed, what time, what Web browser, etc. Later, this information is sent to Google’s servers Inc. United States.</li>
                  <li>Cookies application “Add-this”: Add-this is a free service that lets you share pages of this website by different means (email, social networks, etc.). Add-this compiles statistical information about your browsing to provide advertising adapted to your browsing habits on this site or elsewhere.</li> 
                </ul>

                <h5 className="mt-3"><strong>3.WHAT USE DO WE GIVE TO THE DIFFERENT TYPES OF COOKIES?</strong></h5> 
                
                <p><strong>According to its purpose:</strong></p>
                
                <ul className="">
                  <li><strong>Technical Cookies:</strong> Cookies those techniques are essential and strictly necessary for the proper functioning of a website and the use of different options and services. For example, the ones that serve to maintain the session management, response time, performance and validation options, use of security features, sharing with social networks, etc.</li>
                  <li><strong>Customization Cookies:</strong> These cookies allow the user to specify or customize some features of the settings on the website, for example, set the language, locale and browser type.</li>
                  <li><strong>Analytical Cookies:</strong> Analytical Cookies are used by our web portal, to develop navigation profiles and to know the user preferences to improve the range of products and services. For example, using a cookie analytic can control the geographical areas of interest to a user, which is the product of more acceptance, etc.</li>
                  <li><strong>Cookies publicity / advertising:</strong> advertising cookies allow the management of advertising space based on specific criteria. For example, the frequency of access, content editing, etc. Advertising Cookies allow through advertising management storing behaviour information through observing habits, student access and forming a profile of the user’s preferences to provide advertisements about your interests profile.</li>
                </ul>
                
                <p><strong>According to its term:</strong></p>
                
                <ul className="">
                  <li><strong>Session Cookies:</strong> Session cookies are those that last as long as the user is browsing the website and are deleted in the term.</li>
                  <li><strong>Persistent Cookies:</strong> These cookies are stored on the user’s computer for a longer time, thus facilitating control of the preferences chosen without having to repeat certain parameters each time you visit the site.</li>
                </ul>
                
                <h5 className="mt-3"><strong>4.IF I DO NOT WANT TO HAVE THESE COOKIES OR I DO NOT DO ANYTHING ABOUT IT?</strong></h5>
                Why do we need your express consent to use them? 

                <p className="mt-3"><strong>-The ruling of 1 October 2019 The Grand Chamber or the European Court of Justice</strong></p>
                
                <p >The ruling of 1 October 2019 The Grand Chamber or the European Court of Justice must be interpreted in the sense of that the consent is not given validly when the storage of the information or the access to the information already stored in the terminal equipment of the user in website Internet, through cookies is authorized through a checkbox ticked by default which the user must remove the mark in case of avoiding its use. In this sense the authorization must be based in an explicit acceptation or an equal rejection from the user.</p>

                <p>This interpretation cannot change if the stored information or consulted in the user’s terminal of a place of Internet consists or not of personal data.</p>

                <p>The Grand Chamber or the European Court of Justice also disposes in this ruling that the information that the services provider has to offer to the user of a website in Internet, must indicate the time during the cookies will remain active and the possibility of that third parts could access to the information in these stored. This requirement sets the modified version by the Directive 2009/136 that changes the article 5, part 3 of the Directive 2002/58 EU.</p>

                <p>Note that if you reject or delete cookies from browsing the Web, we can not keep your preferences, some features pages will not be operational, we can not offer personalized services and every time you go to browse our website we will have to ask again your permission for the use of cookies.</p>

                <p>If however, decide to modify the configuration of your access to the website, you should know that it is possible to remove cookies or prevent you registering this information on your computer at any time by changing the settings on your browser:</p>
                
                <ul className="">
                  <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">Cookies configuration of Internet Explorer.</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">Cookies configuration of Firefox.</a></li>
                  <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en-GB">Cookies configuration of Google Chrome.</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">Cookies configurations of Safari.</a></li>
                </ul>
                
                <p className="mt-3">These browsers are undergoing upgrades or modifications; we can not guarantee that they fit completely in the browser version. You may also use another browser is not contemplated in these links like Konqueror, Arora, Flock, etc. To avoid these imbalances, you can access directly from your browser options, which is usually the Options menu, in the section “Privacy.” (Please see your browser’s help for more information.)</p>

                <h5><strong>WHERE CAN I GET MORE INFORMATION?</strong></h5>

                <p>You can find more information about cookies to <a href="https://allaboutcookies.org/">www.allaboutcookies.org</a> or<a href="https://youronlinechoices.eu/"> www.youronlinechoices.eu</a>.</p>
              </div>
            </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
        </div>
      </div>
    </div>
    <li><button type="button" className="btn linkUnderline" data-bs-toggle="modal" data-bs-target="#example2">PRIVACY POLICY</button></li>
    <div className="modal modalBG" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl ">
        <div className="modal-content modalBG">
          <div className="modal-header">
            <h5 className="modal-title text-start textColor1 ms-5" id="exampleModalLabel">PRIVACY POLICY</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div classNames="modal-body modalBG">
          <div className="container mt-5 text-start modalBG">

            <h5><strong>1.USE CONDITIONS</strong></h5>

            <p>In compliance with Law 34/2002 of 11 July, services of information society and electronic commerce, ISOLATED GAMES SL, informs you that owns the website: www.isolatedgames.com. In agreement with the requirements of Article 10 of the said Act, ISOLATED GAMES SL, reports the following data: the holder of this website is ISOLATED GAMES SL, CIF: B67476697, and registered office: Passatge Diputacio 1. Code: 08172. Location: SANT CUGAT DEL VALLÈS. Province: BARCELONA. The email address to contact the company is: info@isolatedgames.com</p>
            
            <h5><strong>2.USER AND RESPONSABILITIES</strong></h5>

            <p>The website isolatedgames.com, provides wide range of information, services and data. The user assumes responsibility for the proper use of websites. This responsibility shall extend to: the accuracy and legality of the information provided by the user in the forms issued by ISOLATED GAMES SL, to access certain content or services offered by the website.</p>

            <p>The use of information, services and data offered by ISOLATED GAMES SL, will not go against the provisions of these conditions, law, morals, good customs or public order or in any other case, may involve injury to the rights of others or the operation of websites.</p>

            <p>To this end, the User shall not use any of the contents with illegal purposes, prohibited in this text, harmful to the rights and interests of others, or in any way damage, disable, overburden, impair or prevent the normal use of the contents, other Users or any Internet user (hardware and software).

            </p>
            <p>Users shall be liable for damages of any kind that the company owns the site may suffer directly or indirectly as a result of breach of any of the obligations arising from the use of this Website and policy privacy.</p>
            
            <p className="mb-5">In particular, and merely indicative and not exhaustive, the User agrees not to transmit, distribute or make available to third parties information, data, content, messages, graphics, drawings, sound and / or images, photographs Site .</p>
          </div>
        </div>
            <div className="modal-footer">
             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
      </div>
    </div>
    <Link to="/contact" className="linkUnderline"><li >
                        
      
                        <button type="button" className="btn linkUnderline" >CONTACT</button></li></Link></ul></div>
          
          
      <div className="container-fluid col-4">
       <div className=""><h2 className="text-center mt-3  textColor1 ">FOLLOW US</h2></div>  
      <div className=" d-flex justify-content-evenly "  >
          <a href="https://www.instagram.com/isolated_games/"><img className="netLogos img-fluid  " src={LogoIN} width={50} height={50} /></a>
          <a href="https://www.youtube.com/channel/UCT41om_yDCTTq7-q7OPjgPA"><img className="netLogos img-fluid" src={LogoYT} width={50} height={50} /></a>
          <a href="https://twitter.com/Isolated_Games"><img  className="netLogos img-fluid" src={LogoTW} width={50} height={50} /></a>
          <a href="https://www.reddit.com/r/BetweenTheStars/"><img className="netLogos img-fluid" src={LogoRD} width={50} height={50} /></a>
      </div></div>  
      <div className="container-fluid col-4 d-flex align-items-end flex-column bd-highlight   pe-5 m-0" >
      
        <a href="/#scrollspyHeading1"><img className="mt-3  img-fluid " src={LogoIGF} width={291} height={50}/></a>
            
            <p className="copyright linkUnderline pb-3">Isolated Games © Copyright 2019. All Rights Reserved.</p>
    </div></div>
  </footer>
</div>


)
}
export default Footer;