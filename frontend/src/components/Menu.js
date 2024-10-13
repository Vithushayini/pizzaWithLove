import React from "react";

const Menu = () => {
    return (
        <div className="bg-white text-black">
            {/* Featured items section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Our Special Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                    <div className="bg-white text-black p-6 rounded-lg shadow-md">
                    <img src="/images/burger.jpg" alt="burger" className="w-full h-48 object-cover rounded-md mb-4"/>
                    <h3 className="text-2xl font-bold mb-2">Burger</h3>
                    <p className="text-lg">$9.99</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-md">
                    <img src="images/pizza.jpg" alt="pizza" className="w-full h-48 object-cover rounded-md mb-4"/>
                    <h3 className="text-2xl font-bold mb-2">Pizza</h3>
                    <p className="text-lg">$12.99</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-md">
                    <img src="images/pasta.jpg" alt="pasta" className="w-full h-48 object-cover rounded-md mb-4"/>
                    <h3 className="text-2xl font-bold mb-2">Pasta</h3>
                    <p className="text-lg">$8.99</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Menu;