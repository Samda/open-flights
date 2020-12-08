class Airline < ApplicationRecord
    has_many :reviews

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end

    def avg_score
        if reviews.count.positive? && reviews.count(:score) > 0
            reviews.average(:score).round(2).to_f
        else
            0
        end
    end
end
