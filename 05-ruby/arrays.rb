require 'pry'

days_of_the_week = %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday)
p days_of_the_week #p: displays output for programmers (programmers' print AKA pretty print)

# day_to_move = days_of_the_week.pop
# days_of_the_week.unshift day_to_move

# days_of_the_week.unshift days_of_the_week.pop

# Most rubyish
days_of_the_week.rotate! -1
p days_of_the_week

# days_of_the_week[1..5]

# days_of_the_week.rotate.drop(5)
# days_of_the_week.rotate[-2..-1]

week_parts = [ days_of_the_week[1..5] , days_of_the_week.rotate.drop(5) ]
p week_parts

week_parts.pop
p week_parts

p week_parts.flatten.sort

binding.pry