words = %w( I AM THAT I AM )
words = ARGV unless ARGV.empty?

# ruby permutations.rb PLEASE KILL ME

puts "-=" * 40
puts words.join(' ').center 80
puts "=-" * 40

words.permutation.to_a.shuffle.each do |line|
	puts line.join(' ').center 80
end

# TODO:
# Improve the formatting
# Accept command line arguments