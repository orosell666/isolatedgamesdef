import React from "react";
import "../styles/index.css";
import '../styles/App.css';
import  gameBanner  from "../images/103.jpg";
import LogoBTS from "../images/logo_transparent.png";
import screenshot3 from "../images/157.jpg";

import { Player } from 'video-react';





const BeTheStar = () => {

    return(
        <div>
            <div className="banner-area img-fluid ">
                <img src={gameBanner} className="background-image col-12" /><img className="overlay mx-auto" src={LogoBTS} />
            </div>
       
        <h1 className="textColor1 mt-3">ABOUT BETWEEN THE STARS</h1>
        <div className="container-fluid col-3 mt-5">
        <h4 className="textColor1">Travel among procedurally generated sectors.
Equip and upgrade your weapons.
Face events and make decisions.
And destroy the enemies of the Republic.</h4>
        </div>
        
        <iframe className="mt-5" width="760" height="515" src="https://www.youtube.com/embed/EUXJnueIiPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="container-fluid col-4 mt-5">
            <h4 className="textColor1 ">Between the Stars is a roguelike game where you play as a captain of a military spaceship. You will have to fight the enemies of the Republic and protect  the civilized world.</h4>
            <p className="mt-5 textColor1">Between the Stars is a roguelike game with action and strategy elements that puts you in the shoes of a stellar cruiser captain. Your mission is to protect the civilized world fighting the Children of the Sun, the faction that dominates the outer worlds of the known universe. To carry out your mission you will have to cross the galaxy, face new challenges in each jump, make difficult decisions that will affect your ship, your crew and the world around you, improve your ship’s equipment and fight in exciting battles to survive.
            </p>
        </div>
        <div className="container mt-5">
            <img src={screenshot3} className="col-7"/>
        </div>
        <div className="container-fluid col-4 mt-5">
        <ul className="ulLists textColor1 text-start">
            <li>Fight in intense space battles.</li>
            <li>Use the special abilities of your ship at the right time to make a difference on the battlefield.</li>
            <li>Convince other factions to join the battle.</li>
        </ul>
        </div>
        
        </div>


    )
}
export default BeTheStar;