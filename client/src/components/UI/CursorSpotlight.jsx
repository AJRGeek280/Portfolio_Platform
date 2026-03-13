import { useState } from "react"

export default function CursorSpotlight(){

const [position,setPosition] = useState({x:0,y:0})

const handleMove = (e)=>{
setPosition({
x:e.clientX,
y:e.clientY
})
}

return(

<div
onMouseMove={handleMove}
className="absolute inset-0 pointer-events-none"
>

<div
className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
style={{
background:"radial-gradient(circle,#8B5CF6,transparent 70%)",
left:position.x-200,
top:position.y-200
}}
/>

</div>

)

}