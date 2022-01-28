/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import HeroSection from '../Hero Sections/HeroSections'
const features = [
  {
    name: 'Solutions',
    description:
      'At World Travel, Inc., we value innovation. It leads to creative solutions and new technologies that improve your experience.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Services',
    description:
      'Travel is a service industry, and we have over 37 years of experience. Trust our people to find the answers you need.',
    icon: ScaleIcon,
  },
  {
    name: 'Education',
    description:
      'Join our subject matter experts at one of the many industry events we host to help you stay informed about what’s going on in the travel industry.',
    icon: LightningBoltIcon,
  },
  {
    name: 'OUR EXPERTISE',
    description:
      'We are dedicated to helping our clients improve their travel program by making it easier to manage, and easier for travelers to travel. Since 1983, our company has been growing and hiring travel experts who are passionate about our industry. We take pride in finding the best solutions for our valued clients.',
    icon: AnnotationIcon,
  },
]

export default function Example() {
  return (
    <div className=" bg-white">
      <div className='bg-gray-300'>
                <HeroSection></HeroSection>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          WE MAKE TRAVEL SIMPLE!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          World Travel, Inc. is a global mid-market leader in corporate travel management. As the largest organically grown travel management company in the United States, we’ve grown steadily and sustainably since 1983. We are 100% employee-owned, as well as entirely focused on providing our clients with superior service, state-of-the-art technology, consulting services, and customization to meet their business needs. 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
