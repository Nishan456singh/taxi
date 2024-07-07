"use Client"
import React from 'react'
import BannerCard from "../../components/About/BannerCard.jsx"
import { SlChart, SlClock, SlEmotsmile, SlRocket, SlStar } from "react-icons/sl"
import BgImage from "../../assets/girl.jpeg"


const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "520px",
  width: "100vw",
}

const About = () => {
  return (
    <div style={bgStyle}>
      <div className='text-white bg-black/80 min-h-[530px] items-center flex py-10'>
        <div className='container'>
          {/* header title section */}
          <h1 className='text-primary font-bold text-3xl text-center'>About Us</h1>
          <div className='space-y-3 uppercase text-center py-14'>
            <p className='text-primary text-lg font-semibold uppercase'>
              Trivalley Airporter is an Airport Shuttle fully registered and insured Carrier under the authority of the California Public Utilities Commission, PSC and TCP License No. 37959. We operate from the Oakland International Airport, who has granted us a Door-to-Door Service Permit, which allows us to legally perform Door-to-Door activity at this airport, both, for Arrival and Departure flights.We also operate San Francisco Airport Shuttle from the San Francisco Airport and San Jose Airport shuttle from the San Jose Mineta Airport only under Charter basis, as they have granted us a Charter Permit only, which allows us to legally perform Charter activity at these locations, both, for Arrival and Departure flights.
            </p>
            <h1>Whether you are going to San Francisco airport, Oakland airport or San Jose airport, our Trivalley airport shuttle will provide a high level of transportation service, a comfortable and safe experience for you, your loved ones, or customers.

            </h1>
          </div>
          {/* card section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='space-y-8'>
              <BannerCard
                title={"DIRECT TRANSPORT"}
                description={"We will pick you up at your residence or hotel , to transport you to the San Francisco Airport, Oakland Airport or San Jose Airport, for a DIRECT RIDE, to the airport. There is no share ride involved. Our Oakland airport shuttle is a private and exclusive transportation service."}
                icon={<SlRocket />}
              />
              <BannerCard
                title={"CHARTER SERVICE"}
                description={"A charter is an exclusive and private service from point A to point B, often used for airport transfer, but not limited to it. There is no share-ride involved here. A Charter may consist of only one passenger who gets the whole van for himself for cargo purposes."}
                icon={<SlChart />}
              />
            </div>
            <div className='space-y-8'>
              <BannerCard
                title={"ALWAYS ON TIME"}
                description={"We always put our customers needs first, that is why we start our service by being punctual for your pick up, be it at the airport or at the location that you may request. Then we continue by providing you with a stress free shuttle service to the Bay Area airports"}
                icon={<SlClock />}
              />
              <BannerCard
                title={"ALWAYS ON TIME"}
                description={"We always put our customers needs first, that is why we start our service by being punctual for your pick up, be it at the airport or at the location that you may request. Then we continue by providing you with a stress free shuttle service to the Bay Area airports"}
                icon={<SlClock />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
