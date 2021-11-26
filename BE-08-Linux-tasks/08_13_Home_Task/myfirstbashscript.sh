#!/bin/bash

USER=Anton

date
echo Hello dear $USER ':)'
echo I working from following directory: $(pwd)
echo Number of actual processes: $(ps -ef | tail +2 | wc -l)
echo Number of processes with name '"bioset"': $(ps -ef | grep  bioset | grep -v grep | wc -l)
echo Actual rights for file '"/etc/passwd"' is: $(ls -la /etc | grep passwd | head -1 | awk '{print $1}')

