# lr.rb - A Ruby command line reader (equivalent to cat)
# Usage: ruby lr.rb flintstones.txt

# a built-in variable

# ARGF is an array of all the lines of all the files mentioned in ARGV

# [8] Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.

# (Sunday|Saturday): Alternatives
# (): Capturing: \1 \2 \3 \9
ARGF.each do |line|
	puts line if line =~ /(.)\1/
end

# the regular expression moves through the string starting from the beginning until it finds a match