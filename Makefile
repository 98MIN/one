IMAGE_NAME = one

all: container start

clean:
	rm -rf build

container:
	docker build -t $(IMAGE_NAME) .

start:
	docker container run -d -p 80:80 -p 443:443 $(IMAGE_NAME)
