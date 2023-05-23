class User < ApplicationRecord
    has_secure_password
    has_one_attached :image
    validates :password, length: {minimum: 8}
    validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
    has_many :appointments
    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached? 
    end
end
