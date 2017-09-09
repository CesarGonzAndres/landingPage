echo "inserting the image version in docker-compose template"
sed -i "s#tsserapp\/landpanama-front#$CONTAINER_NAME:$VERSION#" template/docker-compose.yml.template

echo "copying docker-compose"
scp template/docker-compose.yml.template $DEPLOY_USER@$DEPLOY_HOST:$DOCKER_COMPOSE_FILE

echo "pulling latest version of the code"
ssh $DEPLOY_USER@$DEPLOY_HOST "docker-compose -f $DOCKER_COMPOSE_FILE  pull landpanama-front"

echo "starting the new version"
ssh $DEPLOY_USER@$DEPLOY_HOST "docker-compose -f $DOCKER_COMPOSE_FILE  up -d landpanama-front"

echo "removing old and unsed images"
ssh $DEPLOY_USER@$DEPLOY_HOST "docker images --filter 'dangling=true' --format '{{.ID}}' | xargs docker rmi"

echo "success!"

exit 0
