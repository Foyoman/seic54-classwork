# lr.rb - A Ruby command line reader (equivalent to cat)
# Usage: ruby lr.rb flintstones.txt

# a built-in variable

# ARGF is an array of all the lines of all the files mentioned in ARGV

# [8] Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.
ARGF.each do |line|
	puts line if line =~ /fred/ && line =~ /wilma/
end