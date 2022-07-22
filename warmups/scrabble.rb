class Scrabble
    def score word
        sum = 0
        word.upcase.split('').each { |l|
            case l
            when 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' then sum += 1
            when 'D', 'G' then sum += 2
            when 'B', 'C', 'M', 'P' then sum += 3
            when 'F', 'H', 'V', 'W', 'Y' then sum += 4
            when 'K' then sum += 5
            when 'J', 'X' then sum += 8
            when 'Q', 'Z' then sum += 10
            end
        }
        sum
    end
end

game = Scrabble.new
p game.score "cabbage"