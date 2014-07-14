module Jekyll
  class RenderTimeTag < Liquid::Tag

    @@version = `git rev-parse --short HEAD`.strip + '@' + Time.now.to_s

    def render(context)
      @@version
    end
  end
end

Liquid::Template.register_tag('build_version', Jekyll::RenderTimeTag)