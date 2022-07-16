import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id}); 
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  if(props.handle) {
    return (<div ref={setNodeRef} style={style} {...attributes} className={'pos-relative'}>
      {
        props.handle ? 
        <span className='dragHandleClass' {...listeners}>
          <svg viewBox="0 0 20 20" width="12"><path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path></svg>
        </span>
        : null
      }
      {props.children}
    </div>)
  }
  
  return (
    <div ref={setNodeRef} style={style} {...attributes}   {...listeners} className={'pos-relative'}>
      {props.children}
    </div>
  );
}