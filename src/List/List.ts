export class List {
    /**
     * 
     * Creating a List Instance
     * 
     * @param size The size of list
     * @param current The current list oposistion stack
     * @param listStorageData The storage data that hold the list elements
     */
    constructor(
        private size: number = 0,
        private current: number = 0,
        private listStorageData: Array<any> = []
    ) {
        this.size = size;
        this.current = current;
        this.listStorageData = listStorageData
    }

    /**
     * Adding an Element to a List.
     * 
     * This function appends a new element onto the list at the next available position,
     * 
     * @param element `any` The element that apppended to internal storage of current list instane.
     */
    public append(element: any): void {
        this.listStorageData[this.size++] = element
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
    public remove(element: any): boolean {
        const foundAt = this.find(element);
        if(foundAt > -1 ){
            this.listStorageData.splice(foundAt, 1)
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
    public insert(element: any, after: any) : boolean {
        const insertAt = this.find(after);
        if(insertAt > -1) {
            this.listStorageData.splice(insertAt+1, 0, element);
            return true;
        }
        return false
    }

    public clear() : void {
        this.listStorageData = [];
        this.size = this.current = 0;
    }

    public contains(elemnt: any) : boolean {
        return false;
    }

    /**
     * 
     * @param element 
     * @returns 
     */
    public find(element: any): number {
        for (let index = 0; index < this.listStorageData.length; index++) {
            if(this.listStorageData[index] == element){
                return index;
            }
        }
        return -1;
    }

    /**
     * 
     * @returns 
     */
    public length(): number {
        return this.size;
    }

    /**
     * 
     * @returns 
     */
    public toString(): string {
        return this.listStorageData.toString()
    }

    public first() : List {
        this.current = 0
        return this;
    }

    public last() : List {
        this.current = this.listStorageData.length - 1;
        return this;
    }

    public prev() : List {
        if(this.current > 0) {
            --this.current;
        } else {
            throw Error("Max previoues iteration exceeded")
        }
        return this
    }

    public next() : List {
        if(this.current < this.listStorageData.length - 1) {
            ++this.current;
        }  else {
            throw Error("Max next iteration exceeded")
        }
        return this
    }

    public value() : any {
        return this.listStorageData[this.current]
    }
}