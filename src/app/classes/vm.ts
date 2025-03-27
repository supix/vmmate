export class Vm {
    public constructor(
        public readonly name: string,
        public readonly environment: string,
        public poweredOn: boolean,
        public powerOffTime?: Date,
        public schedule?: Schedule,
    ) {}
}

export class Schedule {
    public constructor(
        public readonly powerOnTime: Date,
        public readonly powerOffTime: Date,
    ) {}
}