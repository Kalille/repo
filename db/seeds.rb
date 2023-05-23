# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create(name: "ME", address: "1223 home Drive", contact: "(215)387-7785",password: "password", email: "happyday@gmail.com", isAdmin: false)
Appointment.create(description: "cut grass",start_time: Time.now.to_datetime, user_id: 1)
