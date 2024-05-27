import Image from 'next/image'
import React from 'react'

const Button = ({type,title,icon,className,width,height}) => {
  return (
    <button  className={className}
   type={type} 
   icon={icon}
   title={title}
    >
  {icon && <Image src={icon} alt={title} width={width} height={height} />}
      <label className=" whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button
