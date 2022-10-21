import update from 'immutability-helper'
import './DragAndDropArea.css'
import React, { memo, useCallback, useState } from 'react'
import { WordLabel } from './WordLabel.js'
import { WordHome } from './WordHome.js'
import { ItemTypes } from './ItemTypes.js'


export const DragAndDropArea = memo(function DragAndDropArea() {
  const [wordHomes, setWordHomes] = useState([
    
    { text:ItemTypes.COMER, accepts: [ItemTypes.COMER], lastDroppedItem: null },

    { text:ItemTypes.CAMA, accepts: [ItemTypes.CAMA], lastDroppedItem: null },

    { text:ItemTypes.BEBER, accepts: [ItemTypes.BEBER], lastDroppedItem: null },

    { text:ItemTypes.LEER, accepts: [ItemTypes.LEER], lastDroppedItem: null },

    { text:ItemTypes.LIBRO, accepts: [ItemTypes.LIBRO], lastDroppedItem: null },

    { text:ItemTypes.AGUA, accepts: [ItemTypes.AGUA], lastDroppedItem: null },

    { text:ItemTypes.DORMIR, accepts: [ItemTypes.DORMIR], lastDroppedItem: null },
    
    { text:ItemTypes.VERBOS, accepts: [ItemTypes.COMER,ItemTypes.BEBER,ItemTypes.DORMIR,ItemTypes.LEER], lastDroppedItem: null },

    { text:ItemTypes.SUSTANTIVOS ,accepts: [ItemTypes.LIBRO,ItemTypes.AGUA,ItemTypes.CAMA], lastDroppedItem: null },
   
  ])
  const [wordLabels] = useState([
    { name: 'Libro', type: ItemTypes.LIBRO },
    { name: 'Comer', type: ItemTypes.COMER },
    { name: 'Dormir', type: ItemTypes.DORMIR },
    { name: 'Beber', type: ItemTypes.BEBER },
    { name: 'Cama', type: ItemTypes.CAMA },
    { name: 'Agua', type: ItemTypes.AGUA },
    { name: 'Leer', type: ItemTypes.LEER },
  ])
  
  const [droppedWordLabelNames, setDroppedWordLabelNames] = useState([])
  
  const handleDrop = useCallback(
    (index, item) => {
        const { name, type} = item
        setDroppedWordLabelNames(name)
        setWordHomes(
          update(wordHomes, {
            [index]: {
              lastDroppedItem: {
                $set: name
              },
            },
          }),
        )
      },
      [droppedWordLabelNames, wordHomes],
    )

    return (
      <React.Fragment>
      <h1> ⇘&nbsp; Drag & Drop</h1>
      <div className="container">
        <h4>( English-Spanish )</h4>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {wordHomes.map(({ accepts, lastDroppedItem, text }, index) => (
            <WordHome
              accept={accepts}
              lastDroppedItem={lastDroppedItem}
              text={text}
              onDrop={(item) => handleDrop(index, item)}
              key={index}
            /> 
          ))}
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
        
        <div className="wordLabelWrapper">
          {wordLabels.map(({ name, type }, index) => (
            <WordLabel
              name={name}
              type={type}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
    </React.Fragment>
  )
})
