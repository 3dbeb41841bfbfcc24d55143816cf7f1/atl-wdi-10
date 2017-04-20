module TodosHelper
	def show_people_logged_in(num)
		return "#{num} #{"person".pluralize(num)} logged in"
	end
end
