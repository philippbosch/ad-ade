require 'erb'
require 'ostruct'

METADATA = OpenStruct.new(
  :name => 'ad ade',
  :shortname => 'ad-ade',
  :version => '0.1',
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
  copy_common_files 'chrome/common'
  render_template 'chrome/manifest.json.erb', 'chrome/manifest.json', METADATA
end

# BUILD FIREFOX ADDON #
task :build_firefox do
  copy_common_files 'firefox/data/common'
  render_template 'firefox/package.json.erb', 'firefox/package.json', METADATA
end

# BUILD SAFARI EXTENSION #
task :build_safari do
  copy_common_files 'safari/common'
end


task :firefox do
  Rake::Task["build_firefox"].invoke
  sh "cd firefox && cfx run"
end
