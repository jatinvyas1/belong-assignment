import data from "./data/data";

function programData(state = data, action) {
  switch (action.type) {
    case "SUBMIT": {
      let temp = [...state];
      temp[action.payload.index]["submitted"] = true;
      temp[action.payload.index]["inProgress"] = false;
      temp[action.payload.index + 1]["inProgress"] = true;
      return temp;
    }
    default:
      return state;
  }
}

export default programData;
