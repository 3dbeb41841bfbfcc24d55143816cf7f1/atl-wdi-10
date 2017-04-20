class RenamePrortityToPriorityInTodos < ActiveRecord::Migration[5.0]
  def change
  	rename_column :todos, :prortity, :priority
  end
end
