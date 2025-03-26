export class Vm {
    public constructor(
        public readonly name: string,
        public readonly poweredOn: boolean,
        public readonly powerOffTime?: Date,
        public readonly schedule?: Schedule,
    ) {}
}

export class Schedule {
    public constructor(
        public readonly powerOnTime: Date,
        public readonly powerOffTime: Date,
    ) {}
}