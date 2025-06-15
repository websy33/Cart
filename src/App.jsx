import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import SlideShare from './Components/SlideShare';
import CardSlider from './Components/Cardslider/CardSlider';
import CartSalePage from './Components/CartSalePage/CartSalePage';
import Footer from './Components/Footer/Footer';
import CartSummery from './Components/CartSalePage/CartSummery';
import SaleSection from './Components/SaleSection/SaleSection';
import ShopByCategory from './Components/SHOPCATEGORY/ShopByCategory';
import { Routes, Route } from 'react-router-dom';
import Tshirt from './Components/Products/Tshirt';
import CasualShirts from './Components/Products/CasualShirts';
import FormalShirts from './Components/Products/FormalShirts';
import SweatShirts from './Components/Products/SweatShirts';
import Sweaters from './Components/Products/Sweaters';
import BlazersCoats from './Components/Products/BlazersCoats';
import Suits from './Components/Products/Suits';
import Pheran from './Components/Products/Pheran';
import TurbanorSkullCap from './Components/Products/TurbanorSkullCap';
import WaistcoatorAchkan from './Components/Products/WaistcoatorAchkan';
import KurtasKurtaSets from './Components/Products/KurtasKurtaSets';;
import Sherwanis from './Components/Products/Sherwanis';
import Jeans from './Components/Products/Jeans';
import CasualTrousers from './Components/Products/CasualTrousers';
import FormalTrouser from './Components/Products/FormalTrouser';
import Shorts from './Components/Products/Shorts';
import TrackPantsJoggers from './Components/Products/TrackPantsJoggers';
import Boxers from './Components/Products/Boxers';
import Vests from './Components/Products/Vests';
import Thermals from './Components/Products/Thermals';
import SleepwearLoungewear from './Components/Products/SleepwearLoungewear';
import CasualShoes from './Components/Products/CasualShoes';
import FormalShoes from './Components/Products/FormalShoes';
import Sneakers from './Components/Products/Sneakers';
import SandalsFloaters from './Components/Products/SandalsFloaters';
import FlipFlops from './Components/Products/FlipFlops';
import Socks from './Components/Products/Socks';
import PersonalCareGrooming from './Components/Products/PersonalCareGrooming';
import Watches from './Components/Products/Watches';
import SunglassesFrames from './Components/Products/SunglassesFrames';
import ProductDetail from './Components/ProductDetails/ProductDetail';
import SportsShoes from'./Components/Products/SportsShoes';
import SportsSandles from './Components/Products/SportsSandles';
import ActiveTShirt from './Components/Products/ActiveTShirt';
import TrackPantsShirts from './Components/Products/TrackPantsShirts';
import Tracksuits from './Components/Products/Tracksuits';
import JacketsSweatshirts from './Components/Products/JacketsSweatshirts';
import SportAccessories from './Components/Products/SportAccessories';
import Swimwear from './Components/Products/Swimwear';
import SmartWearables from './Components/Products/SmartWearables';
import FitnessGadgets from './Components/Products/FitnessGadgets';
import Headphones from './Components/Products/Headphones';
import Speakers from './Components/Products/Speakers';
import Wallets from './Components/Products/Wallets';
import Belts from './Components/Products/Belts';
import PerfumesBodyMist from './Components/Products/PerfumesBodyMist';
import Trimmers from './Components/Products/Trimmers';
import Deodorants from './Components/Products/Deodorants';
import TiesCufflinksPocketSquares from './Components/Products/TiesCufflinksPocketSquares';
import AccessoryGifts from './Components/Products/AccessoryGifts';
import CapsHats from './Components/Products/CapsHats';
import MufflersScarvesGloves from './Components/Products/MufflersScarvesGloves';
import PhoneCovers from './Components/Products/PhoneCovers';
import RingsWristwear from './Components/Products/RingsWristwear';
import Helmets from './Components/Products/Helmets';
import Payment from './Components/Payment/Payment';
import OrderSuccess from './Components/Payment/OrderSuccess';
import Jackets from './Components/Products/Jackets';




