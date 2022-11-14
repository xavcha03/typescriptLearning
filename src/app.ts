function reverse<T>(arr: readonly T[]): readonly T[]{
    return [...arr].reverse();
}


class Collection<T>{
    constructor(private items: T[]){

    }

    first():T | null{
        return this.items[0] || null
    }
}

//https://www.youtube.com/watch?v=MlwFhfdEVwo : 9:32