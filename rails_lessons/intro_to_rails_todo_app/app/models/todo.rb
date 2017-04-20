class Todo < ApplicationRecord
	belongs_to :category

	validates :content, presence: true, length: { minimum: 5 }
	validates :priority, presence: true, inclusion: 1..3
end
