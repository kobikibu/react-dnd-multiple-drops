import { memo } from 'react'
import { useDrag } from 'react-dnd'
import './DragAndDropArea.css'


export const WordLabel = memo(function WordLabel({ name, type, isDropped }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  )
  return (
      <div className="wordLabel" ref={drag}  style={{ opacity }} data-testid="wordLabel">
        {isDropped ? <s>{name}</s> : name}
      </div>
  )
})
