require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }

  describe "GET#show" do
    it "renders the current user" do
      sign_in(user)

      get :show, params: { id: user.id }

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
    end
  end
end
