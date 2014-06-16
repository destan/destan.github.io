module Jekyll
  class RenderTimeTag < Liquid::Tag

    def render(context)
      `git rev-parse --short HEAD`.strip + '@' + Time.now.to_s
    end
  end
end

Liquid::Template.register_tag('build_version', Jekyll::RenderTimeTag)