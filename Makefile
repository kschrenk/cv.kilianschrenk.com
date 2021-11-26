CFLAGS=-g
export CFLAGS

TARGET_SERVER := 23.88.60.132

test : 
	yarn test --watchAll=false

build : test
	NODE_ENV=$(APP_ENV) yarn; \
	NODE_ENV=$(APP_ENV) yarn build; \

install : build
	scp -r ./build/* root@$(TARGET_SERVER):/var/www/cv.kilianschrenk.com

.PHONY : build install test
