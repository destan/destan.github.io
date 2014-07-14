2014-07-14T16:16:04.381+0300|SEVERE: log4j:WARN No appenders could be found for logger (org.jboss.logging).
2014-07-14T16:16:04.381+0300|SEVERE: log4j:WARN Please initialize the log4j system properly.


Solution:

Appdend default log4j properties file under resources

# Set root logger level to DEBUG and its only appender to A1.
log4j.rootLogger=DEBUG, A1

# A1 is set to be a ConsoleAppender.
log4j.appender.A1=org.apache.log4j.ConsoleAppender

# A1 uses PatternLayout.
log4j.appender.A1.layout=org.apache.log4j.PatternLayout
log4j.appender.A1.layout.ConversionPattern=%-4r [%t] %-5p %c %x - %m%n
