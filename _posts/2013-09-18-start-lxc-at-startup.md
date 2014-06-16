---
layout: post
title: "How to Start LXC at System Startup"
categories: [development, wiki]
tags: lxc startup linux ubuntu startup-applications start-up-as-root lxc-without-sudo
---

If you want an LXC instance to start at system startup you need to use something different than adding the lxc-start command into .bashrc since it requires sudo. You should add the command to `/etc/rc.local` file which is executed at startup as root. Note that because this file is executed as root you **need to avoid putting sudo** before the command. See the example:


{% highlight bash %}
#!/bin/sh -e
#
# rc.local
#
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
#
# In order to enable or disable this script just change the execution
# bits.
#
# By default this script does nothing.

# start lxc instance on startup
lxc-start -n my_instance -d

exit 0
{% endhighlight %}