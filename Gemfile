# If you do not have OpenSSL installed, update
# the following line to use "http://" instead
source 'https://rubygems.org'

gem "middleman", "~>3.3.12"
gem "slim", ">= 2.0"

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

# for faster file watcher updates on windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# windows does not come with time zone data
gem "tzinfo-data", platforms: [:mswin, :mingw]

source "https://rails-assets.org" do
  gem "rails-assets-bootstrap-sass"
  gem "rails-assets-ractive"
end
