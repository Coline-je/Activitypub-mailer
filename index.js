
    const { ServiceBroker } = require("moleculer");
    const ApiService = require("moleculer-web");
    const MatchService = require("./MatchService")
const UsersService = require("./UsersService")

    const broker = new ServiceBroker();


    // Load API Gateway
    broker.createService({
    mixins: [ApiService],

    settings: {
        routes: [{
            aliases: {
                "POST activitypub": "match.alertuser",
            }
        }]
    }
});

    broker.createService(MatchService);


    // Create a DB service for `user` entities
    broker.createService(UsersService);


    broker.start()
      /*.then(() => broker.call("users.create", {
        username: "john",
        name: "John Doe",
        status: 1
    }))


    .then(() => broker.call("users.find")
    .then(console.log));
    .then(() => broker.call("users.list", { page: 2, pageSize: 10 })
    .then(console.log));
    .then(() => broker.call("users.get", { id: 2 }).then(console.log));
    .then(() => broker.call("users.update", { id: 2, name: "Jane Doe" }).then(console.log));
    .then(() => broker.call("users.remove", { id: 2 }).then(console.log));*/
