import { useEffect, useRef, useState } from 'react'
import Bars from "../components/Bars"


const barsArray = [
  ["h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]"],
  ["h-[20%]", "h-[40%]", "h-[75%]", "h-[75%]", "h-[40%]", "h-[20%]"],
  ["h-[75%]", "h-[40%]", "h-[20%]", "h-[20%]", "h-[40%]", "h-[75%]"],
  ["h-[60%]", "h-[30%]", "h-[40%]", "h-[50%]", "h-[40%]", "h-[65%]"],
  ["h-[20%]", "h-[30%]", "h-[40%]", "h-[50%]", "h-[60%]", "h-[70%]"],
]

function Home() {
  const [bgImg, setBgImg] = useState(0)
  const [barHeights, setBarHeights] = useState(barsArray[0])
  const intervalRef = useRef<number | null>()
  // const touchScreenRef = useRef()

  // const isTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0))


  const startLoop = () => {
    if (!intervalRef.current) {
      setBgImg(1)
      intervalRef.current = setInterval(() => {
        setBgImg(prev => (prev < 4 ? prev + 1 : 1))
      }, 3500)
    }
  }

  const stopLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    const handleLoop = () => {
      if (window.innerWidth < 1024 && 640 <= window.innerWidth || (window.matchMedia("(hover: none)").matches)) {
        startLoop()
      } else {
        stopLoop()
      }
    }

    handleLoop()
    window.addEventListener("resize", handleLoop)

    return () => {
      stopLoop()
      window.removeEventListener("resize", handleLoop)
    }
  }, [])




  return (
    <div className='relative h-[calc(100vh-48px-36px)]'>


      <div className={`absolute bg-luffy-sunset flex place-content-center bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === 0 ? "opacity-100" : "opacity-0"}`}>
      </div>

      <div className={`absolute bg-zoro bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === 1 ? "opacity-100" : "opacity-0"}`}>
      </div>
      <div className={`absolute bg-luffy bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === 2 ? "opacity-100" : "opacity-0"}`}>
      </div>
      <div className={`absolute bg-sanji bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === 3 ? "opacity-100" : "opacity-0"}`}>
      </div>
      <div className={`absolute bg-luffy-sunset bg-center h-full w-full bg-cover transition-opacity duration-700 ${bgImg === 4 ? "opacity-100" : "opacity-0"}`}>
      </div>

      <div className='absolute h-full w-full bg-gradient-to-r from-black to-transparent'>
      </div>


      <div className='w-full hidden lg:flex no-hover:hidden h-full items-center'>
        <div className='h-full flex flex-grow flex-col justify-center py-7 z-10 ml-[6.5%]'>

          <div className='bg-zoro bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out hover:scale-125 cursor-pointer' onMouseEnter={() => {
            setBarHeights(barsArray[1]);
            setBgImg(1)
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0]);
            setBgImg(0)
          }}>
            <div className='pl-20 h-full flex items-center w-[215px] xl:w-[278px] 2xl:w-[334px] translate-x-[72px] text-slate-200 text-sm xl:text-base transition-all duration-[400ms] ease-in-out' style={{ opacity: bgImg === 1 ? "1" : "0.6" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
          <div className='bg-luffy bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out hover:scale-125 cursor-pointer' onMouseEnter={() => {
            setBarHeights(barsArray[2])
            setBgImg(2)
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg(0)
          }}>
            <div className='pl-20 pr-1 h-full flex items-center w-[215px] xl:w-[278px] 2xl:w-[334px] translate-x-[72px] border-r border-t border-b border-slate-400 rounded-r-full text-slate-200 text-sm xl:text-base transition-all duration-[400ms] ease-in-out' style={{ opacity: bgImg === 2 ? "1" : "0.6" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
          <div className='bg-sanji bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out hover:scale-125 cursor-pointer' onMouseEnter={() => {
            setBarHeights(barsArray[3])
            setBgImg(3)
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg(0)
          }}>
            <div className='pl-20 pr-1 h-full flex items-center w-[215px] xl:w-[278px] 2xl:w-[334px] translate-x-[72px] border-r border-t border-b border-slate-400 text-slate-200 text-sm xl:text-base transition-all duration-[400ms] ease-in-out' style={{ opacity: bgImg === 3 ? "1" : "0.6" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
          <div className='bg-blue-500 w-36 h-36 rounded-full transition-all duration-[400ms] ease-in-out hover:scale-125 cursor-pointer' onMouseEnter={() => {
            setBarHeights(barsArray[2])
            setBgImg(1)
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg(0)
          }}>
            <div className='pl-20 pr-1 h-full flex items-center w-[215px] xl:w-[278px] 2xl:w-[334px] translate-x-[72px] text-slate-200 text-sm xl:text-base transition-all duration-[400ms] ease-in-out' style={{ opacity: bgImg === 1 ? "1" : "0.6" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>


        </div>
        <Bars barHeights={barHeights} />
      </div>

      <div className='w-full h-full hidden sm:flex lg:hidden no-hover:flex justify-start items-center'>
        {/* Tablet Mobile Phone styling < 1024px */}
        <div className='h-full py-6 flex flex-col justify-center ml-[6.6%] text-slate-200 text-xs sm:text-base z-10'>

          <div className='bg-zoro bg-cover bg-center w-20 h-20 sm:w-36 sm:h-36 rounded-full mb-8 transition-all duration-[400] ease-in-out cursor-pointer' style={{ transform: bgImg === 1 ? "scale(125%)" : "scale(100%)" }}>
            <div className='pl-12 sm:pl-20 h-full w-[250px] flex items-center sm:w-[410px] md:w-[500px] translate-x-[40px] sm:translate-x-[72px] sm:border-r sm:border-t sm:border-b sm:border-slate-400 rounded-r-full' style={{ opacity: bgImg === 1 ? "1" : "0.6" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
          <div className='bg-luffy bg-cover bg-center w-20 h-20 sm:w-36 sm:h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out cursor-pointer' style={{ transform: bgImg === 2 ? "scale(125%)" : "scale(100%)" }}>
            <div className='pl-12 sm:pl-20 h-full w-[250px] flex items-center sm:w-[410px] md:w-[500px] translate-x-[40px] sm:translate-x-[72px] sm:border-r sm:border-t sm:border-b sm:border-slate-400 rounded-r-full' style={{ opacity: bgImg === 2 ? "1" : "0.6" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
          <div className='bg-sanji bg-cover bg-center w-20 h-20 sm:w-36 sm:h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out cursor-pointer' style={{ transform: bgImg === 3 ? "scale(125%)" : "scale(100%)" }}>
            <div className='pl-12 sm:pl-20 h-full w-[250px] flex items-center sm:w-[410px] md:w-[500px] translate-x-[40px] sm:translate-x-[72px] sm:border-r sm:border-t sm:border-b border-blue-900' style={{ opacity: bgImg === 3 ? "1" : "0.6" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
          <div className='bg-blue-500 w-20 h-20 sm:w-36 sm:h-36 rounded-full transition-all duration-[400ms] ease-in-out cursor-pointer' style={{ transform: bgImg === 4 ? "scale(125%)" : "scale(100%)" }}>
            <div className='pl-12 sm:pl-20 h-full w-[250px] flex items-center sm:w-[410px] md:w-[500px] translate-x-[40px] sm:translate-x-[72px] sm:border-r sm:border-t sm:border-b border-slate-400' style={{ opacity: bgImg === 3 ? "1" : "0.6" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
