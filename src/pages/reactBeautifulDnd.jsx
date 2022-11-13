import React from 'react'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reactBeautifulDnd = () => {

  const CHARACTERS = [
    {
      id: "gambaruzoi",
      name: "がんばるぞい",
    },
    {
      id: "gyp",
      name: "ぎょぱー！",
    },
    {
      id: "iine",
      name: "いいね！",
    },
    {
      id: "shincyoku_doudesuka",
      name: "進捗どうですか",
    },
    {
      id: "shobon",
      name: "ショボーン",
    },
  ]

  return (
    <div>
        <DragDropContext>
          <Droppable droppableId="characters">
          {(provided) => {
            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            {CHARACTERS.map(({ id, name }) => {
                return (
                  <li key={id} ref="{provided.innerRef}"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <p>
                      { name }
                    </p>
                  </li>
                );
            })}
            </ul>

          }}
          </Droppable>
        </DragDropContext>
    </div>
  )
}

export default reactBeautifulDnd
