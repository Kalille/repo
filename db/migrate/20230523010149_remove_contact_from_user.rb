class RemoveContactFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :contact, :integer
  end
end
