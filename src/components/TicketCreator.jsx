import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TicketCreator = () => {
    constructor(props) {
        super(props);
        this.state = {
          items: getItems(10)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
      }
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  };
  return <DragDropContext onDragEnd={this.onDragEnd}></DragDropContext>;
};
export default TicketCreator;
