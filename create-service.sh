curl -i -X POST \
  --url http://localhost:8001/services/ \
  --data 'name=api-service-kong-test' \
  --data 'url=http://api-service-kong-test:8080'

curl -i -X POST \
  --url http://localhost:8001/services/api-service-kong-test/routes \
  --data 'hosts[]=localhost' \
  --data 'hosts[]=api-service-kong-test' \
  --data 'paths[]=/api-service-kong-test'