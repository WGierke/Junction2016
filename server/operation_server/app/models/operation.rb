# == Schema Information
#
# Table name: operations
#
#  id          :integer          not null, primary key
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  curren_task :integer
#

class Operation < ActiveRecord::Base
	has_many :operation_task
	has_many :task, through: :operation_task

	validate :current_task_one_of_overall_tasks

	def current_task_one_of_overall_tasks
		task.map(&:id).include?(current_task_id)
	end
end
