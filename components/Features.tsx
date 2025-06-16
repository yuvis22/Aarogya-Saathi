import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Shield, 
  Smartphone, 
  Users, 
  MapPin, 
  Headphones,
  CheckCircle,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service with emergency medication delivery when you need it most.',
    badge: 'Always Open'
  },
  {
    icon: Shield,
    title: 'Secure & Licensed',
    description: 'Fully licensed pharmacy with secure handling and storage of all medications.',
    badge: 'Certified'
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Intuitive mobile application for easy ordering, tracking, and medication management.',
    badge: 'User Friendly'
  },
  {
    icon: Users,
    title: 'Family Profiles',
    description: 'Manage medications for entire family with separate profiles and schedules.',
    badge: 'Multi-User'
  },
  {
    icon: MapPin,
    title: 'GPS Tracking',
    description: 'Real-time delivery tracking so you know exactly when your medications will arrive.',
    badge: 'Live Updates'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated customer support team with pharmaceutical expertise available 24/7.',
    badge: 'Professional'
  }
];

const stats = [
  { number: '50,000+', label: 'Happy Customers' },
  { number: '99.9%', label: 'On-Time Delivery' },
  { number: '24/7', label: 'Customer Support' },
  { number: '100%', label: 'Secure & Safe' }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Aarogya Saathi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of medication management with our comprehensive features 
            designed to make your health journey seamless and worry-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-900">FDA Approved</h4>
                <p className="text-gray-600">All medications are FDA approved and verified</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Star className="w-8 h-8 text-yellow-500" />
              <div>
                <h4 className="font-semibold text-gray-900">5-Star Rated</h4>
                <p className="text-gray-600">Trusted by thousands of satisfied customers</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-900">HIPAA Compliant</h4>
                <p className="text-gray-600">Your health information is secure and protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}