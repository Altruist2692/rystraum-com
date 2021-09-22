---
title: Installing ruby-1.9.3-p551 on Apple M1
date: 2021-09-22T03:24:55.579Z
---
Add `gem 'mimemagic', github: "mimemagicrb/mimemagic", ref: 'a4b038c6c1b9d76dac33d5711d28aaa9b4c42c66'` to `Gemfile`. That ref is for 0.3.0. If you need a different version, go look at the commit history of mimemagic in Github and look for the merge commit of the corresponding version.

```
CFLAGS="-Wno-error=implicit-function-declaration" RUBY_CONFIGURE_OPTS="--with-zlib-dir=$(brew --prefix zlib) --with-openssl-dir=$(brew --prefix openssl@1.1) --with-libyaml-dir=$(brew --prefix libyaml)" arch -x86_64 rvm reinstall 1.9.3-p551 --rubygems 1.3.6
```
```
gem install bundler -v '<2.0'
```
```
gem install nokogiri -v '1.6.2' --source 'http://rubygems.org/' -- --use-system-libraries --with-xml2-include=/usr/include/libxml2
```
```
LDFLAGS="-L/usr/local/opt/libffi/lib" PKG_CONFIG_PATH="/usr/local/opt/libffi/lib/pkgconfig" gem install ffi -v '1.9.10'
```
```
gem install mysql2 -v '0.3.18' --source 'http://rubygems.org/' -- --with-mysql-config=/usr/local/bin/mysql_config --srcdir=/usr/local/include/mysql/ --platform=ruby --with-ldflags=-L/usr/local/opt/openssl/lib --with-cppflags=-I/usr/local/opt/openssl/include
```
```
brew install v8@3.15
```
```
gem install libv8 -v '3.16.14.13' --source 'http://rubygems.org/' -- --with-system-v8 --with-cflags="-Wno-error=implicit-function-declaration" --with-cxx=clang++
```
```
gem install therubyracer -v '0.12.2' --source 'http://rubygems.org/' -- --with-v8-dir="$(brew --prefix v8@3.15)" --with-v8-include="$(brew --prefix v8@3.15)/include/" --with-v8-lib="$(brew --prefix v8@3.15)/lib/"
```