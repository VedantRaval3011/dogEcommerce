import { Heart, Shield, Truck, Award } from 'lucide-react';

const About = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About PetShop</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about providing the highest quality products for your beloved pets.
          Our carefully curated selection ensures that your furry friends receive the best care possible.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Heart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
          <p className="text-gray-600">Every product is chosen with care and love for pets</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
          <p className="text-gray-600">We stand behind the quality of our products</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Truck className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Best Selection</h3>
          <p className="text-gray-600">Curated collection of premium pet products</p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-4">
            Founded in 2025, PetShop began with a simple mission: to provide pet owners with the highest quality products for their beloved companions. We understand that pets are family members, and they deserve the very best care possible.
          </p>
          <p className="mb-4">
            Our team of pet enthusiasts carefully selects each product in our inventory, ensuring that it meets our strict standards for quality, safety, and value. From premium food and treats to comfortable beds and engaging toys, every item is chosen with your pet's wellbeing in mind.
          </p>
          <p>
            We're committed to supporting responsible pet ownership and contributing to animal welfare causes. A portion of every purchase goes towards supporting local animal shelters and rescue organizations.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;