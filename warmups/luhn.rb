def luhn? num
    num.digits
       .map.with_index {|x, i| i.odd? ? x * 2 : x}
       .map {|x| if x > 9; x.to_s.chars.map(&:to_i).inject(:+); else x end}
       .inject(:+) % 10 == 0
end

p luhn? 3554
p luhn? 8763
p luhn? 4070590981311 # => true
p luhn? 3103138183910 # => false


def loon? num
    # prepare sum variable
    sum = 0

    # convert number to reversed array of digits
    digits = num.digits
    # loop through the digits
    digits.each.with_index do |digit, index|
        # if digits index is odd, double digit
        digit *= 2 if index.odd?
        # if digit >= 10, subtract 9
        digit -= 9 if digit >= 10
        # add digit to sum variable
        sum += digit
    # end loop
    end
    # return true if sum variable is div by 10, else false
    sum % 10 == 0
end

require 'pry'
binding.pry