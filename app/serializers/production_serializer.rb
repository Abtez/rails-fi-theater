class ProductionSerializer < ActiveModel::Serializer
  attributes :summary, :title, :budget, :director, :image, :genre
  has_many :crew_members

  def summary
    "The title is #{self.object.title} and is directed by #{self.object.director}"
  end
end
