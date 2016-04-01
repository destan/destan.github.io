# this will show the build version (latest commit hash) of jekyll branch
# ex: 72abdcc@2016-04-01 14:51:17 +0300
module Jekyll
  class RenderTimeTag < Liquid::Tag

    @@version = `git rev-parse --short HEAD`.strip + '@' + Time.now.to_s

    def render(context)
      @@version
    end
  end
end

Liquid::Template.register_tag('build_version', Jekyll::RenderTimeTag)
