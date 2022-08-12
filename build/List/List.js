"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List {
    /**
     *
     * Creating a List Instance
     *
     * @param size The size of list
     * @param current The current list oposistion stack
     * @param listStorageData The storage data that hold the list elements
     */
    constructor(size = 0, current = 0, listStorageData = []) {
        this.size = size;
        this.current = current;
        this.listStorageData = listStorageData;
        this.size = size;
        this.current = current;
        this.listStorageData = listStorageData;
    }
    /**
     * Adding an Element to a List.
     *
     * This function appends a new element onto the list at the next available position,
     *
     * @param element `any` The element that apppended to internal storage of current list instane.
     */
    append(element) {
        this.listStorageData[this.size++] = element;
    }
    /**
     * Removing an Element from a List.
     *
     * This function removing a specified element based on given parameters and lookup in the available elements,
     * if the element exist, the existed element will be removed, otherwise skip and returning false value to indicatee that are no existing element to removed.
     *
     * @param element The element that need to be removed.
     * @returns `boolean` The function returning `true` if successfully removing element, otherwise `false` will be returned.
     */
    remove(element) {
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.listStorageData.splice(foundAt, 1);
            this.size--;
            return true;
        }
        return false;
    }
    /**
     *
     * @param element
     * @param after
     * @returns
     */
    insert(element, after) {
        const insertAt = this.find(after);
        if (insertAt > -1) {
            this.listStorageData.splice(insertAt + 1, 0, element);
            return true;
        }
        return false;
    }
    clear() {
        this.listStorageData = [];
        this.size = this.current = 0;
    }
    contains(elemnt) {
        return false;
    }
    /**
     *
     * @param element
     * @returns
     */
    find(element) {
        for (let index = 0; index < this.listStorageData.length; index++) {
            if (this.listStorageData[index] == element) {
                return index;
            }
        }
        return -1;
    }
    /**
     *
     * @returns
     */
    length() {
        return this.size;
    }
    /**
     *
     * @returns
     */
    toString() {
        return this.listStorageData.toString();
    }
    first() {
        this.current = 0;
        return this;
    }
    last() {
        this.current = this.listStorageData.length - 1;
        return this;
    }
    prev() {
        if (this.current > 0) {
            --this.current;
        }
        else {
            throw Error("Max previoues iteration exceeded");
        }
        return this;
    }
    next() {
        if (this.current < this.listStorageData.length - 1) {
            ++this.current;
        }
        else {
            throw Error("Max next iteration exceeded");
        }
        return this;
    }
    value() {
        return this.listStorageData[this.current];
    }
}
exports.List = List;
