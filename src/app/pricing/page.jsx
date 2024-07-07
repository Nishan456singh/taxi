"use client"
import React from 'react';
import BgImage from '../../assets/bgbridge.jpeg';

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
const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "320px",
    width: "100vw",
    };

const Page = () => {
  return (
    <div className="overflow-x-auto" >
        <div style={bgStyle} />
      <div className="min-w-screen min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full px-4">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Location</th>
                  <th className="py-3 px-6 text-left">OAK</th>
                  <th className="py-3 px-6 text-left">SFO</th>
                  <th className="py-3 px-6 text-left">SJC</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {locations.map((location, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {location.name}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {location.oak}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {location.sfo}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {location.sjc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;