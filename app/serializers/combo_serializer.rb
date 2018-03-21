class ComboSerializer < ActiveModel::Serializer
  attributes :genre, :topping

  def genre
    object.genre.name
  end

  def topping
    object.topping.name
  end
end
