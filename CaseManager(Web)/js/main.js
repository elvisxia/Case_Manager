/// <reference path="../myPage.html" />
/// <reference path="../pages/welcome.html" />
// Your code here!
window.caseManager = caseManager = angular.module("caseManager", ["ngRoute"]);
caseManager.config(function ($routeProvider) {
    $routeProvider
.when("/", {
    templateUrl: "/pages/welcome.html"
})
.when("/login", {
    templateUrl: "/pages/login.html"
})
.when("/page2", {
    templateUrl: "/pages/page2.html"
})
.when("/page3", {
    templateUrl: "/pages/page3.html"
})
.otherwise("/");

});

(function () {
    caseManager.controller("rootController", function ($scope, $http) {
        $scope.clientId = 7563;
        $scope.key = 'yo7t6laKaVdH8Aet9Bc5hw((';
        var scopes={
            read_inbox:'read_inbox',//access a user's global inbox
            no_expiry:'no_expiry',//access_token's with this scope do not expire
            write_access:'write_access',//perform write operations as a user
            private_info:'private_info'//access full history of a user's private actions on the site 
        }
        $scope.scope = scopes.read_inbox;
        $scope.redirect_uri = "https://stackexchange.com/oauth/login_success";
        var redirect_uri = "https://stackexchange.com/oauth/login_success";

    });

})();