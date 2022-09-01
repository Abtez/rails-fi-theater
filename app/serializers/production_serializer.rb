class ProductionSerializer < ActiveModel::Serializer
  attributes :title, :budget, :genre, :director, :image, :ongoing
end
