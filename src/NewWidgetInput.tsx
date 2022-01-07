import React, { ChangeEvent } from "react";

interface NewWidgetInputProps {
  addWidget(widget: string): void;
}
let widget=" Widget ";
let incNumber = 0;  // to increment widgets numbers

export const NewWidgetInput: React.FC<NewWidgetInputProps> = ({ addWidget }) => {
  // const ["Widget"] = React.useState("");
  // const updateWidget = (event: ChangeEvent<HTMLInputElement>) => {
  //   setWidget(event.target.value);
  // };
  

  const onAddWidgetClick = () => {
  incNumber++;

  console.log(" Ayaz My Widget name check  : " + widget + " " + incNumber);
  addWidget(widget + " " + incNumber);

    //setWidget("");
  };

  return (
    <div>
    
      <button onClick={onAddWidgetClick}>Add Widget</button>
    </div>
  );
};