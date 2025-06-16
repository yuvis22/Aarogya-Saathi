import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Bell, Calendar, Shield, Users, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Pack-by-Dose Delivery',
    description: 'Precisely organized medication packets delivered to your doorstep, sorted by date and time for perfect adherence.',
    color: 'text-primary'
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Intelligent notification system that reminds you when to take your medication, ensuring you never miss a dose.',
    color: 'text-accent'
  },
  {
    icon: Calendar,
    title: 'Medication Scheduling',
    description: 'Comprehensive scheduling system that organizes your entire medication routine with precision and care.',
    color: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Pharmaceutical-grade packaging and handling ensures your medications maintain their efficacy and safety.',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Family Care',
    description: 'Manage medications for multiple family members with separate profiles and customized delivery schedules.',
    color: 'text-purple-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'User-friendly mobile application for easy ordering, tracking, and managing your medication delivery service.',
    color: 'text-pink-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From precise medication packaging to intelligent reminders, we provide end-to-end solutions 
            for your medication management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 group-hover:bg-white transition-colors duration-300 mb-4 mx-auto`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}