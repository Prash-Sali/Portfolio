import React from 'react'

const navlist = [
    {
        id: 1,
        data:"Home"
    }
,{
        id: 2,
        data:"About"
    },{
        id: 3,
        data:"Skills"
    },{
        id: 4,
        data:"Contact"
    },{
        id: 5,
        data:"Education"
    },{
        id: 6,
        data:"Projects"
    }
]

const Header = () => {
  return (
    <header className='fixed w-[1080px] md:w-full flex justify-between items-center p-4 z-50 bg-transparent'>
       <a href="#" className='text-2xl font-extrabold text-red-500 hover:scale-110 transition duration-300'>Prashant Sali</a> 
       <nav className='hidden md:flex'>
        {navlist.map((item)=>(
        <a key={item.id} href="#" className='ml-8 text-lg font-medium text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500'>{item.data}</a>
        ))}
       </nav>
    </header>
  )
}

export default Header
