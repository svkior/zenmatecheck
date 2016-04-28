#!/bin/bash

echo Enable internet
sudo iptables -D OUTPUT -p tcp --dport 80 -j DROP
sudo iptables -D OUTPUT -p tcp --dport 443 -j DROP
sudo iptables -D INPUT -p tcp --sport 80 -j DROP
sudo iptavles -D INPUT -p tcp --sport 443 -j DROP
sudo iptables -L
