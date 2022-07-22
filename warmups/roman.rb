# numerals = {
#     1000 => 'M',
#     900 => 'CM',
#     500 => 'D',
#     400 => 'CD',
#     100 => 'C',
#     90 => 'XC',
#     50 => 'L',
#     40 => 'XL',
#     10 => 'X',
#     9 => 'IX',
#     5 => 'V',
#     4 => 'IV',
#     1 => 'I'
# }

# num.to_s.size

# num / numerals.keys[i] if 

Roman = {
    1000 => "M",  
    900 => "CM",  
    500 => "D",  
    400 => "CD",
    100 => "C",  
    90 => "XC",  
    50 => "L",  
    40 => "XL",  
    10 => "X",  
    9 => "IX",  
    5 => "V",  
    4 => "IV",  
    1 => "I",  
}

def numerise n
    numerals = ""

    Roman.each do |value, key|
        numerals << key*(n / value)
        n = n % value
    end

    return numerals
end

require 'pry'
binding.pry

# Loden's

def roman_numerals year

    output = ''
    
    roman.each do |key, value|
        
        year -= key
        output += value
    end