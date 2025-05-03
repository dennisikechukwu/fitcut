export default function PricingSection() {
    return (
      <section className="bg-black text-white py-20 px-4 ">
        <div className='space-y-2 mb-12'>
            <h1 className='text-center text-3xl md:text-4xl font-semibold'>Start Your Fitness  <br className='hidden md:block'/> Journey Today </h1>
            <p className='text-center text-gray-400'>Personalized training plans, expert guidance, and accountability   <br className='hidden md:block'/>at a price you’ll love.</p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              label: "PRO",
              price: "$20",
              subtext: "Renews at $40/month after trial",
              features: [
                "Personalized weekly workouts",
                "Direct messaging with your coach",
                "Flexible scheduling to fit your life",
                "Trackable progress and analytics",
                "Daily motivational check-ins",
                "Cancel or pause anytime",
              ],
            },
            {
              label: "ULTRA",
              price: "$40",
              subtext: "Renews at $80/month after trial",
              features: [
                "Fully customized fitness & nutrition plans",
                "Unlimited video calls with your coach",
                "Priority access to top-tier trainers",
                "In-depth progress tracking & reports",
                "Mental wellness & recovery sessions",
                "Cancel or pause anytime",
              ],
            },
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
                <p className="text-sm text-gray-800 mb-4">{plan.subtext}</p>
  
                <ul className="text-sm space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>+ {feature}</li>
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
  