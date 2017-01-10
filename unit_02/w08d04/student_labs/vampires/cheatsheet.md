# Cheatsheet 2 for Mongo - Selectors

## Selecting by comparison

The special $lt, $lte, $gt, $gte and $ne are used for less than, less than or equal, greater than, greater than or equal and not equal operations.  For example, to get all male unicorns that weigh more than 700 pounds, we could do:

```
db.unicorns.find({gender: 'm',
  weight: {$gt: 700}})
```
## Selecting if a certain property exists or does not exist

The $exists operator is used for matching the presence or absence of a field, for example:

```
db.unicorns.find({
  vampires: {$exists: false}})
```
will return only unicorn objects that do not have the vampires property

## Selecting objects that match one of several values

The ‘$in’ operator is used for matching one of several values that we pass as an
array, for example:

```
db.unicorns.find({
  loves: {$in:['apple','orange']}})
```

## Selecting with OR

If we want to OR rather than AND several conditions on different fields, we use the $or operator and assign to it an array of selectors we want or’d:

```
db.unicorns.find({gender: 'f',
  $or: [{loves: 'apple'},
  {weight: {$lt: 500}}]})
```
The above will return all female unicorns which either love apples or weigh less than 500 pounds

## Negative Selection

### The $ne operator

$ne selects the objects where the value of the field is not equal (i.e. !=) to the specified value


```
db.unicorns.find( { weight: { $ne: 500 } } )
```

The above selects all unicorns that do not have a weight equal to 500

###The '$not' operator
Performs a logical NOT operation on the specified operator expression

```
db.unicorns.find( { weight: { $not: { $gt: 500 } } } )
```
The above selects all unicorns that do not have a weight of greater than 500
**Important** The $not operator only affects other operators and cannot check fields and documents independently. So, use the $not operator for logical disjunctions and the $ne operator to test the contents of fields directly.

###The '$nin' operator

Selects objects with that do not match a value in the specified array or if the property does not exist.

```
db.unicorns.find( { loves: { $nin: [ 'apples', 'watermelon' ] } } )
```
The above will return unicorns that have neither apples, not watermelon in their loves array
