---
layout: post
title:  "No appenders could be found for logger"
categories: development
tags:
 - java
 - log4j
 - problem
draft: true
---

Severe warning about "No appenders could be found for logger" when log4j is used.

### Problem

    |SEVERE: log4j:WARN No appenders could be found for logger (org.jboss.logging).
    |SEVERE: log4j:WARN Please initialize the log4j system properly.

### Solution

Appdend default log4j properties file under resources

{% highlight properties %}
  # Set root logger level to DEBUG and its only appender to A1.
  log4j.rootLogger=DEBUG, A1

  # A1 is set to be a ConsoleAppender.
  log4j.appender.A1=org.apache.log4j.ConsoleAppender

  # A1 uses PatternLayout.
  log4j.appender.A1.layout=org.apache.log4j.PatternLayout
  log4j.appender.A1.layout.ConversionPattern=%-4r [%t] %-5p %c %x - %m%n
{% endhighlight %}

### Explanaiton

From log4j docs:

**Automatic Configuration**

Log4j has the ability to automatically configure itself during initialization. When Log4j starts it will locate all the ConfigurationFactory plugins and arrange then in weighted order from highest to lowest. As delivered, Log4j contains two ConfigurationFactory implementations, one for JSON and one for XML.

1. Log4j will inspect the "log4j.configurationFile" system property and, if set, will attempt to load the configuration using the ConfigurationFactory that matches the file extension.
2. If no system property is set the JSON ConfigurationFactory will look for log4j2-test.json or log4j2-test.jsn in the classpath.
3. If no such file is found the XML ConfigurationFactory will look for log4j2-test.xml in the classpath.
4. If a test file cannot be located the JSON ConfigurationFactory will look for log4j2.json or log4j2.jsn on the classpath.
5. If a JSON file cannot be located the XML ConfigurationFactory will try to locate log4j2.xml on the classpath.
6. If no configuration file could be located the `DefaultConfiguration` will be used. This will cause logging output to go to the console.




http://stackoverflow.com/questions/11639997/how-do-you-configure-logging-in-hibernate-4
http://stackoverflow.com/questions/12456069/how-to-use-jboss-logging-brought-by-hibernate
http://community.jaspersoft.com/wiki/how-log-hibernate-queries-bound-parameters
http://java.dzone.com/articles/springhibernate-improved-sql
http://stackoverflow.com/questions/21754324/hibernate-4-3-show-sql-parameters