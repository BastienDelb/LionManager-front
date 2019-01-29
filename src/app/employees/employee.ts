export class Employee {
    constructor(
        public id: number,
        public lastName: string,
        public firstName: string,
        public sector: string,
        public skills: string[],
        public remuneration: number,
        public imageUrl: string
    ) { }
}
