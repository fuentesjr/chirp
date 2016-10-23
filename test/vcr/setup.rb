require 'vcr'

WebMock.enable!
WebMock.allow_net_connect!

VCR.configure do |c|
  c.cassette_library_dir = Rails.root.join("test", "vcr", "cassettes")
  #c.debug_logger = File.open(Rails.root.join("test", "vcr", "debug.log"), 'w')
  c.hook_into :webmock
end
