class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :image_url, :firstName, :lastName, :contact,:attachment_format, :password_digest, :isAdmin, :address


  def attachment_format
    return unless object.image.attached?
    object.image.blob.attributes
    .slice('filename', 'byte_size')
    .merge(url: object.image_url)
    .tap{|attrs| attrs['name'] = attrs.delete('filename')}

  end
end
