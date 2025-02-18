import React from 'react';
import img1 from "../Assets/dp-img1.png";
import img2 from "../Assets/dp-img2.jpg";
import img3 from "../Assets/dp-img3.jpg";
import img4 from "../Assets/Healthy Food.png";
import img5 from "../Assets/Home Made.png";
import img6 from "../Assets/Natural.png";
import img7 from "../Assets/Fast Delivery.png";
import img8 from "../Assets/flowerkolly.png";
import cherry from "../Assets/cherry.png";
import tomato from "../Assets/tomato-slice.png";
import orange from "../Assets/orange-slice.png";
import plate from "../Assets/plate.png";
import product1 from "../Assets/product1.jpg"; // Add product images
import product2 from "../Assets/product2.jpg";
import product3 from "../Assets/product3.jpg";
import product4 from "../Assets/product4.jpg";
import { MdDoubleArrow } from 'react-icons/md';
import './DisplaySection.css';
import { TypeAnimation } from 'react-type-animation';

export default function DisplaySection() {
    return (
        <div className='mx-[100px] mt-[25px]'>

            <div className='flex gap-[51px]'>

                {/* First Section */}
                <div className='display-first-section'>
                    <img src={img8} className="absolute -z-10" alt="" />
                    <div data-aos="fade-down" data-aos-duration="2000" className="absolute right-[40px] top-[20px]">
                        <img src={cherry} alt="" />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className="absolute right-[242px] bottom-[60px]">
                        <img src={tomato} alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className="absolute right-[50px] bottom-[30px]">
                        <img src={orange} alt="" />
                    </div>
                    <div className="absolute left-[-150px] bottom-[-180px]">
                        <img src={plate} className="rotate" alt="" />
                    </div>
                    <div className='content-sec-one'>
                        <h2>DELICIOUS</h2>
                        <h1>SALAD</h1>
                        <h3>
                            <TypeAnimation
                                sequence={['EVERYDAY.', 2000, '']}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h3>
                        <div className='shop-now-btn ml-[250px]'>
                            <button>Shop Now</button>
                            <MdDoubleArrow className='ml-1 ' />
                        </div>
                    </div>
                    <img src={img1} alt="" />
                </div>

                {/* Second Section */}
                <div className='grid gap-[30px]'>
                    <div className='relative'>
                        <div className='content-section-two'>
                            <h1>Fresh</h1>
                            <h2>Vegitables</h2>
                            <div className='shop-now-btn'>
                                <button>Shop Now</button>
                                <MdDoubleArrow className='ml-1 ' />
                            </div>
                        </div>
                        <div className="hover05 column">
                            <div>
                                <figure>
                                    <img src={img2} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='content-section-three'>
                            <h1>Fresh</h1>
                            <h2>EVERYDAY</h2>
                            <div className='shop-now-btn'>
                                <button>Shop Now</button>
                                <MdDoubleArrow className='ml-1 ' />
                            </div>
                        </div>
                        <div className="hover05 column">
                            <div>
                                <figure>
                                    <img src={img3} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sub Section */}
            {/* <div className='sub-section'>
                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img4} className="w-[93px] h-[93px]" alt="" />
                        <div>
                            <h2>Healthy Food</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>
                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img5} className="w-[95px] h-[95px]" alt="" />
                        <div>
                            <h2>Home Made</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>
                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img6} className="w-[76px] h-[81px]" alt="" />
                        <div>
                            <h2>100% Natural</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>
                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img7} className="w-[119px] h-[64px]" alt="" />
                        <div>
                            <h2>Fast Delivery</h2>
                            <p>It is a long established <br /> fact that </p>
                        </div>
                    </div>
                </div>
            </div> */}+
            


            <hr className='mt-[30px]' />

            {/* Products Section */}
            <div className='flex justify-between mt-[50px]'>
                <div className='product-card'>
                    <img src={product1} className="product-image" alt="Product 1" />
                    <h3>Fresh Carrots</h3>
                    <p>$5.99</p>
                    <button
                        className="buy-now-btn"
                        onClick={() => (window.location.href = 'http://localhost:8080/?amount=5.99')}
                    >
                        Buy Now
                    </button>
                </div>
                <div className='product-card'>
                    <img src={product2} className="product-image" alt="Product 2" />
                    <h3>Organic Tomatoes</h3>
                    <p>$3.49</p>
                    <button
                        className="buy-now-btn"
                        onClick={() => (window.location.href = 'http://localhost:8080/?amount=3.49')}
                    >
                        Buy Now
                    </button>
                </div>
                <div className='product-card'>
                    <img src={product3} className="product-image" alt="Product 3" />
                    <h3>Juicy Oranges</h3>
                    <p>$6.99</p>
                    <button
                        className="buy-now-btn"
                        onClick={() => (window.location.href = 'http://localhost:8080/?amount=6.99')}
                    >
                        Buy Now
                    </button>
                </div>
                <div className='product-card'>
                    <img src={product4} className="product-image" alt="Product 4" />
                    <h3>Sweet Strawberries</h3>
                    <p>$4.99</p>
                    <button
                        className="buy-now-btn"
                        onClick={() => (window.location.href = 'http://localhost:8080/?amount=4.99')}
                    >
                        Buy Now
                    </button>
                </div>
            </div>


        </div>
    );
}
