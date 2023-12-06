class User < ApplicationRecord
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
#   devise :database_authenticatable, :registerable,
#          :recoverable, :rememberable, :validatable
    has_secure_password
    has_one_attached :image
    validates :password, length: {minimum: 8}
    validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
    has_many :appointments
    # before_save :format_name
    # def format_name
    #   if self.firstName[0] != self.firstName[0].upcase && self.lastName[0] != self.lastName[0].upcase
    #      self.firstName[0].capitalize && self.lastName[0].capitalize
    #   end
    # end
# def screen_name(first_name, last_name)
# "#{first} #{last}"

# end



    def image_url
        Rails.application.routes.url_helpers.url_for(image) if image.attached? 
    end
end
