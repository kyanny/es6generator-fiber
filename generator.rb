generator = Fiber.new do |a|
  puts a
  b = Fiber.yield 1
  puts b
  c = Fiber.yield 2
  puts c
end

puts generator.resume 'a'
puts generator.resume 'b'
puts generator.resume 'c'
puts generator.resume 'd'
