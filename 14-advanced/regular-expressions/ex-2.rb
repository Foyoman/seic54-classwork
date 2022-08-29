# lr.rb - A Ruby command line reader (equivalent to cat)
# Usage: ruby lr.rb flintstones.txt

# a built-in variable

# ARGF is an array of all the lines of all the files mentioned in ARGV

# [6] Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred? (Add lines with these names to the text file.)
ARGF.each do |line|
	puts line if line =~ /[Ff]red/
end