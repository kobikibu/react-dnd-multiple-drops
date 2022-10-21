import { memo } from 'react'
import { useDrop } from 'react-dnd'
import './DragAndDropArea.css'


export const WordHome = memo(function WordHome ({
  accept,
  lastDroppedItem,
  text,
  onDrop,
}) {
  
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  
  return (
    <div className="wordHome" ref={drop}  data-testid="wordHome ">
      {text}
      {lastDroppedItem && (
        <p className="drop">{lastDroppedItem}</p>
      )}
    </div>
  )
})