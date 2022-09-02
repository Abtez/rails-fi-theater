class SessionsController < ApplicationController
    def add_session
        cookies[:click] ||= 0
        cookies[:click] = cookies[:click].to_i + 1

        session[:click] ||= 0
        session[:click] += 1

        render json: { session: session, cookies: cookies.to_hash }
    end
end