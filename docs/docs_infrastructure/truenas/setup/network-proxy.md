---
title: Network Proxy
date: 2025-07-25T20:52:26.185Z
tags:
  - truenas
categories:
  - truenas
slug: network-proxy
---

## Using Nginx Proxy Manager

### Perquisite

- Obtain a DDNS domain (cloudflare, duckDNS, etc)
- Dockge or portainer (prefered to install with custom docker compose as the app image from catalog cause the Nginx Proxy Manager SSL certificate request to malfunction)
- ISP port 443 and 80 being opened
- Docker compose file, similar to the following:

```yaml
services:
  app:
    image: jc21/nginx-proxy-manager:2.12.6
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - 80:80 # Standard HTTP port
      - 443:443 # Standard HTTPS port
      - 83:81 # Admin interface, external port occupied
    environment:
      - DB_MYSQL_HOST=db
      - DB_MYSQL_PORT=3306
      - DB_MYSQL_USER=${DB_USER}
      - DB_MYSQL_PASSWORD=${DB_PASSWORD}
      - DB_MYSQL_NAME=${DB_NAME}
      - DISABLE_IPV6=true # Disable if unnecessary
    depends_on:
      db:
        condition: service_healthy
    networks:
      - proxy-network
    volumes:
      - config:/app/config
      - data:/data
      - letsencrypt:/etc/letsencrypt
    logging:
      driver: json-file
      options:
        max-size: 10m
        max-file: "3"
  db:
    image: mariadb:10.11.7
    container_name: nginx-proxy-manager-db
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=${DB_ROOT_PASSWORD}
      - MYSQL_DATABASE=${DB_NAME}
      - MYSQL_USER=${DB_USER}
      - MYSQL_PASSWORD=${DB_PASSWORD}
      - MYSQL_INITDB_SKIP_TZINFO=1
    healthcheck:
      test:
        - CMD-SHELL
        - mysqladmin ping -u root -p$${MYSQL_ROOT_PASSWORD}
      interval: 5s
      timeout: 10s
      retries: 12
      start_period: 30s
    networks:
      - proxy-network
    volumes:
      - db_data:/var/lib/mysql
    logging:
      driver: json-file
      options:
        max-size: 10m
        max-file: "3"
volumes:
  config:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/your_path/config
  data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/your_path/data
  letsencrypt:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/your_path/letsencrypt
  db_data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/your_path/db
networks:
  proxy-network:
    name: npm-network
    driver: bridge
```
