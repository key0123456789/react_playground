import Draggable from "react-draggable";
import { useState, createRef } from "react";

const DraggableTest = () => {
  const [currentPosition, setCurrentPosition] = useState ({
    xRate: 150,
    yRate: 150
  })

  const onDrag = (e, data) => {
    setCurrentPosition({xRate: data.lastX, yRate: data.lastY});
  }


  return (
    <>
      <Draggable
        axis="both" // both, x, y, none
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onDrag={onDrag}
      >
        <div>
          <div className="handle">▷ 動かす</div>
        </div>
      </Draggable>
      <Draggable
        axis="both" // both, x, y, none
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onDrag={onDrag}
      >
        <div>
          <div className="handle">▷ 動かす</div>
        </div>
      </Draggable>
    </>
  )
}

export default DraggableTest;
