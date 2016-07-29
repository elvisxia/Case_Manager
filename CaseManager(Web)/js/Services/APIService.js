/// <reference path="../main.js" />
caseManager
    .service("apiService",
    function ($http) {
        var that = this;
        that.rootUrl = "https://api.stackexchange.com/";
        that.version = "2.2"
        that.utility =
            {
                initiateFunc: function ()
                {
                    return function (url,params,ids)
                    {
                        var originalUrl = that.rootUrl + that.version + "/" + url + "?";
                        if (ids)
                        {
                            var i;
                            var idStr = "";
                            for (i = 0; i < ids.length; i++)
                            {
                                if (i == ids.length) {
                                    idStr += ids[i];
                                } else {
                                    idStr+=ids[i]+";"
                                }
                            }
                            originalUrl.replace("{ids}",idStr)
                        }
                        if (params)
                        {
                            if (params.page)
                            {
                                originalUrl += "page=" + params.page+"&";
                            }
                            if (params.pagesize)
                            {
                                originalUrl += "pagesize=" + params.pagesize + "&";
                            }
                            if (params.fromdate)
                            {
                                originalUrl += "fromdate=" + params.fromdate + "$";
                            }
                            if (params.todate)
                            {
                                originalUrl += "todate=" + params.todate + "&";
                            }
                            if (params.min)
                            {
                                originalUrl += "min=" + params.min + "$";
                            }
                            if (params.max)
                            {
                                originalUrl += "max=" + params.max + "$";
                            }
                            if (params.inname)
                            {
                                originalUrl += "inname=" + params.inname + "$";
                            }
                            originalUrl += params.order ? ("order="+params.order+"$") : "order=asc&";
                            if (params.sort)
                            {
                                originalUrl += "sort=" + params.sort + "$";
                            }
                            originalUrl += "site=stackoverflow";
                        }

                    }
                }
            }
        that.users =
            {
                api:
                    {   //Get all users on the site.
                        users: "/users",
                        //Get the users identified by a set of ids.
                        users_ids: "/users/{ids}",
                        //Get the answers posted by the users identified by a set of ids.
                        users_ids_answers:"/users/{ids}/answers"
                    },
                func:
                    {
                        get_users: that.utility.initiateFunc(),
                        get_users_ids: that.utility.initiateFunc(),
                        get_users_ids_answers:that.utility.initiateFunc()
                    }
            }
    })