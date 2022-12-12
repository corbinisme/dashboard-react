import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function MovableItem(props) {
    const [{isDragging}, drag] = useDrag({
        item: {name: 'Any custom name', type: 'Our first type'},
        type: "DIV",
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            console.log("drop", dropResult)
            /*
            if(dropResult && dropResult.name === 'Column 1'){
                setIsFirstColumn(true)
            } else {
                setIsFirstColumn(false);
            }
            */
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} className='movable-item' style={{opacity}}>
            {props.title}<br />
            
        </div>
    )
}