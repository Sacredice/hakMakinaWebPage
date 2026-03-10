import { Link } from "react-router-dom"


function Footer() {
  return (
    <footer className='bg-blue-900 h-9 text-slate-100 flex justify-center items-center'>
      <div className='w-full flex justify-between items-center mx-5 xl:mx-8'>
        <div>
          Azgın Motorcular Org. &copy; {new Date().getFullYear()}
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
