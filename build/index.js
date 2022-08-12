"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("./List/List");
const ListObject = new List_1.List();
ListObject.append("Satu");
ListObject.append("Satu2");
ListObject.append("Satu3");
ListObject.append(true);
ListObject.append(false);
// ListObject.remove("Satu")
ListObject.insert("add element", true);
ListObject.first().next().next().next().next().next().next().next().next().next().next();
console.log(ListObject.value());
// console.log(ListObject)
// console.log(ListObject.remove("Satu"),)
