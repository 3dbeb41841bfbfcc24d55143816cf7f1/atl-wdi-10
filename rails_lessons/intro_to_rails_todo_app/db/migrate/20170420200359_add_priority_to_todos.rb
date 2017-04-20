class AddPriorityToTodos < ActiveRecord::Migration[5.0]
  def change
    add_column :todos, :prortity, :integer
  end
end
