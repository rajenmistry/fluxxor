var Dispatcher = require("./lib/dispatcher"),
    Flux = require("./lib/flux"),
    FluxMixin = require("./lib/flux_mixin"),
    FluxChildMixin = require("./lib/flux_child_mixin"),
    StoreWatchMixin = require("./lib/store_watch_mixin"),
    createStore = require("./lib/create_store");

var Fluxxor = {
  Dispatcher: Dispatcher,
  Flux: Flux,
  FluxMixin: FluxMixin,
  FluxChildMixin: FluxChildMixin,
  StoreWatchMixin: StoreWatchMixin,
  createStore: createStore
};

if (process.env.FLUXXOR_VERSION)
  Fluxxor.version = process.env.FLUXXOR_VERSION;
else
  Fluxxor.version = require("./package.json").version;

module.exports = Fluxxor;
