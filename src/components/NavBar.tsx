const NavBar = () => {
  return (
    <nav className='flex justify-between items-center'>
        <h1 className="text-3xl poppins">DOG API</h1>
        <ul className='flex justify-center items-center'>
            <li className='px-3'>Home</li>
            <li className='px-3'>Contents</li>
        </ul>
    </nav>
  )
}

export default NavBar