---
layout: post
title: "Linux başlarken root olarak komut çalıştırmak"
categories: [yazılım, viki]
tags: lxc startup başlangıç linux ubuntu başlangıç-programları root-olarak-çalıştırmak linux-başlarken
---

Normalde Ubuntu'da `Startup Applications` uygulaması ile ekleyere veya `.bashrc` betiğine ekleyerek bir komutun başlangıçta çalışmasını sağlamak mümkün. Ancak çalışmasını istediğimiz komut sudo yetkisi istiyorsa iş değişik.

Root olarak yani sudo yetkisi ile çalıştırmak istediğimiz komutu `/etc/rc.local` dosyasına **başında sudo olmadan** yazarız.

Örneğin aşağıdaki betikte `/etc/rc.local` dosyasına `lxc-start -n gelistirmeortamı -d` kısmı eklenerek *gelistirmeortamı* adlı sanal makinenin başlangıçta otomatik olarak başlaması sağlanmış.


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
lxc-start -n gelistirmeortamı -d

exit 0
{% endhighlight %}