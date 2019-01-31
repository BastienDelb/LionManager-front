export class Employee {
    constructor(
        public id: number,
        public lastName: string,
        public firstName: string,
        public nationality: string,
        public age: number,
        public address: string,
        public number: number,
        public mail: string,
        public sector: string,
        public skills: string[],
        public remuneration: number,
        public imgUrl: string
    ) { }
}
