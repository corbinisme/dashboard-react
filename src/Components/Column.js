
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Column({children, className, title}) {
    const [, drop] = useDrop({
        accept: 'DIV',
        drop: () => ({name: title}),
    });

    return (
        <div ref={drop} className={className}>
            {title}
            {children}
        </div>
    )
}