Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # GET /todos, then hit the TodosController's index action
  get 'todos' => 'todos#index'

  get 'categories' => 'categories#index'
end
