export class BaseManager<T extends { id: number }> {
    protected items: Map<number, T> = new Map();

    addItem(item: T): void {
        this.items.set(item.id, item);
    }

    removeItem(id: number): void {
        this.items.delete(id);
    }

    listItems(): T[] {
        return Array.from(this.items.values());
    }

}



