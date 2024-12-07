import { useState } from 'react'
import Bars from './components/Bars'


const barsArray = [
  ["h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]", "h-[75%]"],
  ["h-[20%]", "h-[40%]", "h-[75%]", "h-[75%]", "h-[40%]", "h-[20%]"],
  ["h-[75%]", "h-[40%]", "h-[20%]", "h-[20%]", "h-[40%]", "h-[75%]"],
]

function App() {
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
      <div className='absolute h-full w-full bg-gradient-to-r from-black to-transparent'>
      </div>

      <div className='w-full h-full flex justify-end'>
        <div className='absolute top-1/2 left-[10%]'>

          <div className='bg-red-500 w-28 h-28' onMouseEnter={() => {
            setBarHeights(barsArray[1]);
            setBgImg("bg-zoro")
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0]);
            setBgImg("bg-luffy-sunset")
          }}></div>
          <div className='bg-blue-500 w-28 h-28' onMouseEnter={() => {
            setBarHeights(barsArray[2])
            setBgImg("bg-luffy")
          }} onMouseLeave={() => {
            setBarHeights(barsArray[0])
            setBgImg("bg-luffy-sunset")
          }}>{bgImg}</div>
        </div>
        <Bars barHeights={barHeights} />
      </div>

    </div>


  )
}

export default App
