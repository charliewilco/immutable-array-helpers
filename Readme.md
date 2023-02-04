# Immutable Array Helpers

## Install

```sh
yarn add immutable-array-helpers
```

## Setup

```typescript
import { ImmutableArrayHelpers } from "immutable-array-helpers";

interface SomeInterface {
  key1: any;
  key2: any;
  id: string;
}

const someArray: SomeInterface[] = [...]

const data = new ImmutableArrayHelpers<SomeInterface>(someArray)
```

## Usage

This is a class that helps manipulate an array of objects in an immutable way. The class holds an internal array of objects and provides methods to add, remove, or update objects in the array.

### Parameters

- `data: K[]`: An initial array of objects. The objects in the array should have a property specified by the key parameter.

### Properties

- `data: K[]`: The internal array of objects held by the class. This property is read-only.

### Methods

- `add(x: K): K[]`: Adds an object `x` to the beginning of the internal array. Returns the new array.
- `remove(removed: K, key?: string): K[]`: Removes an object from the internal array based on the specified `key`. If `key` is not specified, the default value is `"id"`. Returns the new array.
- `update(updated: K, key?: string): K[]`: Updates an object in the internal array based on the specified `key`. If `key` is not specified, the default value is `"id"`. Returns the new array.
