import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="sm:mx-20 mx-5">
      <div className="flex flex-wrap">
        <div className="w-full">
            <h1 className="sm:text-1xl text-3xl font-bold">Recommended Destination</h1>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-500 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Populor
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-500 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Adventure
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blue-500 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Beath
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.ibb.co/s1kxJXB/unsplash-CSpj-U6h-Yo-0.png"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.ibb.co/CHSbstX/unsplash-Dlk-F4-db-COU.png"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.ibb.co/QnQkp8Y/unsplash-K-Tb-ABn-Vz-Ho.png"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?cs=srgb&dl=pexels-francesco-ungaro-2325446.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Piramid</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Egypt</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?cs=srgb&dl=pexels-pierre-blach%C3%A9-2901209.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?cs=srgb&dl=pexels-sam-kolder-2387873.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-1660995.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.ibb.co/TgDpTSX/unsplash-Ai2-TRdv-I6g-M.png"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.ibb.co/s1kxJXB/unsplash-CSpj-U6h-Yo-0.png"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?cs=srgb&dl=pexels-tirachard-kumtanom-347141.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1591373.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?cs=srgb&dl=pexels-pierre-blach%C3%A9-2901209.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?cs=srgb&dl=pexels-sam-kolder-2387873.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?cs=srgb&dl=pexels-gabriela-palai-507410.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.ibb.co/TgDpTSX/unsplash-Ai2-TRdv-I6g-M.png"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Cambodia</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.ibb.co/s1kxJXB/unsplash-CSpj-U6h-Yo-0.png"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Kina Mountain</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Ansgar Scheffold</p>
                        </div>
                    </div>
                    
                    
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1831236/pexels-photo-1831236.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1831236.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Tivat</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Montenegro</p>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?cs=srgb&dl=pexels-riciardus-307008.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">San Juan Bautista </h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Spain</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?cs=srgb&dl=pexels-te-lensfix-1371360.jpg&fm=jpg"/>
                        </a>
                        <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">Tambon Khlong Sok</h2>
                        <p class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline -mt-1 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>Thailand</p>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs color='blue'/>
    </>
    
  );
}