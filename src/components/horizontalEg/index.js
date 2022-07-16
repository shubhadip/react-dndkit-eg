import { useState } from 'react';
import {SortableItem} from './../sortableItem';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter
} from '@dnd-kit/core';
import {  
  SortableContext,
  sortableKeyboardCoordinates,
  arrayMove
} from '@dnd-kit/sortable';

import styles from './horizontaleg.module.scss'
import { detailsObject, ColorArrayMapping } from '../../shared/constants';

const HorizontalEg = () => {
    const [data,setData] = useState(detailsObject || [])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

    return (
        <div className={styles.rlist}>
            {
                data.map((i, index) => {
                    return (
                        <DndContext
                        key={`dndContextR-${i.name || index}`}
                        id={`dndContextR-${i.name || index}`}
                        onDragEnd={(e) => handleDragEnd(e, i)}
                        sensors={sensors}
                        collisionDetection={closestCenter}
                    >
                        <SortableContext
                        items={i.values.map((i) => i.id)}
                        id={`sortableContextR-${i.name}`}
                        >
                        <div className={styles.rsbatch} key={i.name}>
                            {
                                i.values.map(j => {
                                    const bgColor = ColorArrayMapping[j?.id]
                                    return <SortableItem key={j.id} id={j.id}>
                                        <div key={j.name} className={[styles.irow, `bg${bgColor}`].join(' ')}>{j.name}</div>
                                    </SortableItem>
                                })
                            }
                            {detailsObject?.length - 1 !== index ? <hr className={styles.hrtag}></hr> : null}
                        </div>
                        </SortableContext>
                    </DndContext>
                    )
                })
            }
        </div>
)

function handleDragEnd(event, selecteddata) {
    const {active, over} = event;
    if (active.id !== over.id) {
        const oldIndex = (selecteddata.values.map(i => i.id)).indexOf(active.id);
        const newIndex = (selecteddata.values.map(i => i.id)).indexOf(over.id);
        let newData = arrayMove(selecteddata.values, oldIndex, newIndex)
        const filteredData = data.filter(i => i.name !== selecteddata.name)
        /**
         * add custom logic 
         */
        if(selecteddata.name === 'room1') {
            newData = [{name:'room1', values:newData}, ...filteredData]
        }else if(selecteddata.name === 'room2') {
            newData = [data[0], {
                name: 'room2',
                values: newData
            }, data[1]]
        }else {
            newData = [...filteredData, {name:'room3', values:newData}]
        }
        setData(newData);
    }
}
};

export default HorizontalEg;