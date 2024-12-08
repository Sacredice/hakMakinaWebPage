import { useState } from 'react'
import Bars from "../components/Bars"


const barsArray = [
  ["h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]"],
  ["h-[20%]", "h-[40%]", "h-[75%]", "h-[75%]", "h-[40%]", "h-[20%]"],
  ["h-[75%]", "h-[40%]", "h-[20%]", "h-[20%]", "h-[40%]", "h-[75%]"],
  ["h-[60%]", "h-[30%]", "h-[40%]", "h-[50%]", "h-[40%]", "h-[65%]"],
]

function Home() {
  const [bgImg, setBgImg] = useState("bg-luffy-sunset")
  const [barHeights, setBarHeights] = useState(barsArray[0])


  return (
    <div className='relative h-screen'>


      <div className={`absolute bg-luffy-sunset flex place-content-center bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === "bg-luffy-sunset" ? "opacity-100" : "opacity-0"}`}>
      </div>

      <div className={`absolute bg-zoro bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === "bg-zoro" ? "opacity-100" : "opacity-0"}`}>
      </div>
      <div className={`absolute bg-luffy bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === "bg-luffy" ? "opacity-100" : "opacity-0"}`}>
      </div>
      <div className={`absolute bg-sanji bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === "bg-sanji" ? "opacity-100" : "opacity-0"}`}>
      </div>

      <div className='absolute h-full w-full bg-gradient-to-r from-black to-transparent'>
      </div>

      <div className='w-full h-full flex justify-end items-center'>
        <div className='absolute flex-row justify-center left-[10%]'>

          <div className='bg-zoro bg-cover bg-center w-32 h-32 rounded-full mb-7 transition-all duration-300 ease-in-out hover:scale-125' onMouseEnter={() => {
            setBarHeights(barsArray[1]);
            setBgImg("bg-zoro")
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0]);
            setBgImg("bg-luffy-sunset")
          }}></div>
          <div className='bg-luffy bg-cover bg-center w-32 h-32 rounded-full mb-7 transition-all duration-300 ease-in-out hover:scale-125' onMouseEnter={() => {
            setBarHeights(barsArray[2])
            setBgImg("bg-luffy")
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg("bg-luffy-sunset")
          }}></div>
          <div className='bg-sanji bg-cover bg-center w-32 h-32 rounded-full mb-7 transition-all duration-300 ease-in-out hover:scale-125' onMouseEnter={() => {
            setBarHeights(barsArray[3])
            setBgImg("bg-sanji")
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg("bg-luffy-sunset")
          }}></div>
          <div className='bg-blue-500 w-32 h-32 rounded-full mb-7 transition-all duration-300 ease-in-out hover:scale-125' onMouseEnter={() => {
            setBarHeights(barsArray[2])
            setBgImg("bg-luffy")
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg("bg-luffy-sunset")
          }}></div>
        </div>
        <Bars barHeights={barHeights} />
      </div>

    </div>
  )
}

export default Home
