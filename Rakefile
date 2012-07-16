require 'erb'
require 'ostruct'

METADATA = OpenStruct.new(
  :name => 'ad ade',
  :shortname => 'ad-ade',
  :version => '1.4',
  :author => 'Eike Theresa Stender, Philipp Bosch',
  :description => 'Lass die Werbung aus deinem Browser verschwinden und bekomme stattdessen täglich verschiedene Artikel, Bilder oder Videos.',
  :website => 'http://www.ad-ade.de/'
)

task :build => [:build_chrome, :build_firefox, :build_safari]

def copy_common_files(target_dir)
  sh "rm -rf #{target_dir} && mkdir -p #{target_dir} && cp -R common/ #{target_dir}"
end

def render_template(source, target, data)
  template = ERB.new File.read(source)
  File.open(target, "w") do |f|
    f.write(template.result(data.instance_eval { binding }))
  end
end

# BUILD CHROME EXTENSION #
task :build_chrome do
  copy_common_files 'chrome/ad-ade/common'
  render_template 'chrome/ad-ade/manifest.json.erb', 'chrome/ad-ade/manifest.json', METADATA
  wd = File.expand_path(File.dirname(__FILE__))
  # sh "'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' --pack-extension=#{wd}/chrome/ad-ade --pack-extension-key=#{wd}/chrome/ad-ade.pem --no-message-box"
  sh "cd chrome && zip -r ad-ade.zip ad-ade/"
end

# BUILD FIREFOX ADDON #
task :build_firefox do
  copy_common_files 'firefox/data/common'
  render_template 'firefox/package.json.erb', 'firefox/package.json', METADATA
  sh "cd firefox && cfx xpi"
end

# BUILD SAFARI EXTENSION #
task :build_safari do
  copy_common_files 'safari/ad-ade.safariextension/common'
  sh 'cp common/icon-64.png safari/ad-ade.safariextension/Icon.png'
  render_template 'safari/ad-ade.safariextension/Info.plist.erb', 'safari/ad-ade.safariextension/Info.plist', METADATA
  puts "WARNING: Safari extension needs to be built from within Safari's Extension Builder."
end

task :collect_builds do
  # sh "cp chrome/ad-ade.crx build/ad-ade-#{METADATA.version}.crx"
  sh "cp chrome/ad-ade.zip build/ad-ade-#{METADATA.version}.chrome.zip"
  sh "cp firefox/ad-ade.xpi build/ad-ade-#{METADATA.version}.xpi"
  sh "cp safari/ad-ade.safariextz build/ad-ade-#{METADATA.version}.safariextz"
end


task :firefox do
  Rake::Task["build_firefox"].invoke
  sh "cd firefox && cfx run"
end
