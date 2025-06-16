import { Card, CardContent } from '@/components/ui/card';
import { Upload, Package, Truck, Bell } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload Prescription',
    description: 'Simply upload your prescription or medication list through our secure platform.',
    color: 'bg-primary'
  },
  {
    step: '02',
    icon: Package,
    title: 'Smart Packaging',
    description: 'Our pharmacy team carefully organizes your medications into date and time-specific packets.',
    color: 'bg-accent'
  },
  {
    step: '03',
    icon: Truck,
    title: 'Doorstep Delivery',
    description: 'Receive your perfectly organized medication packets delivered safely to your home.',
    color: 'bg-blue-600'
  },
  {
    step: '04',
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Get timely notifications and reminders to ensure you never miss a dose.',
    color: 'bg-green-600'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Aarogya Saathi Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes medication management effortless. 
            From prescription to perfect adherence in just four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-gray-100 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white mb-6 -mt-12 relative z-10`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}