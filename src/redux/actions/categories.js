export function addCategory(category) {
  return { type: "add/category", payload: category };
}

export function toggleModal() {
  return { type: "toggle/modal" };
}

export function addConsumption(history) {
  return {type: "add/consumption", payload: history}
}

export function getSum(sum) {
  return { type: "get/sum", payload: sum };
}

export function getComment(comment) {
  return { type: "get/comment", payload: comment };
}
