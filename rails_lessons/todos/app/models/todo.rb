class Todo < ApplicationRecord
  belongs_to :category

  validates :content, presence: true, length: { minimum: 5 }
end
