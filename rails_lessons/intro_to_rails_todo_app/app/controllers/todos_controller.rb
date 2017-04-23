class TodosController < ApplicationController
  def index
  	@category = Category.find(params[:id])
  	@todos = @category.todos
  end
end
