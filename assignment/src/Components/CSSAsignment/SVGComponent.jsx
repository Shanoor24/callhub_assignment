import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
      width={65}
      height={65}
      style={{marginLeft: "10px"}}
      {...props}
    >
      <path
        // xmlns:default="http://www.w3.org/2000/svg"
        d="M12 1a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 00-9-9z"
        vectorEffect="non-scaling-stroke"
        fill="#e67540"
      />
    </svg>
  )
}

export default SvgComponent