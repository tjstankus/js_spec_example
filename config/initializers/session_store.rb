# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_js_spec_example_session',
  :secret      => 'b713f1d2cb27caabb4bbf634eddab489da2648d5b1d226f09338868b44cde8815c997d9eb7adad51e1fa0f410cb9d7af4fe2400d8bb3277771ed9341ba49c20b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
