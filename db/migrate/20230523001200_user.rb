class User < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :contact
      t.boolean :isAdmin
      
      t.timestamps
    end
  end
end
