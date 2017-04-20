# rails g migration AddContentToTodos content:text
class AddContentToTodos < ActiveRecord::Migration[5.0]
  def change
    add_column :todos, :content, :text
  end
end
