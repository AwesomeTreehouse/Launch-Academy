class HousesController < ApplicationController

  def index
    @houses = House.all
  end

  def new
   @house = House.new

  end

  def show
    @house = House.find(params[:id])
    @members = Member.where(house_id: params[:id])
  end

  def create
    @house = House.new(house_params)

    if @house.save
      flash[:notice] = 'Restaurant added successfully'
      redirect_to root_path
    else
      render :new
    end
  end

  private
    def re_params
      params.require(:house).permit(:name, :address, :city, :state, :zip, :description)
    end

end
