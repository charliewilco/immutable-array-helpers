# Immutable Array Helpers

## Install

```sh
yarn add immutable-array-helpers
```

## Usage

### Setup

```typescript
import ImmutableArrayHelpers from "immutable-array-helpers";

interface IThing {
  key1: any;
  key2: any;
  id: string;
}

const someArray: IThing[] = [...]

const data = new ImmutableArrayHelpers<IThing>(someArray)
```

### Methods

### `data.add()`
