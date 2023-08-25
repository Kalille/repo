class Appointment < ApplicationRecord
belongs_to :user
has_one_attached :image
validates :start_time, presence: true, timeliness: {type: :datetime}
# validates :start_time_in_future 

def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached? 
end

def start_time_in_future
    errors.add(:start_time, "must be in the future")
    if start_time.present? && start_time < DateTime.now
end
end
end
