import React from 'react';

const CompanyPage = () => {
  return (
    <div className="bg-white text-black flex-col ">
    
            <section className="py-5">
                <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">About company</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                    <div className="p-5 h-2/3 rounded-lg shadow-md">
                        <img src="/images/burger.jpg" alt="burger" className="w-full h-full rounded-md mb-4"/>
                    </div>
                    <div className="container mx-auto text-center text-black">
                        <h1 className="text-5xl font-bold mb-4">Where Quality Food Meets Excellent Service</h1>
                        <p className="text-lg mb-8">
                            It's the perfect dining experience where every dish is crafted with fresh, high-quality ingredients and served by friendly staff who go the extra mile.
                        </p>
                        <div className="flex space-x-4">
                            <div className="flex flex-col items-center mx-16">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Fast Foods
                                <p className="text-sm mt-2">
                                Enjoy quick and delicious meals.
                            </p>
                            </button>
                            
                            </div>
                            <div className="flex flex-col items-center">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Healthy Foods
                                <p className="text-sm mt-2">
                                Opt for nutritious and wholesome options.
                            </p>
                            </button>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-5">
                            <div className="flex flex-col items-center px-20">
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            About more
                            </button>
                            
                            </div>
                            <div className="flex flex-col  mr-100">
                            <div className=" text-red-700 text-3xl font-bold py-2 px-4 rounded">
                                Ronald Richards
                                <p className="text-2xl mt-2">
                                Founder & CEO
                            </p>
                            </div>
                            </div>
                        </div>
                    </div>
                   

                </div>
                </div>
            </section>
    </div>
  );
};

export default CompanyPage;