import React, { useState } from 'react'

const Toggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <label className="relative inline-flex cursor-pointer items-center">
        <input id="switch-2" type="checkbox" className="peer sr-only" onChange={onClick}/>
        <label className="hidden"></label>
        <div className="peer h-8 w-14 rounded-full bg-white-transparent-25 after:absolute after:left-0 after:h-7 after:w-7 after:shadow-[1px_2px_2px_1px_rgba(0,0,0,0.3)] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] after:top-0.5 peer-checked:bg-[#00DAE8] peer-checked:after:translate-x-full peer-focus:ring-green-500"></div>
      </label>
    </>
  )
}

export default Toggle;