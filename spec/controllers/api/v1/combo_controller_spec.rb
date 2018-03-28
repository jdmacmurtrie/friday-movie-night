require "rails_helper"

RSpec.describe Api::V1::CombosController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }
  let!(:topping) { FactoryBot.create(:topping) }
  let!(:genre) { FactoryBot.create(:genre) }

  before do
    allow(controller).to receive_messages(current_user: user)
  end

  describe "POST#create" do
    it "creates and returns a newly created combo" do
      posted_combo = { "genre" => "Comedy", "topping" => "Ham" }
      expect(Combo.all.count).to eq 0

      post(:create, params: posted_combo)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(Combo.all.count).to eq 1
      expect(Combo.first.genre.name).to eq "Comedy"
      expect(Combo.first.topping.name).to eq "Ham"
    end
  end

  describe "DELETE#destroy" do
    let!(:combo_list) { FactoryBot.create_list(:combo, 3) }

    it "deletes the required combo" do
      combo_count = Combo.all.count
      delete(:destroy, params: { id: Combo.first.id })
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(Combo.all.count).to eq 2
    end
  end
end
