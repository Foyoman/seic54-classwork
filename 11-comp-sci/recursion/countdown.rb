require 'pry'

def countdown_iterative(n=10) # initial
    while n >= 0 # conditional
        puts n 
        n -= 1 # update: mutation
        sleep 1
    end
    puts "Blast off!"
end

# Loops are optional
def countdown_recursive(n=10) # initial
    # base case
    # moves closer to the base case
    if n < 0
        puts "Blast off!"
    else
        # do some work
        puts n
        sleep 1
        countdown_recursive n - 1
        # move closer to the base case: no mutation
    end
end

binding.pry