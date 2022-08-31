class ProductionsController < ApplicationController
    def index
        render json: Production.all, status: :ok
    end
    
    def show
        production = Production.find_by(id: params[:id])

        if production
            render json: production
        else
            render json: {error: "Not found"}, status: :not_found
        end
    end
    
    def create
        production = Production.create(production_params)
        render json: production, status: :created
    end

    private

    def production_params
        params.permit(:title, :genre, :budget, :image, :director, :ongoing)
    end
end
