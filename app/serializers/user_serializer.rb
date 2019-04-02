class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :combos

  def combos
    specifics = object.combos.map do |combo|
      {
        id: combo.id,
        genre: combo.genre.name,
        topping: combo.topping.name
      }
    end
    specifics
  end
end
