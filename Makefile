test:
	./node_modules/vows/bin/vows --spec `find ./server/node_modules/logic/ |grep spec.js|grep -v '#'|xargs echo`  

run:
	node server/app.js
