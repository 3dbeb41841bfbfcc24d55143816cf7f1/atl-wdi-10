class TodosController < ApplicationController
  def index
  	@category = Category.find(params[:category_id])
  	@todos = @category.todos
  end
end
