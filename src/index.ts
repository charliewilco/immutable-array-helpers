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
      const list = [x, ...this.data];
      this.data = list;
      return list;
    } else {
      return this.data;
    }
  }

  public remove(removed: K, key?: string): K[] {
    const id = key ? key : "id";

    const list = this.data.filter((t: K) => {
      if (t[id]) {
        return t[id] !== removed[id] && t;
      }
    });

    this.data = list;

    return list;
  }

  public update(updated: K, key?: string): K[] {
    const id = key ? key : "id";

    const list = this.data.map((t: K) => (t[id] !== t[id] ? t : updated));

    this.data = list;

    return list;
  }
}
