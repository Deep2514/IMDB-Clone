import React from 'react'

function Banner() {
  return (
    <div  className='h-[60vh] md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage : 'url(https://i.ytimg.com/vi/acQyrwQyCOk/maxresdefault.jpg)'}}>
        <div className='text-white text-xl text-center w-full bg-red-900/60 p-2'>INSIDIOUS THE LAST KEY</div>
    </div>
  )
}

export default Banner