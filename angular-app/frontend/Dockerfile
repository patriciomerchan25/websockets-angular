# construye Angular app con node y sirve con Apache
FROM node:20 AS build
WORKDIR /app
COPY angular/ .
RUN npm install && npm run build --prod


FROM httpd:2.4
COPY --from=build /app/dist/angular/browser /usr/local/apache2/htdocs/
# Configura el ServerName para evitar advertencias
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80
CMD ["httpd", "-D", "FOREGROUND"]
