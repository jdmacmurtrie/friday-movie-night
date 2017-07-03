class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

   validates :first_name, presence: true
   validates :last_name, presence: true
   validates :email, presence: true,
     format: { with: /([\w\.]+)@([\w\.]+)\.(\w+)/, message: "must be a valid email address" }
   validates :password, presence: true
end
