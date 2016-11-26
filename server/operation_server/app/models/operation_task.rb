# == Schema Information
#
# Table name: operation_tasks
#
#  id           :integer          not null, primary key
#  operation_id :integer
#  task_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class OperationTask < ActiveRecord::Base
  belongs_to :operation
  belongs_to :task
end
