export type Action = { type: "ADD_WIDGET"; payload: string };

export const addWidget = (widget: string): Action => ({
  type: "ADD_WIDGET",
  payload: widget,
});