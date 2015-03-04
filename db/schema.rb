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

ActiveRecord::Schema.define(version: 20150302015900) do

  create_table "albums", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.integer  "photo_store_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "albums", ["photo_store_id"], name: "index_albums_on_photo_store_id"

  create_table "article_stores", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "articles", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "author"
    t.string   "translator"
    t.string   "image_link"
    t.string   "image_upload"
    t.string   "content"
    t.integer  "article_store_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "articles", ["article_store_id"], name: "index_articles_on_article_store_id"

  create_table "book_stores", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "books", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "author"
    t.string   "translator"
    t.string   "image_link"
    t.string   "image_upload"
    t.string   "content"
    t.integer  "book_store_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "books", ["book_store_id"], name: "index_books_on_book_store_id"

  create_table "homes", force: :cascade do |t|
    t.string   "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lecture_stores", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "lectures", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "url"
    t.string   "author"
    t.integer  "lecture_store_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "lectures", ["lecture_store_id"], name: "index_lectures_on_lecture_store_id"

  create_table "newfeeds", force: :cascade do |t|
    t.integer  "other_item_detail_id"
    t.integer  "album_id"
    t.integer  "article_id"
    t.integer  "book_id"
    t.integer  "rule_id"
    t.integer  "lecture_id"
    t.integer  "news_id"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "newfeeds", ["album_id"], name: "index_newfeeds_on_album_id"
  add_index "newfeeds", ["article_id"], name: "index_newfeeds_on_article_id"
  add_index "newfeeds", ["book_id"], name: "index_newfeeds_on_book_id"
  add_index "newfeeds", ["lecture_id"], name: "index_newfeeds_on_lecture_id"
  add_index "newfeeds", ["news_id"], name: "index_newfeeds_on_news_id"
  add_index "newfeeds", ["other_item_detail_id"], name: "index_newfeeds_on_other_item_detail_id"
  add_index "newfeeds", ["rule_id"], name: "index_newfeeds_on_rule_id"

  create_table "news", force: :cascade do |t|
    t.string   "name"
    t.string   "during"
    t.string   "place"
    t.string   "content"
    t.string   "image_link"
    t.string   "image_upload"
    t.string   "description"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "other_item_details", force: :cascade do |t|
    t.string   "name"
    t.string   "source"
    t.string   "author"
    t.string   "postor"
    t.string   "translator"
    t.string   "during"
    t.string   "place"
    t.string   "content"
    t.string   "image_link"
    t.string   "image_upload"
    t.string   "url"
    t.string   "description"
    t.string   "status"
    t.string   "view"
    t.string   "show"
    t.string   "params"
    t.integer  "other_item_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "other_item_details", ["other_item_id"], name: "index_other_item_details_on_other_item_id"

  create_table "other_items", force: :cascade do |t|
    t.string   "name"
    t.integer  "other_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "other_items", ["other_id"], name: "index_other_items_on_other_id"

  create_table "others", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "photo_stores", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "photos", force: :cascade do |t|
    t.string   "name"
    t.string   "url"
    t.string   "description"
    t.integer  "album_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "photos", ["album_id"], name: "index_photos_on_album_id"

  create_table "rule_stores", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "rules", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.string   "author"
    t.string   "translator"
    t.string   "image_link"
    t.string   "image_upload"
    t.string   "content"
    t.integer  "rule_store_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "rules", ["rule_store_id"], name: "index_rules_on_rule_store_id"

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.boolean  "suppervisor"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
