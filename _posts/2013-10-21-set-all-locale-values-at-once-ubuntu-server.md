---
layout: post
title: "Reset All Locale Settings"
categories: development
tags: ubuntu locale settings update-locale set-all-locale-values-at-once ubuntu-server mongodb
---

Set all locale values at once from console.

{% highlight bash %}
sudo update-locale LANG=en_US.UTF-8
sudo update-locale LANGUAGE=en_US.UTF-8
sudo update-locale LC_CTYPE=en_US.UTF-8
sudo update-locale LC_NUMERIC=en_US.UTF-8
sudo update-locale LC_TIME=en_US.UTF-8
sudo update-locale LC_COLLATE=en_US.UTF-8
sudo update-locale LC_MONETARY=en_US.UTF-8
sudo update-locale LC_MESSAGES=en_US.UTF-8
sudo update-locale LC_PAPER=en_US.UTF-8
sudo update-locale LC_NAME=en_US.UTF-8
sudo update-locale LC_ADDRESS=en_US.UTF-8
sudo update-locale LC_TELEPHONE=en_US.UTF-8
sudo update-locale LC_MEASUREMENT=en_US.UTF-8
sudo update-locale LC_IDENTIFICATION=en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8
{% endhighlight %}

Related
-------

When getting a mongo dump you may encounter following error:

    terminate called after throwing an instance of 'std::runtime_error'
      what():  locale::facet::_S_create_c_locale name not valid

This error may be related to your locale settings and reseting all your locale may solve it.