# Unit Specs

## Unit Spec : `CounterCollection`

### `createCounter`

```markdown
1.  It creates a new counter with a unique countId and a count value of 0.
```

### `getCounterValue(countId)`

```markdown
1.  If the counter specified by `countId` can be found,
  a.  return the count value of that counter.
2.  If the counter specified by `countId` cannot be found,
  b.  do not return anything.
```

### `incrementCounter(countId)`

```markdown
1.  If the counter specified by `countId` can be found,
  a.  increment that counter.
  b.  return the count value of that counter.
2.  If the counter specified by `countId` cannot be found,
  b.  do not return anything.
```

### `destroyCounter`

```markdown
1.  If the counter specified by `countId` can be found,
  a.  destroy that counter.
2.  If the counter specified by `countId` cannot be found,
  b.  do not return anything.
```
## Unit Spec : `CounterCollection`

### `createCounter`

```markdown
1.  It creates a new counter with a unique countId and a count value of 0.
2.  It returns the countId of the newly created counter.
```

### `getCounterValue(countId)`

```markdown
1.  If the counter specified by `countId` can be found,
  a.  it returns the count value of that counter.
2.  If the counter specified by `countId` cannot be found,
  a.  it does not return anything.
```

### `incrementCounter(countId)`

```markdown
1.  If the counter specified by `countId` can be found,
  a.  increment that counter.
  b.  return the count value of that counter.
2.  If the counter specified by `countId` cannot be found,
  a.  it does not return anything.
```

### `destroyCounter`

```markdown
1.  If the counter specified by `countId` can be found,
  a.  it destroys that counter.
2.  It does not return anything.
```

## Unit Spec : `Presenter`

### `insertCounterComponent(countId)`

```markdown
1.  It creates a new UI component (representing the counter with the specified
    countId).
2.  It gives the new UI component
  a.  a count value.
  b.  an 'increment' button.
  c.  a data attribute (`data-count-id`) set equal to `countId`.
3.  It adds event handlers to the appropriate places within the UI component.
4.  It adds the UI component to the DOM as a child element of `counter-list`.
5.  It does not return anything.
```

### `refreshCounterComponent(countId)`

```markdown
1.  If the counter specified by `countId` can be found,
  a.  it retrieves the current count value of that counter.
  b.  it sets the value shown in that counter's UI component to match the
      counter's current count value.
2.  It does not return anything.
```

### `removeCounterComponent(countId)`

```markdown
1.  If the counter specified by `countId` can be found,
  a.  it removes that UI component from the DOM, without affecting other UI
      components.
2.  It does not return anything.
```

## Unit Spec : `AppController`

### `onClickNewCounter(event)`

```markdown
1.  It locates
2.  It creates a new UI component to correspond with that new counter.
3.  It does not return anything.
```

### `onClickIncrement(event)`

```markdown
1.  It determines which counter the UI component corresponds to.
2.  It increments the value of the corresponding counter.
3.  It updates the visible count value inside the UI component.
```

### `onClickDelete(event)`

```markdown
1.  It determines which counter the UI component corresponds to.
2.  It destroys the corresponding counter.
3.  It removes the UI component from the DOM.
```
