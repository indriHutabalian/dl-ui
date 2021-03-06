var generalRoutes = require("./general");
var masterRoutes = require("./master");
var productionRoutes = require("./production");
var inventoryRoutes = require("./inventory");
var publicRoutes = require("./public");
var purchasingRoutes = require("./purchasing");
var reportRoutes = require("./report");
var authRoutes = require("./auth");
var salesRoutes = require("./sales");
var garmentPurchasingRoutes = require("./garment-purchasing");
var migrationLog = require("./migration-log");

export default [].concat(publicRoutes, generalRoutes, masterRoutes, productionRoutes, purchasingRoutes, salesRoutes, inventoryRoutes, garmentPurchasingRoutes, authRoutes, migrationLog, reportRoutes);
