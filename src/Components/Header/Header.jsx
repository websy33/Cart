import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
import { FaUserEdit } from "react-icons/fa";
function Header() {
 
    const [isMenuOpen, SetIsMenuOpen] =useState(0)
   return (
    
      
      
   <div className='w-full bg-gradient-to-r from-pink-300 to-yellow-100'>
   
         {/* --------------------Header----------------------------- */}
         <header className='flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md z-50 relative'> 
         
          <a href='#'>
           <img src={logo} className='hover:scale-105 transition-all'>
           </img>
           </a>
          {/* --------------------Navigation Bar ----------------------------- */}
           <ul className='hidden md:flex gap-8 items-center text-sm font-semibold'>
           <li className=' relative group px-3 py-2'>
           <Link to="/"className='hover:opacity-50 cursor-default p-3  hover:bg-pink-400  hover:text-white rounded-md transition-all hover:scale-105'>Home</Link></li>
            {/* ------------------------Men Section ----------------------------- */}
   <li className=' relative group px-3 py-2'>
     <button className='hover:opacity-50 cursor-default p-3 hover:bg-pink-400  hover:text-white rounded-md transition-all hover:scale-105'>Men</button>
   <div className='absolute top-18 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
   <div className="relative top-.5 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm'></div>
    <div className='relative z-15'>
    <div className="grid grid-cols-[200px_200px_200px_200px_220px] gap-5"><div>
         {/* -------------------------Top wear------------------------------- */} 
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105'>
   Top Wear
         </p><ul className='mt-3 text-[15px] leading-2 '>
    <li>
  <Link to="/Tshirt" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">
    T-shirt
  </Link>
</li>
            <li><Link to="/CasualShirts" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Casual Shirts</Link></li>
            <li><Link to="/FormalShirts" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Formal Shirts</Link></li>
           <li><Link to="/SweatShirts" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sweat Shirts</Link></li> 
             <li><Link to="/Sweaters" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sweaters</Link></li>
           <li><Link to="/Jackets" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Jackets</Link></li>
            <li><Link to="/BlazersCoats" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Blazers & Coats</Link></li>
           <li><Link to="/Suits" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Suits</Link></li>
            <li><Link to="/RainJackets" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Rain Jackets
          </Link></li>

          {/*-----------------------Festival Wear----------------------------- */}
          <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 leading-5 mb-3 hover:scale-105'>Kashmir & Festive wear
         </p>
         <li><Link to="/Pheran" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Pheran
          </Link></li>
         <li><Link to="/TurbanorSkullCap" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Turban or Skull Cap
         </Link></li>
         <li><Link to="/WaistcoatorAchkan" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Waistcoat or Achkan
       </Link></li>
          <li><Link to="/KurtasKurtaSets" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Kurtas & Kurta Sets
        </Link></li>
        <li><Link to="/Sherwanis" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sherwanis
         </Link></li>
         </ul>
       </div>
   {/* --------------------Bottom Wear----------------------------- */}
   
       <div>
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 '>
   Bottom Wear
         </p>
         <ul className='mt-3 text-[15px] leading-2 '>
         <li><Link to="/Jeans" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Jeans
        </Link></li>
            <li><Link to="/CasualTrousers" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Casual Trousers
            </Link></li>
            <li><Link to="/FormalTrouser" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Formal Trouser
            </Link></li>
            <li><Link to="/Shorts" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Shorts
         </Link></li>
            <li><Link to="/TrackPantsJoggers" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Track Pants & Joggers
       </Link></li>
          
       
       {/* --------------------Innerwear and  sleepwear----------------------------- */}
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 leading-5 mb-3 hover:scale-105'>Briefs and Trunks
         </p>
          <li><Link to="/Boxers " className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Boxers </Link></li>
          <li><Link to="/Vests " className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Vests </Link></li>
          <li><Link to="/SleepwearLoungewear " className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sleepwear & Loungewear </Link></li>
          <li><Link to="/Thermals" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Thermals </Link></li>
         </ul>
         </div>
           {/* --------------------Footwear----------------------------- */}
           <div>
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 '>
   Footwear
         </p>
         <ul className='mt-3 text-[15px] leading-2'>
          <li><Link to="/CasualShoes" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Casual Shoes
        </Link></li>
       <li><Link to="/CasualShoes" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sports Shoes</Link></li>
         <li><Link to="/FormalShoes" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Formal Shoes </Link></li>
         <li><Link to="/Sneakers" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sneakers</Link></li>
         <li><Link to="/SandalsFloaters" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sandals & Floaters </Link></li>
         <li><Link to="/FlipFlops" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Flip Flops </Link></li>
         <li><Link to="/Socks" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Socks</Link></li><br />
    {/* ----------------Personal Care & Grooming Sunglasses & Frames Watches ---------------------------- */}
   <li><Link to="/PersonalCareGrooming"  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-4 leading-5'>Personal Care & Grooming</Link></li> <br />
   <li><Link to="/SunglassesFrames"  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-4 leading-5'>Sunglasses & Frames</Link></li><br />
   <li><Link to="/Watches"  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-5 leading-5'>Watches</Link></li>
           </ul>
           </div>
    {/* --------------------Sports & Active Wear----------------------------- */}
    <div>
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-3 '>
   Sports & Active Wear
         </p>
         <ul className='mt-3 text-[15px] leading-2'>
         <li><Link to="/SportsShoes" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sports Shoes</Link></li>
         <li><Link to="/SportsSandles" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sports Sandles </Link></li>
         <li><Link to="/ActiveTShirt" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Active T-Shirt </Link></li>
         <li><Link to="/TrackPantsShirts" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Track Pants & Shirts </Link></li>
         <li><Link to="/Tracksuits" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Tracksuits </Link></li>
         <li><Link to="/JacketsSweatshirts" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Jackets & Sweatshirts</Link></li>
         <li><Link to="/SportAccessories" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Sport Accessories</Link></li>
         <li><Link to="/Swimwear" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Swimwear </Link></li>
   <br /><br />
   {/* --------------------------Gadgets--------------------------------- */}
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 '>
   Gadgets
         </p>
         <br />
        <li><Link to="/SmartWearables" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Smart Wearables</Link></li>
        <li><Link to="/FitnessGadgets" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Fitness Gadgets</Link></li>
        <li><Link to="/Headphones" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Headphones</Link></li>
        <li><Link to="/Speakers" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Speakers</Link></li>
   </ul>
   </div>  
   
   
   
   
   {/* --------------------Fashion Accessories----------------------------- */}
   <div>
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-3 '>
       Fashion Accessories
         </p>
      <ul className='mt-3 text-[15px] leading-2'>
      <li><Link to="/Wallets" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Wallets</Link></li>
      <li><Link to="/Belts" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Belts</Link></li>
      <li><Link to="/PerfumesBodyMist" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Perfumes & Body Mist</Link></li>
      <li><Link to="/Trimmers" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Trimmers</Link></li>
      <li><Link to="/Deodorants" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Deodorants</Link></li>
      <li><Link to="/TiesCufflinksPocketSquares" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Ties, Cufflinks & Pocket Squares</Link></li>
      <li><Link to="/AccessoryGifts" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Accessory Gifts </Link></li>
      <li><Link to="/CapsHats" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Caps & Hats</Link></li>
      <li><Link to="/MufflersScarvesGloves" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Mufflers, Scarves & Gloves</Link></li>
      <li><Link to="/PhoneCovers" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Phone Covers</Link></li>
      <li><Link to="/RingsWristwear" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Rings & Wristwear</Link></li>
      <li><Link to="/Helmets" className="block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold hover:text-black hover:scale-105">Helmets</Link></li>
   <br /><br />

   {/* -------Luggages & Trolleys  Bags & Backpacks----------------------------- */}
   
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-4'>
   Luggages & Trolleys
         </p>
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 '>
       Bags & Backpacks
         </p>   
   </ul>
   </div> 
         </div>
     </div>
    </div>
   </div>
   </li>
   
   
   
   
   {/* -------------------Women Section----------------------------- */}
   
   
   
   
   <li className=' relative group px-3 py-2'>
     <button className='hover:opacity-50 cursor-default p-3 hover:bg-pink-400  hover:text-white rounded-md transition-all hover:scale-105'>Women</button>
   <div className='absolute top-18 -left-68  transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
   <div className="realative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[18rem] duration-500 ease-in-out rounded-sm'></div>
    <div className='relative z-15'>
    <div className="grid grid-cols-[220px_200px_200px_200px_220px] gap-5">
       
   {/* --------------------Women Section----------------------------- */}
        {/* ---------------------Kashmiri And Fusion Wear---------------------------- */}
   <div>
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-3 '>
       Fashion Accessories
         </p>
         <ul className='mt-3 text-[15px] leading-2'>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Kurtas & Suits
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Kurtis,Tunics & Tops
            </a></li>
            <li> 
            <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Pashmina
           </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 '>Woolen Wraps
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 '>Sarees
            </a></li>
            <li><a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Ethnic Wear
           </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 '>Leggings,Salwars & Churidars
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 '>Skirts & Palazzos
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 '>Abaya
            </a></li>
            <li><a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'> Dress Materials
           </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 '>Lehenga Cholis
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 '>Jackets
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 mb-4'>Dupattas & Shawls
            </a></li>
   
   {/* -------Luggages & Trolleys  Bags & Backpacks----------------------------- */}
   
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-4'>
   Belts, Scarves & More
         </p>
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 '>
        Watches & Wearables
         </p>   
   </ul>
   </div>
   
   {/* ---------------------Western Wear---------------------------- */}
   <div>
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 '>
   Western Wear
         </p>
         <ul className='mt-3 text-[15px] leading-2 '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Western Wear
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Tops
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>TShirts
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Jeans
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Dresses
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Shorts & Skirts
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Co-ords
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Playsuits 
             </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Jumpsuits
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Shrugs
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Sweaters & Sweatshirts 
             </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Jackets & Coats
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Blazers & Waistcoats
             </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 mb-4'>Trousers & Capris
            </a></li>   
         </ul> 
   </div>
   {/* -------------------Maternity  Sunglasses& Frames--------------------------- */}
   <div>
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 '>
   Maternity 
         </p>
         <ul className='mt-3 text-[15px] leading-2 '>
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-5 '>
   Sunglasses& Frames
         </p>
   
   {/* -------------------Footwear--------------------------- */}
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-5'>
   Footwear
         </p>
   
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Flats
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Casual Shoes
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Heels
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Boots
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 mb-4'>Sports Shoes & Floaters
            </a></li>
        
   {/* -------------------Beauty and Personal Care--------------------------- */}
   
            <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-3'>
            Beauty & Personal Care</p>
   
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Clothing
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Footwear
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Sports Accessories
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 mb-4'>Sports Equipments
            </a></li>
   
   </ul>
   </div>
   
   {/* -------------------Lingerie & Sleepwear--------------------------- */}
   
   <div>
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 '>
       Lingerie & Sleepwear
         </p>
         <ul className='mt-3 text-[15px] leading-2 '>
   
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Briefs
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Shapewear
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Sleepwear & Loungewear
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Camisoles & Thermals
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Bras
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 mb-4'>Swimwear
            </a></li>
   
   
   {/* -------------------Beauty & Personal Care--------------------------- */}
   
   
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-3'>
       
   Beauty & Personal Care   </p>
   
   
   <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Makeup
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Skincare
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Premium Beauty
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Lipsticks
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 mb-4'>Fragrances
            </a></li>        
         </ul>
         </div>
   
         {/* -------------------Beauty & Personal Care--------------------------- */}
   
   <div>
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-3'>
       
      Gadgets</p>
       <ul className='mt-3 text-[15px] leading-2 '>
   
       <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Smart Wearables
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Fitness Gadgets
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Headphones
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 mb-4'>Speakers
            </a></li> 
   
   
             {/* -------------------Jewellery--------------------------- */}
   
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-3'>
       
   Jewellery</p>
   
   <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Fashion Jewellery
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105'>Fine Jewellery
           </a></li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-pink-300 hover:via-pink-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-105 mb-4'>Earrings
            </a></li> 
   
     
             {/* ------------------- Backpacks Handbags,Bags & Wallets Luggages & Trolleys--------------------------- */}       
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-4'>
       
   Backpacks </p>
       
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-4'>
       
   Handbags,Bags & Wallets</p>
       
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-pink-400 hover:scale-105 mb-4'>
       
   Luggages & Trolleys</p>
   
   
   
         </ul>
         </div>
        </div>
     </div>
    </div>
   </div>
   </li>
   
   
   
   
    {/* -------------------------------------Kids Section--------------------------------------------- */} 
    <li className=' relative group px-3 py-2'>
     <button className='hover:opacity-50 cursor-default p-3 hover:bg-pink-400  hover:text-white rounded-md transition-all hover:scale-105'>Kids</button>
   <div className='absolute top-18 -left-95  transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
   <div className="realative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[23.5rem] duration-500 ease-in-out rounded-sm'></div>
    <div className='relative z-15'>
    <div className="grid grid-cols-[220px_220px_200px_200px_210px] gap-5">
   
   
         {/* --------------------------Boys Clothing----------------------- */} 
         <div>
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 '>
         Boys Clothing
         </p><ul className='mt-3 text-[15px] leading-2  '>
   
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>T-Shirts
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Shirts
            </a></li> 
   
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Shorts
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Jeans
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Trousers
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Clothing Sets
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Ethnic Wear
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Track Pants & Pyjamas
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Jackets,Sweater & Sweatshirts
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Party Wear
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Innerwear & Thermals 
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Nightwear & Loungewear
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102  mb-4'>Value Packs
            </a></li> 
   </ul>
   </div>
   
    {/* --------------------------Girls Clothing----------------------- */} 
     <div>  
    <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 mb-3 '>
         Girls Clothing
         </p><ul className='mt-3 text-[15px] leading-2 '>
   
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Dresses
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Tops
            </a></li> 
   
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Tshirts
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Clothing Sets
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Lehenga Choli
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Kurta Sets
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Party Wear
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Dungarees & Jumpsuits
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Skirts & shorts
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Tights & Leggings
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Jeans ,Trousers& Capris 
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Jackets, Sweater & Sweatshirts
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Nightwear & Loungwear
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Value Packs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4 '>Innerwear & Thermals
            </a></li> </ul>
            </div>
   
    {/* -------------------------------------Footwear-------------------------------------- */} 
    <div>  
    <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 mb-3 '>
        Footwear
         </p><ul className='mt-3 text-[15px] leading-2  '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Casual Shoes
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Flipflops
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Sports Shoes
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Flats
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Sandlas
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Heels
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Socks
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>School Shoes
            </a></li> 
            
   {/* ------------------------------------- Toys & Games-------------------------------------- */} 
    
    <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 mb-3 '>
      Toys & Games
         </p>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Learning & Development
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Activity Toys
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Soft Toys
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Action Figure/ Play set
            </a></li> 
            </ul>
            </div>
   {/* ------------------------------------- Infants-------------------------------------- */} 
    <div>
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 mb-3 '>
     Infants
         </p><ul className='mt-3 text-[15px] leading-2  '>
   
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Bodysuits
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Rompers & Sleepsuits
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Clothing Sets
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Tshirts & Tops
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Dresses
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Bottom Wear
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Innerwear & Sleepwear
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Infant Care
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Winter Wear
            </a></li> 
   
   {/* ------------------------------------- Home & Bath  Personal Care-------------------------------------- */} 
            <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 mb-3 '>
            Home & Bath
         </p>
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 mb-3 '>
         Personal Care 
         </p>
   </ul>
   </div>
   
   {/* ------------------------------------- Kids Accessories------------------------------------- */} 
   <div>
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 mb-3 '>
   Kids Accessories
         </p><ul className='mt-3 text-[15px] leading-2  '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Tshirts & Tops
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Dresses
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Bottom Wear
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Innerwear & Sleepwear
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Infant Care
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Winter Wear
            </a></li> 
   {/* ------------------------------------- Brands------------------------------------ */} 
   
      <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-amber-600 hover:scale-102 mb-3 '>
   Brands
         </p>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>H&M
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Max Kids
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Pantaloons
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>United Colors of Benetton Kids
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>YK
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Mothercare
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>HRX
            </a></li>
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-amber-300 hover:via-amber-300 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>U.S Polo Assn,Kids
            </a></li> 
            </ul>
   </div>
   </div>
     </div>
    </div>
   </div>
   </li>
   
    {/* -------------------------------------Beauty--------------------------------------------- */} 
    <li className=' relative group px-3 py-2'>
     <button className='hover:opacity-50 cursor-default p-3 hover:bg-pink-400  hover:text-white rounded-md transition-all hover:scale-105'>Beauty</button>
   <div className='absolute top-18 -left-115 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
   <div className="realative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[29rem] duration-500 ease-in-out rounded-sm'></div>
    <div className='relative z-15'>
    <div className="grid grid-cols-[180px_220px_200px_200px_210px] gap-5">
   
   
         {/* --------------------------Makeup----------------------- */} 
         <div>
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 '>
         Makeup
         </p><ul className='mt-3 text-[15px] leading-2  '>
   
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Lipstick
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Lip Gloss
            </a></li> 
   
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Lip Liner
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Mascara
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Eyeliner
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Kajal
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Eyeshadow
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Foundation
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Primer
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Compact
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Nail Polish
         </a></li> 
           
   </ul>
   </div>
   
    {/* --------------------------Skincare,Bath & Body----------------------- */} 
     <div>  
     <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 '>
         MakeupSkincare,Bath & Body
           </p><ul className='mt-3 text-[15px] leading-2  '>
   
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Face Moisturiser
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Cleanser
            </a></li> 
   
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Masks & Peel
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Sunscreen
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Serum
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Facewash
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Eye Cream
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Lip Balm
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Body Lotion
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Body Wash
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Hand Scrub
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Body Scrub
         </a></li> 
   
   
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-4 '>
       Baby Care
         </p>
   
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-4'>
        Masks
         </p>
   </ul>
     </div>
          {/* --------------------------------------Haircare---------------------------------- */} 
         <div>
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 '>
        Haircare
         </p><ul className='mt-3 text-[15px] leading-2  '>
   
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Shampoo
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Conditioner
            </a></li> 
   
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Hair Cream
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Hair oil
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Hair Gel
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Hair Color
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Hair Serum
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Hair Accessory
            </a></li> 
   
         {/* --------------------------------------Fragrances---------------------------------- */} 
       
         <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3 '>
       Fragrances </p> 
        <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Perfumes
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Deodorant
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Body Mist
            </a></li>
            </ul></div>
   
     {/* ---------------------------------------------Appliances-------------------------------------- */} 
   
   <div>
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3 '>
       Appliances </p> <ul className='mt-3 text-[15px] leading-2  '>
        <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Hair Straightener
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Hair Dryer
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Epilator
            </a></li>
   
       {/* ---------------------------------------------Mens's Grooming-------------------------------------- */}      
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3 '>
       Men's Grooming </p> 
        <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Trimmers
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Beard Oil
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Hair Wax
            </a></li>
           
           
       {/* ---------------------------------------------Beauty Gift & Makeup Set-------------------------------------- */}      
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3 '>
       Beauty Gift & Makeup Set </p> 
        <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Beauty Gift
            </a></li> 
            
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Makeup Kit
            </a></li>
   
     {/* --------------------------------------------Premium Beauty  Wellness & Hygiene -------------------------------------- */}      
     <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-4 '>
       Premium Beauty </p> 
       <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-4 '>
      Wellness & Hygiene </p> 
   
    </ul>  
   </div>
   
   
     {/* --------------------------------------------Top Brands -------------------------------------- */} 
     <div>
     <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 '>
        Top Brands
         </p><ul className='mt-3 text-[15px] leading-2  '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Lakme
           </a> </li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Maybelline
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Loreal
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Philips
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Bath  Body Works
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> The Body Shop
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Biotique
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>MCaffeine
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Nivea
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Lotus Herbals
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Loreal Professionnel
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Kama Ayurveda
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> M.A.C
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Forest Essentials
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br  hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'>Mamaearth
            </a></li> 
   
            </ul>
            </div>
   
   </div>
     </div>
   
    </div>
   </div>
   </li>
   
   
    {/* -------------------------------------Genz--------------------------------------------- */} 
    <li className=' relative group px-3 py-2'>
     <button className='hover:opacity-50 cursor-default p-3 hover:bg-pink-400  hover:text-white rounded-md transition-all hover:scale-105'>Genz</button>
   <div className='absolute top-18 -left-140 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform'>
   <div className="realative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[35rem] duration-500 ease-in-out rounded-sm'></div>
    <div className='relative z-15'>
    <div className="grid grid-cols-[180px_220px_200px_200px_210px] gap-5">
   
   
   {/* --------------------------------------------Womens Western Wear-------------------------------------- */} 
   <div>
     <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 '>
     Womens Western Wear 
         </p><ul className='mt-3 text-[15px] leading-2  '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Dresses Under 599Rs
           </a> </li>
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Top Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Jeans Under 599Rs
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Trousers Under 699Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>T-Shirts Under 299Rs
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Shirts Under 499Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Sjirts Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102'>Shorts Under 699Rs
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Co-ords Under 799Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Jumpsuits Under 899Rs
         </a></li> 
           <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Track Pants Under 699Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Jackets Under 899Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Sweatshirts Under  699Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4 '>Sweaters Under 899Rs
         </a></li> 
         </ul>
         </div>
           
      {/* --------------------------------------------Women's Ethnic Wear-------------------------------------- */}      
        <div> <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3'>
     Women's Ethnic Wear 
         </p><ul className='mt-3 text-[15px] leading-2  '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Kurtas Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Kurtis Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Kurta sets Under  499Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Ethnic Dresses Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4 '>Palazzos Under 899Rs
         </a></li> 
   {/* --------------------------------------------Lingerie & Loungewear-------------------------------------- */}      
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3'>
   Lingerie & Loungewear
         </p>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Bras Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Night suits Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Nightdresses Under  799Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Lounge pants Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4 '>Briefs Under 899Rs
         </a></li> 
   
   </ul>
   </div>
    {/* --------------------------------------------Men's Casual Wear-------------------------------------- */}      
    <div> <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3'>
    Men's Casual Wear
         </p><ul className='mt-3 text-[15px] leading-2  '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> T-shirts Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Shirts Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Jeans Under  499Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Trousers Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Shorts Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Track pants Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Jackets Under  499Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Sweatshirts Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Co-ords Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4 '>Sweater Under 899Rs
         </a></li> 
   {/* --------------------------------------------Men's Occassion wear-------------------------------------- */}      
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3'>
   Men's Occassion wear
         </p>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Kurta Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Kurta Sets Under 499Rs
         </a></li> 
   
   </ul>
   </div>
   
   
    {/* --------------------------------------------Women's Footwear -------------------------------------- */}      
    <div> <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3'>
    Women's Footwear
         </p><ul className='mt-3 text-[15px] leading-2  '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Heels Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Flats Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Casual Shoes Under  499Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Sports shoes Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Flip flops Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Boots Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'> Ballerinas Under  499Rs
            </a></li> 
           
   {/* --------------------------------------------Men's Footwear------------------------------------- */}      
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3'>
   Men's Footwear
         </p>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Casual Shoes Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Sports Shoes Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Formal Shoes Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Sandals Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Boots Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4 '>Flipflops Under 899Rs
         </a></li> 
   </ul>
   </div>
   
   {/* --------------------------------------------Beauty & Grooming -------------------------------------- */}      
   <div> <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3'>
   Beauty & Grooming
         </p><ul className='mt-3 text-[15px] leading-2  '>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Skincare Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>Haircare Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Bath & Body Under  499Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>MakeUp Under  999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Fragrances  Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4'> Appliances Under 499Rs
         </a></li> 
         
           
   {/* --------------------------------------------Accessories--------------------------------------- */}      
   <p  className='uppercase tracking-wider text-grey-500 font-medium text-[13px] text-emerald-700 hover:scale-102 mb-3'>
   Accessories
         </p>
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Jewellery Under 399Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Handbags Under 499Rs
         </a></li> 
         <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>  Clutchus Under 999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>  Backpaks Under 999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Wallets Under 999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '>  Sunglasses Under 999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 '> Belts Wallets Under 999Rs
            </a></li> 
            <li> <a href='#' className='block p-2 -mx-2 hover:bg-gradient-to-br hover:from-emerald-600 hover:via-emerald-600 ease-in-out duration-300 text-gray-800 font-semibold  hover:text-black hover:scale-102 mb-4 '> Caps Under 899Rs
         </a></li> 
   </ul>
   </div>
    </div>
     </div>
   
    </div>
   </div>
   </li>
   
    </ul>
   <div className='relative hidden md:flex items-center justify-center gap-3'>
   <i class='bx bx-search absolute left-3 text-2xl text-grey-500'></i>
   <input type="text" placeholder='Search...' className='py-2 px-9  p1-10 left-3 rounded-md border-2 border-pink-300 focus: bg-slate-100 focus:outline-pink-500 '/>
   </div>
   
   <FaUserEdit className='w-5 h-5 hover:text-pink-500 hidden md:flex items-center' />



   
  
<i className='bx bx-menu x1:hidden-block text-4xl cursor-pointer'
onClick={() => SetIsMenuOpen(!isMenuOpen)}></i>
      <div className={`absolute xl:hidden top-22 left-30 w-90 bg-white flex flex-col items-center gap-5 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100":"opacity-0"}`}
      style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
         <Link to="/Menu/Men" className='list-none w-full text-center p-4 hover:bg-pink-300 text-black transition-all cursor-pointer'>Men</Link>
        <li className='list-none w-full text-center p-4 hover:bg-pink-300 text-black transition-all cursor-pointer'>Women</li>
        <li className='list-none w-full text-center p-4 hover:bg-pink-300 text-black transition-all cursor-pointer'>Kids</li>
        <li className='list-none w-full text-center p-4 hover:bg-pink-300 text-black transition-all cursor-pointer'>Beauty</li>
        <li className='list-none w-full text-center p-4 hover:bg-pink-300 text-black transition-all cursor-pointer'>Genz</li>
      </div>
 
         </header> 
         </div>
  )
}

export default Header;