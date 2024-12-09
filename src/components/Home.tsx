import { useEffect, useRef, useState } from 'react'
import Bars from "../components/Bars"


const barsArray = [
  ["h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]"],
  ["h-[20%]", "h-[40%]", "h-[75%]", "h-[75%]", "h-[40%]", "h-[20%]"],
  ["h-[75%]", "h-[40%]", "h-[20%]", "h-[20%]", "h-[40%]", "h-[75%]"],
  ["h-[60%]", "h-[30%]", "h-[40%]", "h-[50%]", "h-[40%]", "h-[65%]"],
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
      }, 4000)
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

      <div className='w-full h-full flex justify-between items-center'>
        <div className='hidden h-full lg:flex no-hover:hidden flex-col justify-center ml-[6.6%] py-7 z-10 overflow-y-clip'>

          <div className='bg-zoro bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out hover:scale-125 cursor-pointer' onMouseEnter={() => {
            setBarHeights(barsArray[1]);
            setBgImg(1)
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0]);
            setBgImg(0)
          }}>
            <div className='h-full w-[210px] xl:w-[278px] 2xl:w-[334px] translate-x-[72px] border-r border-t border-b border-slate-400 rounded-r-full'>

            </div>
          </div>
          <div className='bg-luffy bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out hover:scale-125 cursor-pointer' onMouseEnter={() => {
            setBarHeights(barsArray[2])
            setBgImg(2)
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg(0)
          }}>
            <div className='h-full w-[210px] xl:w-[278px] 2xl:w-[334px] translate-x-[72px] border-r border-t border-b border-slate-400 rounded-r-full'>

            </div>
          </div>
          <div className='bg-sanji bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out hover:scale-125 cursor-pointer' onMouseEnter={() => {
            setBarHeights(barsArray[3])
            setBgImg(3)
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg(0)
          }}>
            <div className='h-full w-[210px] xl:w-[278px] 2xl:w-[334px] translate-x-[72px] border-r border-t border-b border-blue-900 '>

            </div>
          </div>
          <div className='bg-blue-500 w-36 h-36 rounded-full transition-all duration-[400ms] ease-in-out hover:scale-125 cursor-pointer' onMouseEnter={() => {
            setBarHeights(barsArray[2])
            setBgImg(1)
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg(0)
          }}>
            <div className='h-full w-[210px] xl:w-[278px] 2xl:w-[334px] translate-x-[72px] border-r border-t border-b border-slate-400 '>

            </div>
          </div>
        </div>

        {/* sm < Tablet buttons < lg */}
        <div className='hidden h-full py-6 sm:flex flex-col lg:hidden justify-center ml-[6.6%] no-hover:flex z-10'>

          <div className='bg-zoro bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400] ease-in-out cursor-pointer' style={{ transform: bgImg === 1 ? "scale(125%)" : "scale(100%)" }}>
            <div className='h-full w-[410px] md:w-[500px] translate-x-[72px] border-r border-t border-b border-slate-400 rounded-r-full'>

            </div>
          </div>
          <div className='bg-luffy bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out cursor-pointer' style={{ transform: bgImg === 2 ? "scale(125%)" : "scale(100%)" }}>
            <div className='h-full w-[410px] md:w-[500px] translate-x-[72px] border-r border-t border-b border-slate-400 rounded-r-full'>

            </div>
          </div>
          <div className='bg-sanji bg-cover bg-center w-36 h-36 rounded-full mb-8 transition-all duration-[400ms] ease-in-out cursor-pointer' style={{ transform: bgImg === 3 ? "scale(125%)" : "scale(100%)" }}>
            <div className='h-full w-[410px] md:w-[500px] translate-x-[72px] border-r border-t border-b border-blue-900 '>

            </div>
          </div>
          <div className='bg-blue-500 w-36 h-36 rounded-full transition-all duration-[400ms] ease-in-out cursor-pointer'>
            <div className='h-full w-[410px] md:w-[500px] translate-x-[72px] border-r border-t border-b border-slate-400 '>

            </div>
          </div>
        </div>


        <Bars barHeights={barHeights} />
      </div>

    </div>
  )
}

export default Home
