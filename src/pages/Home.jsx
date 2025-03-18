import React from 'react';
import "./styles.css"

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Happy dog"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Welcome to Paws & Whiskers
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Where every tail wag and purr tells a story of love, care, and premium pet products
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              It all began with a scruffy little pup named Max and a dream to give pets the very best. 
              In 2015, our founders Sarah and James noticed how difficult it was to find high-quality, 
              safe products for their furry friends.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small family operation has grown into a passionate community of pet lovers. 
              Today, we curate only the finest products - from organic treats to eco-friendly toys - 
              ensuring every pet gets the love they deserve.
            </p>
            <p className="text-gray-600">
              Every purchase supports our mission to rescue and care for animals in need, making 
              every wag and purr part of our bigger story.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Pet store founders"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl mb-4">🐾</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected products that meet the highest standards for your pet's health and happiness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable products that care for your pet and the planet we all share.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Giving Back</h3>
              <p className="text-gray-600">
                Supporting animal shelters and rescue operations with every purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What Our Friends Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">
              "My dog Luna has never been happier! The organic treats and sturdy toys have become 
              her favorites. Plus, knowing we're helping other pets in need makes it even better."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Emily R.</p>
                <p className="text-gray-500 text-sm">Proud Dog Mom</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">
              "The quality is unmatched, and the customer service is amazing. Our cat Mr. Whiskers 
              loves his new bed, and we love supporting a company with a heart."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Customer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Michael T.</p>
                <p className="text-gray-500 text-sm">Cat Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join Our Pet-Loving Family</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Discover premium products and become part of a community that celebrates the joy of pets.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;