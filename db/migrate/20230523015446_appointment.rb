class Appointment < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.string :title
      t.string :description
      t.datetime :start_time
      t.timestamps
    end
  end
end