function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/data/products.json') // Replace with your real API or data source
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='w-full bg-gradient-to-r'> {/* Remove h-full and absolute */}
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <br />
            <SlideShare />
            <br /><br />
            <CardSlider />
            <br />
            <ShopByCategory />
            <CartSalePage />
            <CartSummery />
            <SaleSection />
            
          </>
        } />

        {/* Cleaned paths */}
       <Route path="/Tshirt/*" element={<Tshirt />} />
        <Route path="/CasualShirts" element={<CasualShirts />} />
        <Route path="/FormalShirts" element={<FormalShirts />} />
        <Route path="/SweatShirts" element={<SweatShirts />} />
        <Route path="/Sweaters" element={<Sweaters />} />
        <Route path="/BlazersCoats" element={<BlazersCoats />} />
        <Route path="/Suits" element={<Suits />} />
        <Route path="/Pheran" element={<Pheran/>} />
        <Route path="/TurbanorSkullCap" element={<TurbanorSkullCap/>} />
        <Route path="/WaistcoatorAchkan" element={<WaistcoatorAchkan />} />
        <Route path="/KurtasKurtaSets" element={<KurtasKurtaSets />} />
        <Route path="/Sherwanis" element={<Sherwanis />} />
        <Route path="/Jeans" element={<Jeans />} />
        <Route path="/CasualTrousers" element={<CasualTrousers />} />
        <Route path="/FormalTrouser" element={<FormalTrouser />} />
        <Route path="/Shorts" element={<Shorts />} />
        <Route path="/TrackPantsJoggers" element={<TrackPantsJoggers />} />
        <Route path="/Boxers" element={<Boxers />} />
        <Route path="/Vests" element={<Vests />} />
        <Route path="/Thermals" element={<Thermals />} />
        <Route path="/SleepwearLoungewear" element={<SleepwearLoungewear />} />
        <Route path="/CasualShoes" element={<CasualShoes />} />
        <Route path="/FormalShoes" element={<FormalShoes />} />
        <Route path="/Sneakers" element={<Sneakers />} />
        <Route path="/SandalsFloaters" element={<SandalsFloaters />} />
        <Route path="/FlipFlops" element={< FlipFlops/>} />
        <Route path="/Socks" element={< Socks/>} />
        <Route path="/PersonalCareGrooming" element={<PersonalCareGrooming />} />
        <Route path="/SunglassesFrames" element={<SunglassesFrames/>} />
        <Route path="/SportsShoes" element={<SportsShoes/>} />
        <Route path="/SportsSandles" element={<SportsSandles/>} />
        <Route path="/ActiveTShirt" element={<ActiveTShirt/>} />
        <Route path="/Tracksuits" element={<Tracksuits/>} />
        <Route path="/JacketsSweatshirts" element={<JacketsSweatshirts/>} />
        <Route path="/TrackPantsShirts" element={<TrackPantsShirts/>} />
        <Route path="/SportAccessories" element={<SportAccessories/>} />
        <Route path="/Swimwear" element={<Swimwear/>} />
        <Route path="/SmartWearables" element={<SmartWearables />} />
        <Route path="/FitnessGadgets " element={<FitnessGadgets />} />
        <Route path="/Headphones " element={<Headphones />} />
        <Route path="/Speakers " element={<Speakers />} />
        <Route path="/Wallets " element={<Wallets />} />
        <Route path="/Belts" element={<Belts />} />
        <Route path="/PerfumesBodyMist " element={<PerfumesBodyMist />} />
        <Route path="/Trimmers " element={<Trimmers />} />
        <Route path="/Deodorants " element={<Deodorants />} />
        <Route path="/TiesCufflinksPocketSquares" element={<TiesCufflinksPocketSquares />} />
        <Route path="/AccessoryGifts " element={<AccessoryGifts />} />
        <Route path="/CapsHats " element={<CapsHats />} />
        <Route path="/MufflersScarvesGloves " element={<MufflersScarvesGloves />} />
        <Route path="/PhoneCovers " element={<PhoneCovers />} />
        <Route path="/RingsWristwear " element={<RingsWristwear />} />
        <Route path="/Helmets " element={<Helmets />} />
        <Route path="/Payment " element={<Payment />} />
        <Route path="/Jackets" element={<Jackets />} />
 
        
 






        <Route path="/Watches" element={<Watches/>} />
        <Route path="/" element={<Tshirt products={products} />} />
        <Route path="/products/:id"  element={<ProductDetail products={products} />} />
        <Route path="/:category/:id" element={<ProductDetail products={products} />} />
       <Route path="/Tshirt/Payment" element={<Payment />} />
     // In your router configuration
<Route path="/OrderSuccess" element={<OrderSuccess />} />
    
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
