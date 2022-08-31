class Production < ApplicationRecord
    has_many :crew_members

    validates :title, presence: true
    validates(:director, {:length => {:minimum => 5}})
    validates :title, :uniqueness => true
    def title_director
        "#{title} : #{director}"
    end

    validate :no_more_anime

    def no_more_anime
        if genre.downcase == "anime"
            errors.add(:genre, "No more anime")
        end
    end
end
