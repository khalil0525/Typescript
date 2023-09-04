import { ChangeEvent } from "react"

const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement>):void=> {
        console.log('i\'m being dragged')
    
    }
    return <div>
        <input onChange={onChange}/>
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>





}
export default EventComponent

