
const products = [
    {
      id: 1,
      name: 'Loga Sea',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/3788363/pexels-photo-3788363.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$7000',
      color: 'Black',
      class: 'Relax',
      timeTable: '3 Days, 3 Nights'
    },
    {
      id: 2,
      name: 'Ansgar Scheffold',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      class: 'Relax',
      timeTable: '3 Days, 3 Nights'
    },
    {
      id: 3,
      name: 'Lona X',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/3722813/pexels-photo-3722813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      class: 'Relax',
      timeTable: '3 Days, 3 Nights'
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1974993/pexels-photo-1974993.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      class: 'Relax',
      timeTable: '3 Days, 3 Nights'
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/3155658/pexels-photo-3155658.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      class: 'Relax',
      timeTable: '3 Days, 3 Nights'
    },
    {
      id: 6,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1209392/pexels-photo-1209392.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      class: 'Relax',
      timeTable: '3 Days, 3 Nights'
    },
    {
      id: 7,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/3266124/pexels-photo-3266124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      class: 'Relax',
      timeTable: '3 Days, 3 Nights'
    },
    {
      id: 8,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/3894868/pexels-photo-3894868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
      class: 'Relax',
      timeTable: '3 Days, 3 Nights'
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Special Upcoming Offers</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-slate-200  p-1 rounded-2xl">
                <div className="w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none rounded-2xl">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full p-4 rounded-2xl"
                  />
                </div>
                <div className="my-3">
                    <span className="bg-red-100 px-4 py-1 rounded-2xl text-red-600">{product.class}</span>
                    <span className=" mx-5 px-4 py-1 rounded-2xl border-double border-4 border-black text-black">{product.timeTable}</span>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md font-bold text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-md  font-bold text-gray-900">{product.price}/Person</p>
                </div>
                <button className="py-1 px-4 bg-blue-300 text-blue-600 rounded-full ">Book Now</button>

              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  