Rails.application.routes.draw do
  get 'home' => 'static_pages#home'
  get 'about' => 'static_pages#about'
  get 'faqs' => 'static_pages#faqs'
  get 'super-secret' => 'static_pages#super_secret'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#home"
end
