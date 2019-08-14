Сборка и запуск

docker build -t iddocker218/first_docker_app:first_docker_app .
docker images
docker run -p 80:80 -ti 71cac0c31fae

Отправка на DockerHub

docker login && docker push iddocker218/first_docker_app:first_docker_app

Скачать репозиторий

docker login && docker pull iddocker218/first_docker_app:first_docker_app
docker images

Запуск после скачивания

docker run -p 80:80 -ti iddocker218/first_docker_app:first_docker_app

