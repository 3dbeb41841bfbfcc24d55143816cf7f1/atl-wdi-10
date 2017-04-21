class StaticPagesController < ApplicationController
	before_action :authenticate_user!, only: [:faqs]
	before_action :redirect_unless_admin, only: [:super_secret]

  def home
  end

  def about
  end

  def faqs
  end

  def super_secret
  end
end
