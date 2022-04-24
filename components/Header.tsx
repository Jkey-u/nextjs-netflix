function Header() {
  return (
    <header>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img
                src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
            />
        </div>
    
        <ul className="hidden space-x-4 md:flex">
            <li className="">Home</li>
            <li className="">TV Shows</li>
            <li className="">Moives</li>
            <li className="">New & Popular</li>
            <li className="">My List</li>
        </ul>
    </header>
  )
}

export default Header