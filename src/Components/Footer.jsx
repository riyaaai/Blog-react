import React from 'react'
import logo from "../assets/logo.svg"



const Footer = () => {

  return (

    <footer className="bg-gray-100 px-8 pt-12 pb-5">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      



        <div>

          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="" />
            <h2 className="text-2xl font-bold">QuickBlog</h2>
          </div>


          <p className="text-gray-500 text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Rerum unde velit eveniet cumque accusamus atque qui
            error quo enim fugiat?
          </p>
        </div>




        
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#home" className="text-gray-500 hover:text-blue-600">Home</a>
          <a href="#blogs" className="text-gray-500 hover:text-blue-600">Best Sellers</a>
          <a href="#blogs" className="text-gray-500 hover:text-blue-600">Offers & Deals</a>
          <a href="#footer" className="text-gray-500 hover:text-blue-600">Contact Us</a>
          <a href="#footer" className="text-gray-500 hover:text-blue-600">FAQs</a>
        </div>

       



        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Need help?</h3>
          <a href="#footer" className="text-gray-500 hover:text-blue-600">Delivery Information</a>
          <a href="#footer" className="text-gray-500 hover:text-blue-600">Return & Refund Policy</a>
          <a href="#footer" className="text-gray-500 hover:text-blue-600">Payment Methods</a>
          <a href="#footer" className="text-gray-500 hover:text-blue-600">Track your Order</a>
          <a href="#footer" className="text-gray-500 hover:text-blue-600">Contact Us</a>
        </div>

      



      
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <a href="https://instagram.com" className="text-gray-500 hover:text-blue-600">Instagram</a>
          <a href="https://twitter.com" className="text-gray-500 hover:text-blue-600">Twitter</a>
          <a href="https://facebook.com" className="text-gray-500 hover:text-blue-600">Facebook</a>
          <a href="https://youtube.com" className="text-gray-500 hover:text-blue-600">YouTube</a>
        </div>

      </div>

      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-500">
        © 2026 QuickBlog. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer