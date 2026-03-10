import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className='bg-blue-900 h-12 flex justify-center items-center'>
      <div className='w-full flex justify-between items-center mx-5 xl:mx-8'>
        <Link to="/" className='text-slate-100 text-xl'>Nav Bar</Link>
        <p className='text-slate-100 text-xl'>Menu</p>
      </div>
    </nav>
  )
}

export default NavigationBar
