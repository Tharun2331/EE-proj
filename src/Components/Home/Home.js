import React from 'react'
import "./Home.css";
import Product from "../Products/Product";


function Home() {
    return (
        <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"
            alt="image"
          />
           <div className="home__row">
             <Product
             id="12345" 
             title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
             image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" 
             rating={5}
             price= {39.99}
          
             />
           <Product
            id="45678" 
            title = "Design Thinking para principiantes: La innovación como factor para el éxito empresarial (Spanish Edition)"
            image="https://m.media-amazon.com/images/I/5138-DfI31L.jpg" 
            rating={4}
            price= {119.99}
           
           />
           <Product
            id="49678" 
            title = "Data Structures & Algorithms in Java 2nd Edition"
            image="https://images-na.ssl-images-amazon.com/images/I/41Z5qz-YSmL._SX378_BO1,204,203,200_.jpg" 
            rating={4}
            price= {128.99}
           
           />
               
           </div>
           
           <div className="home__row">
             <Product
                id="98451"  
                title = "Samsung Electronics Galaxy Note 20 Ultra 5G Factory Unlocked Android Cell Phone, US Version, 128GB of Storage, Mystic Bronze"
                image="https://m.media-amazon.com/images/I/813y2+dPUOL._AC_UY327_FMwebp_QL65_.jpg" 
                rating={5}
                price= {900.00}
             />
             <Product
                id="94833"  
                title = "Amazon Echo (3rd Gen) – Improved sound, powered by Dolby "
                image="https://m.media-amazon.com/images/I/61Gob-M3snL._AC_UY327_FMwebp_QL65_.jpg" 
                rating={4}
                price= {89.99}
             />
             <Product 
                id="37239" 
                title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
                image="https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UY327_FMwebp_QL65_.jpg" 
                rating={5}
                price= {949.00}
             />
           
           </div>

    

           <div className="home__row">
           <Product 
           id="12347"    
           title = "PUMA Men's Cell Regulate Sneaker"
           image="https://m.media-amazon.com/images/I/81+EqPV2XAL._AC_UL480_FMwebp_QL65_.jpg" 
           rating={5}
           price= {1543.09}
           />
           <Product 
           id="12349"    
           title = "BRONAX Men's Stylish Graffiti Personality Sneakers"
           image="https://images-na.ssl-images-amazon.com/images/I/81VI%2B7lR4DL._AC_UX575_.jpg" 
           rating={4}
           price= {1223.09}
           />
           <Product 
           id="37232" 
           title = "adidas Men's CF Lite Racer Byd"
           image="https://images-na.ssl-images-amazon.com/images/I/81T7Ku7-thL._AC_UX575_.jpg" 
           rating={4}
           price= {949.00}
        />

          </div> 
            
          <div className="home__row">
          <Product 
          id="98609"    
          title = "KUYIGO Men’s Casual Slim Fit Shirts Pure Color Long Sleeve Polo Fashion T-Shirts"
          image="https://m.media-amazon.com/images/I/71tQE5MV4ZL._AC_UL480_FMwebp_QL65_.jpg" 
          rating={5}
          price= {1043.09}
          />
          <Product 
          id="98609"    
          title = "PUMA Men's  T-Shirts"
          image="https://m.media-amazon.com/images/I/51mtnhLTB4L._AC_UL480_FMwebp_QL65_.jpg" 
          rating={5}
          price= {1043.09}
          />
          <Product 
          id="21309"    
          title = "MISSMAY Women's Vintage Floral Lace Long Sleeve Boat Neck Cocktail Party Swing Dress"
          image="https://m.media-amazon.com/images/I/81qyP-akaBL._MCnd_SEARCH281250_AC_UL480_FMwebp_QL65_.jpg" 
          rating={5}
          price= {1043.09}
          />
         </div> 
         
         <div className="home__row">
         <Product 
         id="38639"    
         title = "Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band"
         image="https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_UY327_FMwebp_QL65_.jpg" 
         rating={5}
         price= {1543.09}
         />
         <Product 
         id="48639"    
         title = "Samsung Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring 
         Fitness Tracking  and Long Lasting Battery - Silver "
         image="https://m.media-amazon.com/images/I/51bSW9gjoaL._AC_UY327_FMwebp_QL65_.jpg" 
         rating={5}
         price= {1543.09}
         />

         <Product 
         id="58639"    
         title = "Fossil Gen 5 Carlyle Stainless Steel Touchscreen Smartwatch with Speaker, Heart Rate, GPS, NFC, and Smartphone Notifications"
         image="https://m.media-amazon.com/images/I/71XWG48C-NL._AC_UL480_FMwebp_QL65_.jpg" 
         rating={5}
         price= {1543.09}
         />
         </div> 


           
          <div className="home__row">
          <Product 
          id="98639"    
          title = "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg" 
          rating={5}
          price= {1543}
          />
          <Product 
          id="88639"    
          title = "SAMSUNG 65-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV"
          image="https://m.media-amazon.com/images/I/61DIUfDxBtL._AC_UY327_FMwebp_QL65_.jpg" 
          rating={5}
          price= {1430}
          />
          <Product 
          id="78639"    
          title = "TCL 50S425 50 inch 4K Smart LED ROKU TV (2019)"
          image="https://m.media-amazon.com/images/I/71tN5cFBvFL._AC_UY327_FMwebp_QL65_.jpg" 
          rating={4}
          price= {1500}
          />
         </div> 

        </div>
      </div>
    )
}

export default Home;
