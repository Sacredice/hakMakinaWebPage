import { useState } from 'react'
import Bars from './components/Bars'


function App() {
  const [barHeights, setBarHeights] = useState(["h-[250px]", "h-[400px]"])

  return (
    <>
      <div className='bg-red-500 w-28 h-28' onMouseEnter={() => setBarHeights(["h-[150px]", "h-[500px]"])} onMouseLeave={() => setBarHeights(["h-[250px]", "h-[400px]"])}>{barHeights}</div>
      <div className='bg-blue-500 w-28 h-28' onMouseEnter={() => setBarHeights(["h-[450px]", "h-[200px]"])} onMouseLeave={() => setBarHeights(["h-[250px]", "h-[400px]"])}></div>
      <Bars barHeights={barHeights} />
    </>
  )
}

export default App
