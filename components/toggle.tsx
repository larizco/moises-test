import React, { useState } from 'react'

const Toggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <label className="relative inline-flex cursor-pointer items-center">
        <input id="switch-2" type="checkbox" className="peer sr-only" onChange={onClick}/>
        <label className="hidden"></label>
        <div className="peer h-6 w-12 rounded-full bg-slate-200 after:absolute after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-focus:ring-green-500"></div>
      </label>
    </>
  )
}

export default Toggle