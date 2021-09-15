import * as React from "react"
import { Svg } from "./styles"
const Angle = React.forwardRef((props, ref) => {
  return (
    <Svg
      ref={ref}
      width={props.width || 24}
      height={props.width || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      open={props.open}
      {...props}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke={props.color || "#CCC"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
})
export default Angle
