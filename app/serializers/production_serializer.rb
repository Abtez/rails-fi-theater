class ProductionSerializer < ActiveModel::Serializer
  attributes :summary

  def summary
    "The title is #{self.object.title} and is directed by #{self.object.director}"
  end
end
