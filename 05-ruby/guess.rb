print "Give me the max number: "
maxNumber = gets.to_i
randomNumber = rand 0...maxNumber

print "Guess my number: "
guess = gets.to_i

until guess == randomNumber
    if guess < randomNumber
        print "wrong, guess higher bitchass: "
    end
    if guess > randomNumber
        print "wrong, guess lower bitchass: "
    end
    guess = gets.to_i
end

puts "bitch, u guessed it"

# def hello(name)
#   puts "Hello #{ name }!"
# end

# hello 'George'

# # Ruby has implicit return 
# def add(a, b)
#     result = a + b
#     result #implicitly returned
# end

# add 17, 12

# def add(a, b)
#     a + b
# end