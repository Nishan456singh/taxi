"use client"
import React, { useState } from 'react'

const locations = [
    { name: "Alamo", oak: 95, sfo: 130, sjc: 130 },
    { name: "Antioch", oak: 120, sfo: 150, sjc: 150 },
    { name: "Bystrom", oak: 150, sfo: 189, sjc: 150 },
    { name: "Brentwood", oak: 140, sfo: 150, sjc: 159 },
    { name: "Ceres", oak: 200, sfo: 250, sjc: 250 },
    { name: "Clayton", oak: 120, sfo: 150, sjc: 150 },
    { name: "Concord", oak: 95, sfo: 150, sjc: 150 },
    { name: "Denver", oak: 75, sfo: 99, sjc: 99 },
    { name: "Danville", oak: 90, sfo: 130, sjc: 130 },
    { name: "Diablo", oak: 80, sfo: 125, sjc: 130 },
    { name: "Dublin", oak: 75, sfo: 120, sjc: 120 },
    { name: "Fairfield", oak: 150, sfo: 175, sjc: 199 },
    { name: "French Camp", oak: 150, sfo: 175, sjc: 175 },
    { name: "Hughson", oak: 199, sfo: 300, sjc: 300 },
    { name: "Keyes", oak: 195, sfo: 300, sjc: 300 },
    { name: "Lafayette", oak: 75, sfo: 120, sjc: 130 },
    { name: "Lathrop", oak: 150, sfo: 175, sjc: 175 },
    { name: "Livermore", oak: 95, sfo: 140, sjc: 130 },
    { name: "Lodi", oak: 225, sfo: 300, sjc: 300 },
    { name: "Manteca", oak: 150, sfo: 199, sjc: 199 },
    { name: "Martinez", oak: 85, sfo: 130, sjc: 140 },
    { name: "Modesto", oak: 195, sfo: 250, sjc: 250 },
    { name: "Moraga", oak: 75, sfo: 120, sjc: 130 },
    { name: "Mountain House", oak: 130, sfo: 150, sjc: 150 },
    { name: "Oakley", oak: 150, sfo: 175, sjc: 175 },
    { name: "Orinda", oak: 95, sfo: 120, sjc: 130 },
    { name: "Patterson", oak: 195, sfo: 250, sjc: 250 },
    { name: "Pittsburg", oak: 110, sfo: 130, sjc: 130 },
    { name: "Pleasant Hill", oak: 95, sfo: 125, sjc: 125 },
    { name: "Pleasanton", oak: 75, sfo: 120, sjc: 120 },
    { name: "Ripon", oak: 165, sfo: 195, sjc: 195 },
    { name: "Salida", oak: 150, sfo: 195, sjc: 195 },
    { name: "San Ramon", oak: 75, sfo: 120, sjc: 120 },
    { name: "Stockton", oak: 175, sfo: 250, sjc: 250 },
    { name: "Tracy", oak: 140, sfo: 150, sjc: 150 },
    { name: "Turlock", oak: 250, sfo: 300, sjc: 300 },
    { name: "Vallejo", oak: 120, sfo: 150, sjc: 175 },
    { name: "Walnut Creek", oak: 95, sfo: 130, sjc: 130 }
];

const Contact = () => {
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('oak'); // Default endpoint set to 'oak'
    const [price, setPrice] = useState(null);

    const calculatePrice = () => {
        const startLocation = locations.find(location => location.name === startPoint);
        if (!startLocation) {
            alert("Invalid start point.");
            return;
        }

        const fare = startLocation[endPoint]; // Use the endPoint state to dynamically access the price
        if (fare === undefined) {
            alert("Invalid end point.");
            return;
        }

        setPrice(fare);
    };


    return (
        <div className='sm:min-h-[600px] sm:grid sm:place-items-center
            duration-300 pt-24 pb-10 sm:pb-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 data-aos='fade-up' className='text-2xl sm:text-3xl'>Best In City</h1>
                        <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-bold'>TRUSTED CAB SERVICES IN THE TRACY</h1>
                        <p data-aos='fade-up' className='leading-8 tracking-wide'>
                            The better quality and speed of our express taxi service and our
                            friendly and knowledgeable drivers are what sets us apart from others.
                            If you are looking for a taxi service right now
                        </p>
                        <button
                            data-aos='fade-up'
                            data-aos-offset='0'
                            className='bg-black text-white px-4 py-2 rounded-lg'>
                            Book Now
                        </button>
                    </div>

                    <div data-aos='fade'>
                        <div className='w-full md:max-w-[350px] mx-auto'>
                            <h1 className='uppercase text-2xl text-white bg-black px-5 py-3'>
                                Book a Cab
                            </h1>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 bg-white p-5 rounded-lg shadow'>
                                <input
                                    className='inputField form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                                    type="text"
                                    name='name'
                                    id='name'
                                    placeholder='Name'
                                />
                                <input
                                    className='inputField form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                                    type="text"
                                    name='phone'
                                    id='phone'
                                    placeholder='Phone'
                                />
                                <input
                                    className='inputField form-input mt-1 block w-full col-span-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                                    type="text"
                                    name='vehicle'
                                    id='vehicle'
                                    placeholder='Choose Vehicle'
                                />
                                <div className='col-span-2'>
                                    <div className='mb-4'>
                                        <label htmlFor="startPoint" className='block text-sm font-medium text-gray-700'>Start Point:</label>
                                        <select id="startPoint" value={startPoint} onChange={(e) => setStartPoint(e.target.value)} className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
                                            <option value="">Select Start Point</option>
                                            {locations.map((location) => (
                                                <option key={location.name} value={location.name}>{location.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="endPoint" className='block text-sm font-medium text-gray-700'>End Point:</label>
                                        <select id="endPoint" value={endPoint} onChange={(e) => setEndPoint(e.target.value)} className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
                                            <option value="oak">OAK</option>
                                            <option value="sfo">SFO</option>
                                            <option value="sjc">SJC</option>
                                        </select>
                                    </div>
                                    <button onClick={calculatePrice} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Calculate Price</button>
                                    {price !== null && <p className='mt-2 text-lg font-semibold'>The price is: {price}</p>}
                                </div>
                                <button className='bg-black hover:bg-gray-700 text-white w-full col-span-2 mt-6 px-4 py-2 rounded-lg transition-colors duration-150'>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
