module SessionsHelper
	def redirect_unless_admin
		unless user_signed_in? && current_user.is_admin?
			redirect_to :home
		end
	end
end
