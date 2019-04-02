require "rails_helper"

RSpec.describe ToppingsController, type: :controller do
  describe "GET#index" do
    it "redirects to the root path" do
      get :index

      expect(response.status).to eq 302
    end
  end
end
