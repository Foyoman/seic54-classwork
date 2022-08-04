def countingValleys str
    altitude = 0
    str.split('').each { |l|
        case l
        when 'U' then altitude += 1
        when 'D' then altitude -= 1
        end
    }
    altitude
end    

p countingValleys 'UDDDUDUU'

require 'pry'
binding.pry