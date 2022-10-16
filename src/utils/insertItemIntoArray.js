export const insertItemIntoArray = (newItem, arr, idx) => {
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx)]
}
