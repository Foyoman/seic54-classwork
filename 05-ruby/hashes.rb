require 'pry'

a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?
a[1]

# How would you add your name to the array?
a << "Edward"

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
h[1]

# How would you return the string "Two"?
h[:two]

# How would you return the number 2?
h["two"]

# How would you add {3 => "Three"} to the hash?
h[3] = "Three"

# How would you add {:four => 4} to the hash?
h.merge!({:four = > 4})


is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
true

# What is the return value of is["Erik" == "Jonathan"]?
false

# What is the return value of is[9 > 10]?
false

# What is the return value of is[0]?
nil

# What is the return value of is["Erik"]?
nil


users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?

p users["Erik"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?

p users["Erik"][:favorite_numbers] << 7

# How would you add yourself to the users hash?

p users["Edward"] = {:twitter => "edwardtdo", :favorite_numbers => [69, 420]}

# How would you return the array of Erik's favorite numbers?

p users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?

p users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?

p users["Anil"][:favorite_numbers].select { |n| n.even? }

# SYMBOL TO PROC

p users["Anil"][:favorite_numbers].select &:even?

# How would you return an array of the favorite numbers common to all users?

p users.values.map { |user| user[:favorite_numbers] }.inject &:&

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

p users.values.map { |user| user[:favorite_numbers] }.flatten.sort.uniq

binding.pry