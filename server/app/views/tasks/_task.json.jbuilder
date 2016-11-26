json.extract! task, :id, :name, :created_at, :updated_at
json.url task_url(task, format: :json)