class Zoo
  attr_reader :cages, :employees

  def initialize(name, opening_date, closing_date)
    @name = name
    @opening_date = opening_date
    @closing_date = closing_date
    create_cages
    @employees = []
  end

  def create_cages
    @cages = []
    10.times { @cages << Cage.new }
  end

  def add_employee (employee)
    @employees << employee
  end

  def open?(date)
    date.between?(@opening_date, @closing_date)
  end

  def add_animal(animal)
    @cages.each do |cage|
      if cage.empty?
        cage.animal = animal
        break
      end
    end
  end

  def visit
      
  end

  # describe "#visit" do
  #   let(:howard) { Employee.new("Howard Moon") }
  #   let(:vince) { Employee.new("Vince Noir") }
  #   let(:gorilla) { Gorilla.new("Bollo") }
  #   let(:fox) { Fox.new("Jack") }
  #   season_opening_date = Date.parse("2015/04/1")
  #   season_closing_date = Date.parse("2015/12/15")
  #
  #   let(:zoo) do
  #     zoo = Zoo.new("Zooniverse", season_opening_date, season_closing_date)
  #     zoo.add_employee(howard)
  #     zoo.add_employee(vince)
  #     zoo.add_animal(gorilla)
  #     zoo.add_animal(fox)
  #     zoo
  #   end
  #
  #   it "should output a string" do
  #     expect(zoo.visit).to be_a(String)
  #   end
  #
  #   it "should tell us the employees that waved to us" do
  #     expect(zoo.visit).to include("Howard Moon waved hello!\n")
  #     expect(zoo.visit).to include("Vince Noir waved hello!\n")
  #   end
  #
  #   it "should tell us what the animals said" do
  #     expect(zoo.visit).to include("Bollo got a bad feeling about this...\n")
  #     expect(zoo.visit).to include("Ring-ding-ding-ding-dingeringeding!\n")
  #   end
  # end
  #
  # describe "finished" do
  #   it "should give you a message when you are finished" do
  #     puts "\nYou're done! You built a Zoo! Woohoo!"

end
