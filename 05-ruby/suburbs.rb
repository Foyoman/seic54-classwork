print "What suburb do you live in? "
residence = gets.chomp.capitalize

# v2 case
puts case residence 
when 'Bondi'
    "Wow beaches and botox etc"
when 'Glebe'
    "Nice foreshore walk"
when 'Newcastle'
    "That is quite the commute"
else 
    "I'm sure that's a nice place"
end

# if suburb = "Lidcombe"
#     puts "You must be me"