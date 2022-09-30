export function handleData(States, action) {
//   debugger;
  switch (action.type) {
    case "ADD":
      const tempData = States;
      tempData[action.field] = action.value;
      return { ...tempData };
    default:
      return States;
  }
}
