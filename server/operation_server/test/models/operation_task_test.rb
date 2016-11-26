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

require 'test_helper'

class OperationTaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
