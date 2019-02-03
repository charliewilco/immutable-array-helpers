export interface StringTMap<T> {
  [key: string]: T;
}

export type Many<T> = T | T[];

interface Generic extends StringTMap<any> {
  id?: any;
}

export default class ImmutableArrayHelpers<T, K = StringTMap<T>> {
  constructor(data: K[]) {
    this.data = data;
  }

  public data: K[];

  public getData(): K[] {
    return this.data;
  }

  public add(x: K): K[] {
    if (x) {
      return [x, ...this.data];
    } else {
      return this.data;
    }
  }

  public remove(removed: K, key?: string): K[] {
    let id = key ? key : "id";

    return this.data.filter((t: K) => {
      if (t[id]) {
        return t[id] !== removed[id] && t;
      }
    });
  }

  public update(updated: K, key?: string): K[] {
    let id = key ? key : "id";

    return this.data.map(t => (t[id] !== t[id] ? t : updated));
  }
}
