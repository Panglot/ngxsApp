  export class Generate {
    static readonly type = '[todo] Generate random';
  }

  export class ClearGenerated {
    static readonly type = '[todo] Clear generated';
  }

  export class Select {
    static readonly type = '[todo] Add to selected';
    constructor(public key: string) {}
  }

  export class Unselect {
    static readonly type = '[todo] Move back from selected';
    constructor(public key: string) {}
  }

  export class RemoveSelected {
    static readonly type = '[todo] Remove selected';
    constructor(public key: string) {}
  }

  export class Complete {
    static readonly type = '[todo] Complete';
    constructor(public key: string) {}
  }
