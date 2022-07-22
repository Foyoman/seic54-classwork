print "What is the current temperature? "
current_temp = gets.chomp.to_f

print "Is the A/C functional? (y/n)"
ac = gets[0].downcase

print "What is your desired temperature? "
desired_temp = gets.chomp.to_f

unless ac == 'y'
    if currentTemp > desiredTemp
        puts "Fix the A/C now! It's hot!"
    else 
        puts "Fix the A/C whenever you have the chance... It's cool"
else puts "Turn on the A/C Please" if currentTemp > desiredTemp
end