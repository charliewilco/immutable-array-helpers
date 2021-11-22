export class DraftableArray<T> {
  #draft: T[];
  /**
   *
   * @param data Initial array
   * @type Array
   */
  constructor(data: T[]) {
    this.#draft = data;
  }

  add(...x: T[]): T[] {
    if (x.length === 0) {
      return this.#draft;
    }

    this.#draft.push(...x);
    return Array.from(this.#draft);
  }

  remove(removed: T): T[] {
    const index = this.#draft.findIndex((el) => el === removed);

    if (index > -1) {
      this.#draft.splice(index, 1);
      return Array.from(this.#draft);
    }

    return Array.from(this.#draft);
  }

  update(original: T, updated: T): T[] {
    const index = this.#draft.findIndex((el) => el === original);

    if (index > -1) {
      this.#draft.splice(index, 1, updated);
      return Array.from(this.#draft);
    }

    return Array.from(this.#draft);
  }
}

/**
 * A class to define data
 * @class ImmutableArrayHelpers
 */
export class ImmutableArrayHelpers<T, K = Record<string, T>> {
  /**
   *
   * @param data Initial array
   * @type Array
   */
  constructor(data: K[]) {
    this.#data = data;
  }

  #data: K[];

  get data(): K[] {
    return this.#data;
  }

  add(x: K): K[] {
    if (x) {
      const list = [x, ...this.data];
      this.#data = list;
      return list;
    } else {
      return this.data;
    }
  }

  remove(removed: K, key?: string): K[] {
    const id = key ? key : "id";

    const list = this.data.filter((t: K) => {
      if (t[id]) {
        return t[id] !== removed[id] && t;
      }
    });

    this.#data = list;

    return list;
  }

  update(updated: K, key?: string): K[] {
    const id = key ? key : "id";

    const list = this.data.map((t: K) => (t[id] !== t[id] ? t : updated));

    this.#data = list;

    return list;
  }
}
