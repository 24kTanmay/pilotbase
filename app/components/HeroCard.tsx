import { cn } from "@/lib/utils";

export default function HeroCard() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Enhanced Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient overlay for faded effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to PilotBase
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline your workflow with our innovative platform designed to help you achieve more with less effort.
          </p>
          
          {/* CTA Section with focused radial background */}
          <div className="relative">
            {/* Strong radial fade overlay behind CTA buttons - centered to website */}
            <div 
              className="absolute -z-10" 
              style={{
                left: '50%',
                top: '50%',
                width: '1260px',
                height: '360px',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(ellipse 1260px 360px at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, transparent 80%)'
              }}
            ></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow-lg transition duration-300">
                Get Started Free
              </button>
              <button className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Extended Grey Container - Why Choose PilotBase */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
            {/* Why Choose PilotBase Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose PilotBase?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of users who trust our platform for their workflow needs
              </p>
            </div>
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Performance</h3>
                <p className="text-gray-600">Lightning-fast speeds that keep your workflow moving smoothly.</p>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee.</p>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 shadow-sm">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h3>
                <p className="text-gray-600">Intuitive design that makes complex tasks simple and enjoyable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
