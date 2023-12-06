
# calculator_spec.rb
require_relative '../app/models/calculator'

describe Calculator do

describe 'screen_name' do
it "returns the user screen name" do
    user = Calculator.new
    firstName = "Kalille"
    lastName = "Overton"
    result = user.screen_name(firstName,lastName)
    expect(result).to eq("Kalille Overton")
end

end

    describe '#subtraction' do
    it "returns the differrence of two numbers" do
        calculator = Calculator.new
        result = calculator.subtraction(18,4)
        expect(result).to eq(14)
    end
end



  describe '#add' do
    it 'returns the sum of two numbers' do
      calculator = Calculator.new
      result = calculator.add(2, 3)
      expect(result).to eq(5)
    end
  end
end
