var fetch = require('node-fetch');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

    app.get( '/ptb/coupons*',function(req, res){
        fetch(`https://www.cleartrip.com${req.url}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
        .then(res => res.json())
        .then(json => {
            res.send({"coupons":[{"coupon":"TRVLHPY","displayMessage":"{{amount}} instant cashback assured on your trip! Use coupon: TRVLHPY","amount":0.0,"score":60,"link":"https://www.cleartrip.com/offers/india/trvlhpy-offer","displayMessageHead":"Flights Deal:","ruleId":"15614560"}]});
            res.end()
            });
    });


app.get( '/local*',function(req, res){
    fetch(`https://www.cleartrip.com${req.url}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
    .then(json => {
        res.send(json);
        res.end()
        });
});
app.get( '/hotel*',function(req, res){
    fetch(`http://172.17.20.137:9080${req.url}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
    .then(json => {
        res.send(json);
        res.end()
        });
});
app.get( '/checkAccountLinked*',function(req, res){
        var json = {
            "status": "S",
            "isAccountLinked": true
        }    
        if(req.query.number.length==16)
            json.linkedCardNumber = req.query.number;
        if(req.query.number.length==10)
            json.linkedMobileNumber = req.query.number;
        if(number%10 == 0) {json.status = 'F'; json.isAccountLinked = false}
        res.send(json);
        res.end();
    }
);
app.post( '/rewardLink*',function(req, res){
        var json = {
            "status": "S",
            "isAccountLinked": true
        }    
        if(req.query.number.length==16)
            json.linkedCardNumber = req.query.number;
        if(req.query.number.length==10)
            json.linkedMobileNumber = req.query.number;
        if(number%10 == 0) {json.status = 'F'; json.isAccountLinked = false}
        res.send(json);
        res.end();
    }
);

app.get( '/*',function(req, res){
    fetch(`https://www.cleartrip.com${req.url}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
    .then(json => {
        res.send(json);
        res.end()
        });
});
app.post('/traveller-info',function (request, response) {
        response.send({
            "tot": 8560.0,
            "lp": 0.00,
            "err": true,
            "rateRule": {
                "cc": {
                    "df": {
                        "pg": {
                            "f": 177.92
                        }
                    }
                },
                "dc": {
                    "df": {
                        "pg": {
                            "f": 177.92
                        }
                    }
                },
                "nb": {
                    "df": {
                        "pg": {
                            "f": 177.92
                        }
                    }
                },
                "tax": {
                    "CC": 10.0,
                    "DC": 15.0,
                    "NB": 20.0,
                    "KC": 25.0,
                    "CA": 30.0
                }
            },
            "failure": {},
            "emi": {
                "option": {
                    "195": {
                        "nm": "IndusInd Bank",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2000.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2000.0"
                            }
                        }
                    },
                    "211": {
                        "nm": "Kotak bank",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "500.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "500.0"
                            }
                        }
                    },
                    "4": {
                        "nm": "CitiBank",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2000.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "3000.0"
                            }
                        }
                    },
                    "5": {
                        "nm": "HDFC",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2000.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "3000.0"
                            },
                            "9": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "4000.0"
                            }
                        }
                    },
                    "6": {
                        "nm": "ICICI Bank",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2500.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "3000.0"
                            },
                            "9": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "3000.0"
                            }
                        }
                    },
                    "71": {
                        "nm": "State Bank of India",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2500.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2500.0"
                            },
                            "9": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2500.0"
                            }
                        }
                    },
                    "8": {
                        "nm": "Standard Chartered",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2000.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2000.0"
                            }
                        }
                    },
                    "9": {
                        "nm": "Axis Bank",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2500.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2500.0"
                            }
                        }
                    },
                    "31": {
                        "nm": "HSBC",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2000.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2000.0"
                            }
                        }
                    },
                    "271": {
                        "nm": "Yes Bank",
                        "inst": {
                            "3": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2500.0"
                            },
                            "6": {
                                "bpc": {
                                    "p": "0"
                                },
                                "minAmt": "2500.0"
                            }
                        }
                    }
                },
                "pgCharge": {}
            },
            "mkt_sbpt": 0
        });
        response.end()
});

app.post('/*',function (request, response) {
    fetch(`https://www.cleartrip.com${request.url}`, { method: 'POST', body: JSON.stringify(request.body) ,headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
    .then(json => {
        response.send(json);
        response.end()
        });
});

app.listen(8080);
console.log('Server started! Mirroring post requests on qa2' + 8080);
