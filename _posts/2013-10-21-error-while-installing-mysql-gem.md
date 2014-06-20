---
layout: post
title: "Error on mysql2 gem installation"
categories: development
tags: rails mysql mysql2 mysql2-gem gem installation error
---

Error on mysql2 gem installation can be fixed via installing a package.

{% highlight bash %}
$ gem install mysql2 -v '0.3.13'
Building native extensions.  This could take a while...
ERROR:  Error installing mysql2:
        ERROR: Failed to build gem native extension.

    /home/ubuntu/.rvm/rubies/ruby-2.0.0-p247/bin/ruby extconf.rb
checking for rb_thread_blocking_region()... yes
checking for rb_wait_for_single_fd()... yes
checking for rb_hash_dup()... yes
checking for rb_intern3()... yes
checking for mysql_query() in -lmysqlclient... no
checking for main() in -lm... yes
checking for mysql_query() in -lmysqlclient... no
checking for main() in -lz... yes
checking for mysql_query() in -lmysqlclient... no
checking for main() in -lsocket... no
checking for mysql_query() in -lmysqlclient... no
checking for main() in -lnsl... yes
checking for mysql_query() in -lmysqlclient... no
checking for main() in -lmygcc... no
checking for mysql_query() in -lmysqlclient... no
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.

Provided configuration options:
        --with-opt-dir
        --without-opt-dir
        --with-opt-include
        --without-opt-include=${opt-dir}/include
        --with-opt-lib
        --without-opt-lib=${opt-dir}/lib
        --with-make-prog
        --without-make-prog
        --srcdir=.
        --curdir
        --ruby=/home/ubuntu/.rvm/rubies/ruby-2.0.0-p247/bin/ruby
        --with-mysql-config
        --without-mysql-config
        --with-mysql-dir
        --without-mysql-dir
        --with-mysql-include
        --without-mysql-include=${mysql-dir}/include
        --with-mysql-lib
        --without-mysql-lib=${mysql-dir}/
        --with-mysqlclientlib
        --without-mysqlclientlib
        --with-mlib
        --without-mlib
        --with-mysqlclientlib
        --without-mysqlclientlib
        --with-zlib
        --without-zlib
        --with-mysqlclientlib
        --without-mysqlclientlib
        --with-socketlib
        --without-socketlib
        --with-mysqlclientlib
        --without-mysqlclientlib
        --with-nsllib
        --without-nsllib
        --with-mysqlclientlib
        --without-mysqlclientlib
        --with-mygcclib
        --without-mygcclib
        --with-mysqlclientlib
        --without-mysqlclientlib


Gem files will remain installed in /home/ubuntu/.rvm/gems/ruby-2.0.0-p247@myenv/gems/mysql2-0.3.13 for inspection.
Results logged to /home/ubuntu/.rvm/gems/ruby-2.0.0-p247@myenv/gems/mysql2-0.3.13/ext/mysql2/gem_make.out
{% endhighlight %}

Solution
--------

Install `libmysqlclient-dev` package.

{% highlight bash %}
$ sudo aptitude install libmysqlclient-dev
{% endhighlight %}
