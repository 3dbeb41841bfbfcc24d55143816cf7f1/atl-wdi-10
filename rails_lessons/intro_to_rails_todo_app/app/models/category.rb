class Category < ApplicationRecord
	# With this, can now do
	# category = Category.find(1)
	# category.todos
	has_many :todos
end
