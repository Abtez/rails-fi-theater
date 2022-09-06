class User < ApplicationRecord
    validates :username, :uniqueness => true
    validates :email, :uniqueness => true
    validates :username, :presence => true
    validates :email, :presence => true
    validates :password, length: { minimum: 6, allow_blank: true }
    has_secure_password
end
