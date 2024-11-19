import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Navbar = ({ onSearch }) => {
  const item = [
    "Fresh",
    "MX Player",
    "Sell",
    "Gift Cards",
    "Amazon Pay",
    "Buy Again",
    "AmazonBasics",
    "Gift Ideas",
    "Today's Deals",
    "Prime",
    "Home & Kitchen",
    "Fashion",
    "Computers",
    "Toys & Games",
    "Car & Motorbike",
    "Baby",
    "Pet Supplies",
    "Video Games",
    "Previous slide",
  ];
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
    onSearch(searchQuery);
    setIsSearchVisible(false);
  };

  return (
    <nav className="bg-[#131921] text-white sticky top-0 z-50">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      <div className="flex flex-col">
        <div className="flex items-center p-1 py-2 pl-4 pr-2">
          <button className="mr-2 lg:hidden" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
            </svg>
          </button>

          <Link to="/" className={`flex-shrink-0 ${isSearchVisible ? 'hidden md:flex' : 'flex'}`}>
            <div className="flex items-center mr-2 md:mr-4">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="h-[25px] md:h-[35px] object-contain cursor-pointer mt-2" />
              <span className="ml-1 text-xs text-white">.in</span>
            </div>
          </Link>

          <div className={`hidden md:flex items-center mr-4 hover:outline hover:outline-1 hover:outline-white p-2 cursor-pointer ${isSearchVisible ? 'md:hidden' : ''}`}>
            <div className="pr-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-200">Deliver to</p>
              <p className="text-sm font-bold">India</p>
            </div>
          </div>

          <form onSubmit={handleSearch} className={`flex-grow mx-2 ${isSearchVisible ? 'flex' : 'hidden md:flex'}`}>
            <div className="flex items-center w-full h-10 rounded-md">
              <div className="items-center hidden h-full px-4 text-sm text-gray-600 bg-gray-200 cursor-pointer md:flex rounded-l-md hover:bg-gray-300">
                All
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <input 
                type="text" 
                className="flex-grow h-full p-2 text-black focus:outline-none rounded-l-md md:rounded-none" 
                placeholder="Search Amazon.in" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
              />
              <button type="submit" className="h-full px-5 bg-[#febd69] hover:bg-[#f3a847] cursor-pointer rounded-r-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </form>

          <button 
            onClick={toggleSearch}
            className={`md:hidden mx-2 ${isSearchVisible ? 'hidden' : 'block'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          {isSearchVisible && (
            <button 
              onClick={toggleSearch}
              className="mx-2 md:hidden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          <div className={`hidden md:flex items-center space-x-4 mx-6 whitespace-nowrap ${isSearchVisible ? 'md:hidden' : ''}`}>
            <div className="flex items-center p-2 cursor-pointer hover:outline hover:outline-1 hover:outline-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" alt="Flag" className="h-4 mr-1" />
              <span className="text-sm font-bold">EN</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className="p-2 cursor-pointer link hover:outline hover:outline-1 hover:outline-white">
              <p className="text-xs">Hello, User</p>
              <p className="text-sm font-bold">
                Account & Lists
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="inline w-4 h-4 ml-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </p>
            </div>
            <div className="p-2 cursor-pointer link hover:outline hover:outline-1 hover:outline-white">
              <p className="text-xs">Returns</p>
              <p className="text-sm font-bold">& Orders</p>
            </div>
          </div>

          <Link to="/cart" className={`flex items-center hover:outline hover:outline-1 hover:outline-white p-2 rounded-sm cursor-pointer ${isSearchVisible ? 'hidden md:flex' : 'flex'}`}>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="absolute top-0 right-0 h-4 w-4 bg-[#f3a847] text-black font-bold rounded-full flex items-center justify-center text-xs">
                {cartTotalQuantity}
              </span>
            </div>
            <span className="hidden mt-3 ml-1 text-sm font-bold md:inline">Cart</span>
          </Link>
        </div>

        <div className={`flex items-center bg-[#232f3e] text-sm w-full overflow-x-auto ${isSearchVisible ? 'hidden md:flex' : 'flex'}`}>
          <div className="flex items-center w-full px-4 py-2 space-x-4 text-base">
            <div className="flex items-center px-2 py-1 cursor-pointer hover:outline hover:outline-1 hover:outline-white" onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
              </svg>
              <span>All</span>
            </div>
            {
              item.map((data)=>(
                <p className="flex flex-row flex-wrap cursor-pointer hover:outline hover:outline-1 hover:outline-white text-wrap">{data}</p>
              ))
            }
           
            {/* <p className="px-2 py-1 cursor-pointer hover:outline hover:outline-1 hover:outline-white">Mobiles</p>
            <p className="px-2 py-1 cursor-pointer hover:outline hover:outline-1 hover:outline-white">Electronics</p>
            <p className="hidden px-2 py-1 cursor-pointer md:block hover:outline hover:outline-1 hover:outline-white">Customer Service</p>
            <p className="hidden px-2 py-1 cursor-pointer lg:block hover:outline hover:outline-1 hover:outline-white">Prime</p>
            <p className="hidden px-2 py-1 cursor-pointer lg:block hover:outline hover:outline-1 hover:outline-white">Fashion</p>
            <p className="hidden px-2 py-1 cursor-pointer xl:block hover:outline hover:outline-1 hover:outline-white">New Releases</p>
            <p className="hidden px-2 py-1 cursor-pointer xl:block hover:outline hover:outline-1 hover:outline-white">Home & Kitchen</p> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;