class ProductionsController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :handle_blank_field

    before_action :authorize
    skip_before_action :authorize, only: [:index]

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

    def summary
        production = Production.find(params[:id])
        render json: production, serializer: ProductionSerializer
    end
    
    def create
        production = Production.create!(production_params)
        render json: production, status: :created
    end
    
    def update
        production = Production.find_by(id: params[:id])
        
        if production
            production.update(production_params)
            render json: production, status: :accepted
        else
            render json: {error: "production not found"}
        end
    end

    def destroy
        production = Production.find_by(id: params[:id])
        if production
            production.destroy
            head :no_content
            # render json: {error: "production not found"}
        else
            render json: {error: "production not found"}
        end
    end
    

    private

    def production_params
        params.permit(:title, :genre, :budget, :image, :director, :ongoing)
    end

    def handle_blank_field(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
