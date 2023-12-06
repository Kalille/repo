# require_relative "../app/models/user"
require_relative "../app/models/user.rb"
require 'rails_helper'

RSpec.describe User, type: :model do
  describe '#screen_name' do
    it 'returns the user\'s full name' do
      # Create a new User instance with first and last names
      user = User.new(first_name: 'Kalille', last_name: 'Overton')
      
      # Call the screen_name method and store the result
      result = user.screen_name
      
      # Expect the result to equal 'Kalille Overton'
      expect(result).to eq('Kalille Overton')
    end
  end
end

