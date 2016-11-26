class AddCurrentTaskToOperation < ActiveRecord::Migration
  def change
    add_column :operations, :current_task_id, :integer
  end
end
