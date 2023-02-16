import React from "react";
import "../styles/index.css";
import '../styles/App.css';
import { Link } from "react-router-dom";
import  gameBanner  from "../images/103.jpg";
import LogoBTS from "../images/logo_transparent.png";
import screenshot3 from "../images/157.jpg";
import screenshot6 from "../images/124.jpg";
import screenshot7 from "../images/137.jpg";
import screenshot8 from "../images/154.jpg";
import steamLogo from "../images/steamLogo.png";


import { Player } from 'video-react';





const BeTheStar = () => {

    return(
        <div className="container-fluid">
            <div className="banner-area img-fluid ">
                <img src={gameBanner} className="background-image col-12" /><img className="overlay mx-auto img-fluid" src={LogoBTS} /><Link to="https://store.steampowered.com/cart/">
            <div className="container-sm"><button type="button" className="btn textColor1 col-sm-4 mt-5 steamBtn overlaySteam" ><h3 className="pt-2 "><strong>SHOP   IN   STEAM   </strong><img src={steamLogo} width={50} height={50} className=""/></h3>
            </button></div>
            </Link>
                <div className="container ">
           
           
           </div>
            </div>
       
        <h1 className="textColor1 mt-5">ABOUT BETWEEN THE STARS</h1>
        <div className="container-fluid col-lg-3 mt-5">
        <h4 className="textColor1">Travel among procedurally generated sectors.
Equip and upgrade your weapons.
Face events and make decisions.
And destroy the enemies of the Republic.</h4>
        </div>
        <div className="videoWrapper">
        <iframe className="mt-5 " width="760" height="515" src="https://www.youtube.com/embed/EUXJnueIiPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="container-fluid col-lg-4 mt-5">
            <h4 className="textColor1 ">Between the Stars is a roguelike game where you play as a captain of a military spaceship. You will have to fight the enemies of the Republic and protect  the civilized world.</h4>
            <p className="mt-5 textColor1">Between the Stars is a roguelike game with action and strategy elements that puts you in the shoes of a stellar cruiser captain. Your mission is to protect the civilized world fighting the Children of the Sun, the faction that dominates the outer worlds of the known universe. To carry out your mission you will have to cross the galaxy, face new challenges in each jump, make difficult decisions that will affect your ship, your crew and the world around you, improve your ship’s equipment and fight in exciting battles to survive.
            </p>
        </div>
        <div className="container mt-5">
            <img src={screenshot3} className="col-7"/>
        </div>
        <div className="container-fluid col-lg-4 mt-5">
        <ul className="ulLists textColor1 text-start">
            <li>Fight in intense space battles.</li>
            <li>Use the special abilities of your ship at the right time to make a difference on the battlefield.</li>
            <li>Convince other factions to join the battle.</li>
        </ul>
        </div>
        <div className="container mt-5">
            <img src={screenshot3} className="col-7"/>
        </div>
        <div className="container-fluid col-lg-4 mt-5">
        <ul className="ulLists textColor1 text-start">
            <li>Unlock new ships through achievements. Each ship has its own style and special abilities that makes it unique.</li>
            <li>Choose your captain in each game. The captain brings his fighting style and unique bonuses to the ship, but keep in mind that death is permanent and if he dies in the game you will not be able to choose it again and a new captain will replace it.</li>
            <li>Captains have an unique look and attributes combination.</li>
        </ul>
        </div>
        <div className="container mt-5">
            <img src={screenshot3} className="col-7"/>
        </div>
        <div className="container-fluid col-lg-4 mt-5">
        <ul className="ulLists textColor1 text-start">
            <li>Sectors, star maps, enemies and space stations are procedurally generated. None game will be like the previous one!</li>
            <li>Defeat the Children of the Sun accomplishing the missions assigned to you by the high command of the star fleet.</li>
        </ul>
        </div>
        <div className="container mt-5">
            <img src={screenshot3} className="col-7"/>
        </div>
        <div className="container-fluid col-lg-4 mt-5">
        <ul className="ulLists textColor1 text-start">
            <li>Equip your ship and upgrade your equipment during the course of the adventure.</li>
            <li>Recruit new crew to replace the casualties and make the right decisions to increase their level more quickly and keep your crew safe.</li>
            <li>Hundreds of different events will test your ability and your crew.</li>
            <li>The decisions that you make in each event will condition the evolution of the game and may cause your captain to gain attributes.</li>
        </ul>
        </div>
        <div className="container-fluid col-lg-6 mb-5">
        <div id="carouselExampleIndicators" class="carousel slide pb-5 mb-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={screenshot6} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={screenshot7} class="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={screenshot8} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
        
        </div>


    )
}
export default BeTheStar;