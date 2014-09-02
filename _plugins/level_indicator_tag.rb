module Jekyll
  class LevelIndicatorTag < Liquid::Tag
    @@html_template = '<div class="level-indicator" level="{level}" title="{level_desc}"><div></div><div></div><div></div><div></div><div></div></div>'
    @@level_desc_map = {
      1 => "Çok yeniler için",
      2 => "Başlangıç düzeyi",
      3 => "Orta düzey",
      4 => "İleri düzey",
      5 => "Uzman düzeyi"
    }

    def initialize(tag_name, text, tokens)
      super

      arguments = text.strip.split(" ")

      if arguments.size == 2
        @text = arguments[0]
        @level = arguments[1].to_i
        @verbose = true
      elsif arguments.size == 1
        if is_number?(arguments[0])
          @level = arguments[0].to_i
        else
          @text = arguments[0]
        end
      end

    end

    def render(context)
      level = @level || context.environments.first["page"]["level"]

      level_desc = (context.environments.first["page"]["level_desc"] || @@level_desc_map[level])

      if @verbose
        return @@html_template.sub("{level}", level.to_s).sub("{level_desc}", level_desc) + " " + level_desc
      end

      if @text == "text_only" 
        return level_desc
      else
        return @@html_template.sub("{level}", level.to_s).sub("{level_desc}", level_desc)
      end
      
    end

    def is_number?(object)
      true if Integer(object) rescue false
    end

  end
end

Liquid::Template.register_tag('level_indicator', Jekyll::LevelIndicatorTag)