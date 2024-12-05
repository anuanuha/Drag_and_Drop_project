import { useDrag } from "react-dnd"
export const Pictures=({id, url})=>{
    const [{isDragging}, drag] = useDrag(()=>({
        type:"image",
        item:{id:id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging(),
        })
        }))
    return(
        <div>
        <img src={url} width="150px" alt="{id}" style={{border:isDragging ? "5px solid pink" : "0px"}}  ref={drag}/>
    </div>
    )
}