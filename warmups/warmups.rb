# def triangle? (a, b, c)
#     sides = [a, b, c].to_a
#     longestSide = sides.max
#     lsIndex = sides.index longestSide
#     sides.delete_at(lsIndex)
#     if sides.sum > longestSide 
#         true
#     else false
#     end
# end 

# puts triangle? 1, 1, 1 # => true
# puts triangle? 4, 2, 3 # => true
# puts triangle? 1, 2, 2 # => true
# puts triangle? 5, 1, 2 # => false

# def triangle (a, b, c)
#     sides = [a, b, c].sort
#     sides[2] < sides[0] + sides[1]
# end

# def triangle! (*sides)
#     sides.sort!
#     sides[2] < sides[0] + sides[1]
# end

# def valid_date? date
#     today = "#{Time.now}".split.first.split('-')
#     date = date.split(', ').reverse

#     today[0] <= date[0] && today[1] <= date[1] && today[2] <= date[2]
# end

# puts valid_date? "12, 07, 2022" # => true
# puts valid_date? "13, 07, 2022"
# puts valid_date? "02, 08, 2022"
# puts valid_date? "26, 04, 2022"
# puts valid_date? "13, 07, 2023"
# puts valid_date? "13, 07, 2023"

# def count_nucleotides dna
#     counts = {
#         "A" => 0,
#         "C" => 0,
#         "G" => 0,
#         "T" => 0,
#         :invalid => 0
#     }
    
#     dna.split('').each { |n|
#         key = :invalid
#         if counts.keys.include? n
#             key = n
#         end
#         counts[key] += 1
#     }
    
#     counts.keys.each { |key|
#         puts "#{ key }: #{ counts[key] }"
#     }
    
#     # Another Approach Using Filter 
#     # counts.keys.each { |key| 
#     #     print "#{ key }: "
#     #     puts dna.split('').filter { |n| 
#     #         if key != :invalid
#     #             n == key
#     #         else
#     #             !counts.keys.include? n
#     #         end
#     #     }.size
#     # }
# end

# require 'pry'

# class Robot
#     attr_accessor :instruction_count

#     def initialize
#         @instruction_count = 0
#         @name = generate_serial

#         @starting = Process.clock_gettime(Process::CLOCK_MONOTONIC)
#         @restarting = Process.clock_gettime(Process::CLOCK_MONOTONIC)
#     end

#     def name
#         @instruction_count += 1
#         @name
#     end

#     def generate_serial
#         letters = ('AA'..'ZZ').to_a.sample
#         digits = ('000'...'999').to_a.sample

#         letters + digits
#     end

#     def reset
#         @instruction_count += 1

#         @name = generate_serial
#         @restarting = Process.clock_gettime(Process::CLOCK_MONOTONIC)
#     end

#     def timers
#         ending = Process.clock_gettime(Process::CLOCK_MONOTONIC)
#         elapsed = ending - @starting
#         relapsed = ending - @restarting
#         "#{relapsed.floor} seconds since last boot, #{elapsed.floor} seconds since creation"
#     end
# end

# robot3 = Robot.new

# binding.pry
def hamm str1, str2
    str1.split('').map.with_index{ |e, i| e == str2[i] ? 0 : 1 }.sum
end

ham 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'