import { List } from "./List/List";

const ListObject = new List()
ListObject.append("Satu")
ListObject.append("Satu2")
ListObject.append("Satu3")
ListObject.append(true)
ListObject.append(false)

// ListObject.remove("Satu")
ListObject.insert("add element", true)
ListObject.first().next().next().next().next().next().next().next().next().next().next()
console.log(ListObject.value())

// console.log(ListObject)
// console.log(ListObject.remove("Satu"),)