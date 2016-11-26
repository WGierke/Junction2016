# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Task.create!(name:"Preparation")
Task.create!(name:"Anaesthesia")
Task.create!(name:"Operation")
Task.create!(name:"Finished")
Operation.create!(name: "Knee Fixing", task: Task.all, current_task_id: Task.find(1).id)
