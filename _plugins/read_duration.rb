# this tag calculates a content's reading time according to
# https://medium.com/the-story/read-time-and-you-bc2048ab620c#.sr6ack89a
# except adding extra 12sec for each image.
module Jekyll
  class ReadDurationTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)

      content = context[@text.strip]
      duration = content.split.size

      duration = duration / 275.0
      duration = duration == 0 ? 1 : duration.round
      return "#{duration} min"
    end
  end
end

Liquid::Template.register_tag('read_duration', Jekyll::ReadDurationTag)
