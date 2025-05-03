export default function PricingSection() {
    return (
      <section className="bg-black text-white py-20 px-4 ">
        <div className='space-y-2 mb-12'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold'>Start Your Fitness  <br className='hidden md:block'/> Journey Today </h1>
            <p className='text-center text-gray-400'>Personalized training plans, expert guidance, and accountability   <br className='hidden md:block'/>at a price you’ll love.</p>
        </div>
  
        <div className="grid  max-w-[640px] mx-auto">
          {[
            {
              label: "PRO",
              price: "$20",
              
              features: [
                "Get the most out of your fitness journey with personalized weekly workouts tailored to your goals. Stay connected through direct messaging with your coach for support and guidance whenever you need it. Enjoy flexible scheduling that fits seamlessly into your lifestyle, while tracking your progress with detailed analytics. Stay motivated with daily check-ins designed to keep you on track. Plus, you can cancel or pause your plan anytime—no strings attached."

                
              ],
            }
           
          ].map((plan, i) => (
            <div
              key={i}
              className="bg-green-400 text-black p-6 rounded-2xl flex flex-col justify-between shadow-xl"
            >
              <div>
                <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-4">
                  {plan.label}
                </span>
                <h3 className="text-2xl font-semibold mb-1">
                  {i === 0
                    ? "Try your first month for just"
                    : "Unlock your full potential for just"}
                </h3>
                <p className="text-4xl font-bold mb-1">{plan.price}</p>
  
                <ul className="text-sm space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
  
              <button className="bg-black text-white font-semibold rounded-full py-3 mt-6 hover">
                Get Started for {plan.price}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  