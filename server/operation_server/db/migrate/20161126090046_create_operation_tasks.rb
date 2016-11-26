class CreateOperationTasks < ActiveRecord::Migration
  def change
    create_table :operation_tasks do |t|
      t.references :operation, index: true, foreign_key: true
      t.references :task, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
