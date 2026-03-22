export class Theme {
    constructor(name: string) {}
}

export class Rock extends Theme {
    constructor(name: string, public subGenre: string) {
        super(name);
    }
}

export class Classical extends Theme {
    constructor(name: string, public era: string) {
        super(name);
    }
}


