import React from "react";
import { NewWidgetInput } from "./NewWidgetInput";
import { useSelector, useDispatch } from "react-redux";
import { WidgetsState } from "./widgetReducer";
import { addWidget } from "./actions";

function App() {
  const widgets = useSelector<WidgetsState, WidgetsState["widgets"]>(
    (state) => state.widgets
  );
  const dispatch = useDispatch();

  const onAddWidget = (widget: string) => {
    dispatch(addWidget(widget));
  };

  return (
    <>
      <NewWidgetInput addWidget={onAddWidget} />
      <hr />
      <ul>

      
        {widgets.map((widget) => {
          return <li className="Box" key={widget}>     {widget}   </li>;
        })}
       </ul>
      
      
    </>
  );
}

export default App;