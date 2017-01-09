---
title:  Mongo - Intermediate Mongo
type: lesson
duration: '2:00'
creator:
    name: Colin Hart, adapted from Matt Huntington
    class: WDIr-R2D2
---

## Lesson Objectives
1. Use intermediate find operators
1. Explain update operators
1. Explain upserts
1. Explain multiple updates

## Use intermediate find operators

To find all the documents in our collection that have a weight property greater than 700, we run:

```
db.employees.find(
	{
		weight : {
			$gt : 700
		}
	}
)
```

There are several comparisons we can perform
	- $lt (less than)
	- $lte (less than or equal to)
	- $gt (greater than)
	- $gte (greater than or equal to)
	- $ne (not equal to)
	- $exists (does the property exist on an object -- either true or false)
	- $in (does the value exist within the given array)

If the field is an array, you can search for a match within that array

```
db.employees.find(
	{
		loves:'energon'
	}
)
```

If the object you pass into `find()` has more than one attribute, it will return documents that match both criteria.  This is called an AND statement (like &&)

```
db.employees.find(
	{
		gender: 'm',
		weight: {
			$gt: 700
		}
	}
)
```

To find all documents that match at least one of a set of criteria, use an OR statement (like ||)

```
db.employees.find(
	{
		$or: [
			{
				loves: 'apple'
			},
			{
				weight: {
					$lt: 500
				}
			}
		]
	}
)
```

To find documents that have a value that matches multiple criteria, pass an object that contains both tests.  This is similar to an AND (&&), but for one property.  If you try to do a normal AND statement, but use the same property, twice it won't work.

```
db.employees.find(
	{
		salary: {
			$gte : 80,
			$lte : 165
		}
	}
);
```

## Intermediate update operators

We can increase a specific value

inc/dec - changeable numeric values

```
db.employees.update(
	{
		name: 'Pilot'
	},
	{
		$inc: {
			salary: -2
		}
	}
)
```

Multiple a value

```
db.employees.update(
	{
		name: 'Pilot'
	},
	{
		$mul: {
			salary: (1/2)
		}
	}
)
```

Push a value onto an array

```
db.employees.update(
	{
		name: 'Aurora'
	},
	{
		$push: {
			loves: 'sugar'
		}
	}
)
```

Pop a value off an array

```
db.employees.update(
	{
		name: 'Aurora'
	},
	{
		$pop: {
			loves: 1
		}
	}
)
```

Remove a property altogether

```
db.employees.update(
	{
		name: 'Aurora'
	},
	{
		$unset: {
			loves: ''
		}
	}
)
```

Rename a field

```
db.employees.update(
	{
		name: 'Aurora'
	},
	{
		$rename: {
			wrong_field_name : 'correct_field_name'
		}
	}
)
```

For more operators, look here: http://docs.mongodb.org/manual/reference/operator/update/#update-operators

## Explain upserts

Upserts will insert a value if it doesn't exist.  If it does, it will update it.

Normal:

```
db.hits.update(
	{
		page: 'employees'
	},
	{
		$inc: {
			hits: 1
		}
	}
);
db.hits.find();
```

Upsert:

```
db.hits.update(
	{
		page: 'employees'
	},
	{
		$inc: {
			hits: 1
		}
	},
	{
		upsert:true
	}
);
db.hits.find();
db.hits.update(
	{
		page: 'employees'
	},
	{
		$inc: {
			hits: 1
		}
	},
	{
		upsert:true
	}
);
db.hits.find();
```
