#!/bin/bash

echo Disable internet
sudo iptables -A OUTPUT -p tcp --dport 80 -j DROP
sudo iptables -A OUTPUT -p tcp --dport 443 -j DROP
sudo iptables -A INPUT -p tcp --sport 80 -j DROP
sudo iptavles -A INPUT -p tcp --sport 443 -j DROP
sudo iptables -L
