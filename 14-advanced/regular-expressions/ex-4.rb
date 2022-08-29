# lr.rb - A Ruby command line reader (equivalent to cat)
# Usage: ruby lr.rb flintstones.txt

# a built-in variable

# ARGF is an array of all the lines of all the files mentioned in ARGV

# [8] Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?
ARGF.each do |line|
	puts line if line =~ /[A-Z][a-z]/
end

# ^