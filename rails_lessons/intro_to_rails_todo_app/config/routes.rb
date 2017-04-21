Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # GET /todos, then hit the TodosController's index action
  get 'categories' => 'categories#index'
  get 'categories/:id/todos' => 'todos#index', :as => "todos_index"
end
