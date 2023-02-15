import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import LogoIGF from "../images/logo-IsolatedGamesv.svg";
import LogoBTS from "../images/logo_transparent.png";
import LogoTVS from "../images/travellersRest-NewLogo5x.png";
import LogoFB from "../images/facebook-f.svg";
import LogoIN from "../images/instagram.svg";
import LogoYT from "../images/youtube.svg";
import LogoTW from "../images/twitter.svg";
import LogoRD from "../images/reddit.svg";

const Footer = ()=>{
    return(

<div className="footer-basic">
        <footer>
        <div className="footerStyle position-static ">
            
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/#scrollspyHeading1"><img className="mt-4" src={LogoIGF} width={100} height={60}/></a></li>
                    <li className="list-inline-item"><a href="../pages/bethestar.js"><img className="mt-4" src={LogoBTS} width={90} height={50}/></a></li> 
                    <li className="list-inline-item"><a href="../pages/travellers.js"><img className="mt-4" src={LogoTVS} width={60} height={40}/></a></li>
                </ul>
            
            <div className="btn-group" height={40}>
                <a href="https://www.instagram.com/isolated_games/"><img className="netLogos me-5" src={LogoIN} width={20} height={20} /></a>
                <a href="https://www.youtube.com/channel/UCT41om_yDCTTq7-q7OPjgPA"><img className="netLogos me-5" src={LogoYT} width={20} height={20} /></a>
                <a href="https://twitter.com/Isolated_Games"><img  className="netLogos me-5" src={LogoTW} width={20} height={20} /></a>
                <a href="https://www.facebook.com/BetweenTheStarsGame"><img className="netLogos me-5" src={LogoFB} width={20} height={20} /></a>
                <a href="https://www.reddit.com/r/BetweenTheStars/"><img className="netLogos " src={LogoRD} width={20} height={20} /></a>
                 </div>
            <ul className="list-inline mt-3">
                <li className="list-inline-item "><a className="linkUnderline" href="/#scrollspyHeading2">NEWS</a></li>
                <li className="list-inline-item"><a className="linkUnderline" href="/#scrollspyHeading3">JOBS</a></li>
                <li className="list-inline-item"><a className="linkUnderline" href="/#scrollspyHeading4">CONTACT</a></li></ul>
            <ul className="list-inline">
            <button type="button" className="btn linkUnderline" data-bs-toggle="modal" data-bs-target="#example">
  LEGAL NOTICE OF COOKIES
</button>
<div className="modal modalBG" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen ">
    <div className="modal-content modalBG">
      <div className="modal-header">
        <h5 className="modal-title text-start textColor1 ms-5" id="exampleModalLabel">LEGAL NOTICE OF COOKIES</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div claclassNamess="modal-body modalBG">
        <div className="container mt-5 text-start modalBG">
      <p><strong>ISOLATED GAMES SL</strong> uses “cookies” to ensure a proper operation of our website, improving safety and getting a higher efficiency and personalization of the services offered to users. If you continue browsing or press the “OK” button, you accept all its use. If you do not accept this use, press “NOT OK”. In this case ISOLATED GAMES SL can not guarantee the full functionallity of the website
</p>
<p>You can get more information on our <strong>cookies policy.</strong></p>

<p><strong>WHAT ARE COOKIES?</strong></p>
<p>Cookies are small data files that are received at the terminal from the website visited and used to record certain interactions browsing a Web site storing data that can be retrieved and updated. These files are stored on the user’s computer and contains anonymous data that are not harmful to your computer. They are used to remember the user preferences such as preferred language, login or customization of the page.

Cookies can also be used to record anonymous information about how a visitor uses a site. For example, from which website is accessed, or has used a “banner” advertising to reach.
</p>
2.WHY DO WE USE COOKIES?

FRANCESC ROMERO COSTA strictly necessary and essential uses cookies to use our sites and allow you to move freely use secure areas, custom settings, etc. In addition, ISOLATED GAMES SL uses cookies to collect data relating to the analysis of web usage. These are used to help improve the customer service, measuring the use and performance of the site, to optimize and customize it.

Our sites also may contain links to social networks (like Facebook or Twitter). ISOLATED GAMES SL does not control the cookies used by these external websites. For more information about cookies and other social networking websites of others, we suggest reviewing their own policies cookies.

This website uses “cookies” as follows:

Cookie Analytics: Google Analytics is a free service offered by Google Inc. and includes information about the web pages accessed, what time, what Web browser, etc. Later, this information is sent to Google’s servers Inc. United States.
Cookies application “Add-this”: Add-this is a free service that lets you share pages of this website by different means (email, social networks, etc.). Add-this compiles statistical information about your browsing to provide advertising adapted to your browsing habits on this site or elsewhere. 
WHAT USE DO WE GIVE TO THE DIFFERENT TYPES OF COOKIES? 
According to its purpose:

Technical Cookies: Cookies those techniques are essential and strictly necessary for the proper functioning of a website and the use of different options and services. For example, the ones that serve to maintain the session management, response time, performance and validation options, use of security features, sharing with social networks, etc.
Customization Cookies: These cookies allow the user to specify or customize some features of the settings on the website, for example, set the language, locale and browser type.
Analytical Cookies: Analytical Cookies are used by our web portal, to develop navigation profiles and to know the user preferences to improve the range of products and services. For example, using a cookie analytic can control the geographical areas of interest to a user, which is the product of more acceptance, etc.
Cookies publicity / advertising: advertising cookies allow the management of advertising space based on specific criteria. For example, the frequency of access, content editing, etc. Advertising Cookies allow through advertising management storing behaviour information through observing habits, student access and forming a profile of the user’s preferences to provide advertisements about your interests profile.
According to its term:

Session Cookies: Session cookies are those that last as long as the user is browsing the website and are deleted in the term.
Persistent Cookies: These cookies are stored on the user’s computer for a longer time, thus facilitating control of the preferences chosen without having to repeat certain parameters each time you visit the site.
IF I DO NOT WANT TO HAVE THESE COOKIES OR I DO NOT DO ANYTHING ABOUT IT?
Why do we need your express consent to use them? 

The ruling of 1 October 2019 The Grand Chamber or the European Court of Justice
The ruling of 1 October 2019 The Grand Chamber or the European Court of Justice must be interpreted in the sense of that the consent is not given validly when the storage of the information or the access to the information already stored in the terminal equipment of the user in website Internet, through cookies is authorized through a checkbox ticked by default which the user must remove the mark in case of avoiding its use. In this sense the authorization must be based in an explicit acceptation or an equal rejection from the user.

This interpretation cannot change if the stored information or consulted in the user’s terminal of a place of Internet consists or not of personal data.

The Grand Chamber or the European Court of Justice also disposes in this ruling that the information that the services provider has to offer to the user of a website in Internet, must indicate the time during the cookies will remain active and the possibility of that third parts could access to the information in these stored. This requirement sets the modified version by the Directive 2009/136 that changes the article 5, part 3 of the Directive 2002/58 EU.

Note that if you reject or delete cookies from browsing the Web, we can not keep your preferences, some features pages will not be operational, we can not offer personalized services and every time you go to browse our website we will have to ask again your permission for the use of cookies.

If however, decide to modify the configuration of your access to the website, you should know that it is possible to remove cookies or prevent you registering this information on your computer at any time by changing the settings on your browser:

Cookies configuration of Internet Explorer.
Cookies configuration of Firefox.
Cookies configuration of Google Chrome.
Cookies configurations of Safari.
These browsers are undergoing upgrades or modifications; we can not guarantee that they fit completely in the browser version. You may also use another browser is not contemplated in these links like Konqueror, Arora, Flock, etc. To avoid these imbalances, you can access directly from your browser options, which is usually the Options menu, in the section “Privacy.” (Please see your browser’s help for more information.)

 WHERE CAN I GET MORE INFORMATION?

You can find more information about cookies to www.allaboutcookies.org or www.youronlinechoices.eu.
</div></div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
                <li className="list-inline-item"><a className="linkUnderline" href="#">PRIVACY POLICY</a></li>
            </ul>
            <p className="copyright linkUnderline pb-3">Isolated Games © Copyright 2019. All Rights Reserved.</p></div>
        </footer>
    </div>

)
}
export default Footer;