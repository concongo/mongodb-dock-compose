# mongodb-dock-compose

MongoDb DockerCompose

1) Set the `.env` file with the following values:

    * DATABASE=tweets
    * ADM_USERNAME=admin
    * ADM_PASSWORD=admin
    * USERNAME=root
    * PASSWORD=example
    * AWS_SECRET_ACCESS_KEY=KEY
    * AWS_ACCESS_KEY_ID=ID
    * BACKUP_INTERVAL=5m
    * BUCKET_URL=s3://.../..

2) Set the environment Variables `nano env.txt``

3) Create the `.env` with `cp env.txt .env`

4) `docker-compose up -d` to start the Server