# lr.rb - A Ruby command line reader (equivalent to cat)
# Usage: ruby lr.rb flintstones.txt

# a built-in variable

# ARGF is an array of all the lines of all the files mentioned in ARGV
ARGF.each do |line|
	puts line
end