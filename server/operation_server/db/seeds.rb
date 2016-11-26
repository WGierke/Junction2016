# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Task.create!(name:"Preparation", description: "We prepare the operating room as well as the patient.")
Task.create!(name:"Anaesthesia", description: "We sedate the patient to increase his feeling of well-being during the operation process.")
Task.create!(name:"Operation", description: "We perform the actual medical surgery.")
Task.create!(name:"Finished", description: "The operation is finished. The patient is now allowed to wake up slowly from the surgery.")
Operation.create!(name: "Knee Fixing", task: Task.all, current_task_id: Task.find(1).id)
