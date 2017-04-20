# Clear everything
Todo.delete_all
Category.delete_all

# Commonly referenced variables
grocery_category = Category.create(name: "grocery store")
sports_category = Category.create(name: "sports")

# Create lots of data
Todo.create(content: "Grab some milk", category_id: grocery_category.id )
Todo.create(content: "A dozen bananas", category_id: grocery_category.id)

Todo.create(content: "Play soccer", category_id: sports_category.id)
Todo.create(content: "Shoot hoops", category_id: sports_category.id)
