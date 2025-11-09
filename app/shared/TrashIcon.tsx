'use client'

import { useState } from 'react'

const TrashIcon = () => {
  const [isHovered, setIsHovered] = useState(false)

  const stroke = isHovered ? '#ef4444' : '#000000'

  return (
    <span
      role="img"
      aria-label="Remove item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition duration-300 ease-in-out"
    >
      <svg
        className="my-svg"
        width="20"
        height="20"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="80"
          y1="112"
          x2="432"
          y2="112"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M192,112V72a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24v40"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="256"
          y1="176"
          x2="256"
          y2="400"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="184"
          y1="176"
          x2="192"
          y2="400"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <line
          x1="328"
          y1="176"
          x2="320"
          y2="400"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </span>
  )
}

export default TrashIcon
