export class Todo {
    id: string;
    description: string;
    done: boolean;

    constructor(id: string, description: string) {
        this.id = id;
        this.description = description;
        this.done = false;
    }

    markAsDone() {
        this.done = true;
    }

    markAsUndone() {
        this.done = false;
    }
}
