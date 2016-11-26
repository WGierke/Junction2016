# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161126092232) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "operation_tasks", force: :cascade do |t|
    t.integer  "operation_id"
    t.integer  "task_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "operation_tasks", ["operation_id"], name: "index_operation_tasks_on_operation_id", using: :btree
  add_index "operation_tasks", ["task_id"], name: "index_operation_tasks_on_task_id", using: :btree

  create_table "operations", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "current_task_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "operation_tasks", "operations"
  add_foreign_key "operation_tasks", "tasks"
end
