function getConfig(){
    return {
      "GET":[
            {
                "url" : "/book/seatmap*",
                "response" : {
                  "DEL_BOM_6E179_01122018":
                  {
                      "flightlayout":
                      {
                          "emrows": "12,13",
                          "row": 30,
                          "colcodes": "A,B,C,D,E,F",
                          "lcol": 3,
                          "aircraft": "A320",
                          "rcol": 3,
                          "desc":
                          {
                              "AS": "aisle",
                              "MS": "middle",
                              "WS": "window"
                          }
                      },
                      "seatlayout":
                      {
                          "FR":
                          {
                              "AS": [
                              {
                                  "amt": "650.0",
                                  "sn": "1C,1D"
                              }],
                              "MS": [
                              {
                                  "amt": "800.0",
                                  "sn": "1B,1E"
                              }],
                              "WS": []
                          },
                          "ER":
                          {
                              "AS": [
                              {
                                  "amt": "600.0",
                                  "sn": "12C,12D,13C,13D"
                              }],
                              "MS": [
                              {
                                  "amt": "750.0",
                                  "sn": "12B,12E,13B,13E"
                              }],
                              "WS": [
                              {
                                  "amt": "600.0",
                                  "sn": "12A,12F,13A,13F"
                              }]
                          },
                          "BER":
                          {
                              "AS": [
                              {
                                  "amt": "450.0",
                                  "sn": "2C,2D,3C,3D"
                              },
                              {
                                  "amt": "350.0",
                                  "sn": "4D,5C,6C,6D,7C,7D,8C,8D,9C,9D,10C,10D"
                              },
                              {
                                  "amt": "200.0",
                                  "sn": "11C,11D"
                              }],
                              "MS": [
                              {
                                  "amt": "450.0",
                                  "sn": "2B,2E,3B,3E"
                              },
                              {
                                  "amt": "200.0",
                                  "sn": "4B,4E,5B,5E,6B,6E,7B,7E,8B,8E,9B,9E,10B,10E"
                              },
                              {
                                  "amt": "100.0",
                                  "sn": "11B,11E"
                              }],
                              "WS": [
                              {
                                  "amt": "450.0",
                                  "sn": "2A,2F,3A,3F"
                              },
                              {
                                  "amt": "350.0",
                                  "sn": "4A,4F,5A,5F,6A,6F,7A,7F,8A,8F,9A,9F,10A,10F"
                              },
                              {
                                  "amt": "200.0",
                                  "sn": "11A,11F"
                              }]
                          },
                          "AER":
                          {
                              "AS": [
                              {
                                  "amt": "200.0",
                                  "sn": "14C,14D,15C,15D,16C,16D,17C,17D,18C,18D,19C,19D,20C,20D"
                              },
                              {
                                  "amt": "150.0",
                                  "sn": "21C,21D,22C,22D,23C,23D,24C,24D,25C,25D,26C,26D,27C,27D,28C,28D"
                              }],
                              "MS": [
                              {
                                  "amt": "100.0",
                                  "sn": "14B,14E,15B,15E,16B,16E,17B,17E,18B,18E,19B,19E,20B,20E,21B,21E,22B,22E,23B,23E,24B,24E,25B,25E,26B,26E,27B,27E"
                              }],
                              "WS": [
                              {
                                  "amt": "200.0",
                                  "sn": "14A,14F,15A,15F,16A,16F,17A,17F,18A,18F,19A,19F,20A,20F"
                              },
                              {
                                  "amt": "150.0",
                                  "sn": "21A,21F,22A,22F,23A,23F,24A,24F,25A,25F,26A,26F,27A,27F"
                              }]
                          }
                      },
                      "serviceCodes":
                      {}
                  }
              }
            },
            {
                "url":"/mcairjson*",
                "response":{
                    "fare": {
                      "1": {
                        "R": {
                          "kiwiintlrout": false,
                          "gst": 396,
                          "cb": 0,
                          "agc": 0,
                          "agt": 0,
                          "agtft": 0,
                          "psf": 1636,
                          "ds": 0,
                          "oc": 1143,
                          "jnf": 0,
                          "adtbp": 7852,
                          "otd": 61500,
                          "rtd": 0,
                          "pc": 13554580,
                          "pr": 17327,
                          "agm": 0,
                          "agtf": 0,
                          "fk": "supp_INDIGO|si-bc-v2-v2-9952deca-65b5-4bf7-a4d8-3e9c8b919853|fk_retail_6E_21_1539517200000_L0INT_true_fk_retail_SG_14_1540413900000_ASAVER,P2SVR7_true_fk_retail_SG_455_1540461900000_ASAVER,P2SVR7_true_true",
                          "fb": "ASAVER,P2SVR7",
                          "ft": "R",
                          "inde_multicity":true,
                          "ncib": false,
                          "bc": "L,A,A",
                          "kiwibagrecheck": false,
                          "bp": 14152,
                          "ctbagrecheck": false,
                          "agc_gst": 0,
                          "t": 3175
                        },
                        "dfd": "R"
                      }
                    },
                    "jsons": {
                      "newGdsSplrtFare": true,
                      "nbJson": "[]",
                      "kiwiBagRecheckMsgForBag": "This itinerary have multiple PNRs. You may have to collect the bags and check-in again. The baggage allowance for each airline may be different. Please check with the airline for cost of extra baggage.",
                      "minDuration": 3,
                      "expiredSuppliers": {},
                      "precision": true,
                      "emiJson": "{}",
                      "cfilter": true,
                      "bgV2": true,
                      "rhEnabled": false,
                      "inde_multicity_msg":"cleartrip roted flight",
                      "airline_names": {
                        "WY": "Oman Av (SAOG)",
                        "SG": "SpiceJet",
                        "EY": "Etihad Airways",
                        "AI": "Air India",
                        "9W": "Jet Airways",
                        "6E": "IndiGo"
                      },
                      "maxLayoverTime": 23,
                      "ctBagRecheckMsgForIti": "Please note that this itinerary has multiple PNRs. You need to change planes and re-check baggage if required",
                      "kiwiBagRecheckMsgForIti": "This trip is protected against cancellations, delays and rescheduling.",
                      "fanf": false,
                      "promos": {
                        "13554580": {
                          "plink": "https://www.cleartrip.com/offers/india/festive-intl-air",
                          "ptype": "Cashback",
                          "ptext": "Get upto Rs 20,000 instant cashback. Use coupon: FESTIVE"
                        }
                      },
                      "bbDefaultMessage": null,
                      "kiwiVisaTransitMsgForIti": "A visa or airport transit visa may be necessary for travel.",
                      "sgNewCCLogic": false,
                      "searchType": {
                        "roundTrip": false,
                        "GOI": "IN",
                        "displayCurrencyText": "Rs.",
                        "isIntl": true,
                        "multiCity": true,
                        "disp_currency": "INR",
                        "sellingCountry": "IN",
                        "currJsonPath": "/json/currency.INR.v20181014.js",
                        "DEL": "IN",
                        "flexiSearch": false,
                        "sellCurr": "INR",
                        "DXB": "AE"
                      },
                      "cbc": 7,
                      "deadLinkForKiwi": "https://www.cleartrip.com/faq/kiwi-trip",
                      "zrcb": true,
                      "minLayoverTime": 1,
                      "ap": {
                        "GOI": {
                          "c": "Goa",
                          "n": "Dabolim Airport"
                        },
                        "BOM": {
                          "c": "Mumbai",
                          "n": "Chatrapati Shivaji Airport"
                        },
                        "AUH": {
                          "c": "Abu Dhabi",
                          "n": "Abu Dhabi International Airport"
                        },
                        "DEL": {
                          "c": "New Delhi",
                          "n": "Indira Gandhi Airport"
                        },
                        "XNB": {
                          "bus": true,
                          "c": "Dubai",
                          "sn": "XNB",
                          "n": "Dubai Bus Station"
                        },
                        "DXB": {
                          "c": "Dubai",
                          "n": "Dubai International Airport"
                        },
                        "MCT": {
                          "c": "Muscat",
                          "n": "Seeb"
                        }
                      },
                      "cityJson": {
                        "GOI": "Dabolim AirportGoa",
                        "DEL": "Indira Gandhi AirportNew Delhi"
                      },
                      "topLevelRateRules": "{\"cc\":{\"df\":{\"pg\":{\"f\":699.0}}},\"dc\":{\"df\":{\"pg\":{\"f\":699.0}}},\"nb\":{\"df\":{\"pg\":{\"f\":699.0}}},\"da\":{\"df\":{\"pg\":{\"f\":699.0}}},\"tc\":{\"df\":{\"pg\":{\"f\":699.0}}},\"iv\":{\"df\":{\"pg\":{\"f\":699.0}}},\"cp\":{\"df\":{\"pg\":{\"f\":699.0}}},\"wt\":{\"df\":{\"pg\":{\"f\":699.0}}},\"gv\":{\"df\":{\"pg\":{\"f\":699.0}}},\"tw\":{\"df\":{\"pg\":{\"f\":699.0}}},\"up\":{\"df\":{\"pg\":{\"f\":699.0}}},\"tax\":{\"CC\":0.0, \"DC\":0.0, \"NB\":0.0, \"KC\":0.0, \"CA\":0.0}}",
                      "cbt": 4,
                      "all_airports": {},
                      "ct_fs_rn": false,
                      "fsd": false,
                      "nbSectors": [
                        "ZVJ_GOI",
                        "XNB_GOI",
                        "AUH_GOI",
                        "SHJ_GOI",
                        "DWC_GOI",
                        "RKT_GOI"
                      ],
                      "precisionMap": {
                        "default": 0,
                        "INR": 0
                      },
                      "jsonVer": "V3",
                      "faof": false,
                      "maxDuration": 29,
                      "nbs": "N",
                      "isMultiConnectorEnabled": false
                    },
                    "sid": "bc-v2-v2-9952deca-65b5-4bf7-a4d8-3e9c8b919853",
                    "mapping": {
                      "onward": {
                        "c": [
                          [
                            "1"
                          ],
                          [
                            "2",
                            "3"
                          ]
                        ],
                        "f": "1"
                      }
                    },
                    "expiredSupplier": false,
                    "content": {
                      "1": {
                        "dd": 0,
                        "sa": 1,
                        "c": "0",
                        "ad": "14/10/2018",
                        "a": "19:25",
                        "v": "New Delhi to Dubai",
                        "at": "1",
                        "oa": "",
                        "pcr": {
                          "INTL": "SG"
                        },
                        "fk": "INDIGO_6E-21_14102018_17:10_E",
                        "dt": "3",
                        "tsa": 0,
                        "fr": "DEL",
                        "dr": 13500,
                        "cpt": 1539498278007,
                        "cet": 1539563078007,
                        "to": "DXB"
                      },
                      "2": {
                        "dd": 0,
                        "sa": 1,
                        "c": "0",
                        "ad": "25/10/2018",
                        "a": "06:45",
                        "v": "Dubai to Mumbai",
                        "at": "2",
                        "oa": "",
                        "pcr": {
                          "INTL": "SG"
                        },
                        "fk": "SPICEJET_SG-14_25102018_02:15_E",
                        "dt": "1",
                        "tsa": 0,
                        "fr": "DXB",
                        "dr": 10800,
                        "cpt": 1539498278007,
                        "cet": 1539563078007,
                        "to": "BOM"
                      },
                      "3": {
                        "dd": 0,
                        "sa": 1,
                        "c": "0",
                        "ad": "25/10/2018",
                        "a": "17:05",
                        "v": "Mumbai to Goa",
                        "at": "1B",
                        "oa": "",
                        "fk": "SPICEJET_SG-455_25102018_15:35_E",
                        "dt": "1",
                        "tsa": 0,
                        "fr": "BOM",
                        "dr": 5400,
                        "cpt": 1539498278007,
                        "cet": 1539563078007,
                        "to": "GOI"
                      }
                    }
                  }
            },
            {
                "url":"/ptb/coupons*",
                "response":{
                    "coupons":[
                        {"coupon":"TRVLHPY",
                        "displayMessage":"{{amount}} instant cashback assured on your trip! Use coupon: TRVLHPY",
                        "amount":0,
                        "score":60,
                        "link":"https://www.cleartrip.com/offers/india/trvlhpy-offer",
                        "displayMessageHead":"Flights Deal:",
                        "ruleId":"15614560"}]}
            },
            {
                "url" : "/calendarstub.json*",
                "response" : {
                    "calendar_json": {
                    "20181119": [
                    {
                    "pr": "2731.0",
                    "ct": 25632815,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "19/11/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632815,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "19/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "3557.0",
                    "ct": 25632815,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI432"
                    ],
                    "ad": "19/11/2018",
                    "at": "15:25",
                    "dt": "14:05",
                    "via": []
                    },
                    {
                    "pr": "4192.0",
                    "ct": 25632815,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "19/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    }
                    ],
                    "20181120": [
                    {
                    "pr": "2731.0",
                    "ct": 25632894,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "20/11/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632894,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "20/11/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632894,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK835"
                    ],
                    "ad": "20/11/2018",
                    "at": "19:10",
                    "dt": "18:00",
                    "via": []
                    },
                    {
                    "pr": "4192.0",
                    "ct": 25632894,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "20/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    }
                    ],
                    "20181121": [
                    {
                    "pr": "2269.0",
                    "ct": 25632921,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E733"
                    ],
                    "ad": "21/11/2018",
                    "at": "10:10",
                    "dt": "08:50",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632921,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "21/11/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632921,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "21/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "3457.0",
                    "ct": 25632921,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W2856"
                    ],
                    "ad": "21/11/2018",
                    "at": "17:10",
                    "dt": "15:50",
                    "via": []
                    }
                    ],
                    "20181122": [
                    {
                    "pr": "1959.0",
                    "ct": 25632591,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E423"
                    ],
                    "ad": "22/11/2018",
                    "at": "12:05",
                    "dt": "10:45",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632591,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "22/11/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632591,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "22/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "3457.0",
                    "ct": 25632591,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W2856"
                    ],
                    "ad": "22/11/2018",
                    "at": "17:10",
                    "dt": "15:50",
                    "via": []
                    }
                    ],
                    "20181123": [
                    {
                    "pr": "1959.0",
                    "ct": 25632992,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E306"
                    ],
                    "ad": "23/11/2018",
                    "at": "16:30",
                    "dt": "15:10",
                    "via": []
                    },
                    {
                    "pr": "2008.0",
                    "ct": 25632992,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "23/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632992,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "23/11/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632992,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "23/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181124": [
                    {
                    "pr": "2063.0",
                    "ct": 25632881,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "24/11/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2428.0",
                    "ct": 25632881,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "24/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632881,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "24/11/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632881,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "24/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181125": [
                    {
                    "pr": "2269.0",
                    "ct": 25632952,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E447"
                    ],
                    "ad": "25/11/2018",
                    "at": "23:45",
                    "dt": "22:25",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632952,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "25/11/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632952,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "25/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "3457.0",
                    "ct": 25632952,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "25/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    }
                    ],
                    "20181126": [
                    {
                    "pr": "2269.0",
                    "ct": 25632992,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "26/11/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2428.0",
                    "ct": 25632992,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "26/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632992,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK835"
                    ],
                    "ad": "26/11/2018",
                    "at": "19:10",
                    "dt": "18:00",
                    "via": []
                    },
                    {
                    "pr": "2979.0",
                    "ct": 25632992,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "26/11/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    }
                    ],
                    "20181127": [
                    {
                    "pr": "1959.0",
                    "ct": 25632920,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E447"
                    ],
                    "ad": "27/11/2018",
                    "at": "23:45",
                    "dt": "22:25",
                    "via": []
                    },
                    {
                    "pr": "2008.0",
                    "ct": 25632920,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "27/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632920,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "27/11/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632920,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "27/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181128": [
                    {
                    "pr": "1959.0",
                    "ct": 25632807,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "28/11/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2008.0",
                    "ct": 25632807,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "28/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632807,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "28/11/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632807,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "28/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181129": [
                    {
                    "pr": "1959.0",
                    "ct": 25632489,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E733"
                    ],
                    "ad": "29/11/2018",
                    "at": "10:10",
                    "dt": "08:50",
                    "via": []
                    },
                    {
                    "pr": "2008.0",
                    "ct": 25632489,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "29/11/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632489,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "29/11/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632489,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "29/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181130": [
                    {
                    "pr": "1959.0",
                    "ct": 25632936,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E733"
                    ],
                    "ad": "30/11/2018",
                    "at": "10:10",
                    "dt": "08:50",
                    "via": []
                    },
                    {
                    "pr": "2008.0",
                    "ct": 25632936,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W886"
                    ],
                    "ad": "30/11/2018",
                    "at": "21:50",
                    "dt": "20:10",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632936,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "30/11/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632936,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "30/11/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181201": [
                    {
                    "pr": "2008.0",
                    "ct": 25632991,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W886"
                    ],
                    "ad": "01/12/2018",
                    "at": "21:50",
                    "dt": "20:10",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632991,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "01/12/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632991,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "01/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632991,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "01/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181202": [
                    {
                    "pr": "2269.0",
                    "ct": 25632876,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "02/12/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2428.0",
                    "ct": 25632876,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "02/12/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632876,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "02/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632876,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "02/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181203": [
                    {
                    "pr": "2008.0",
                    "ct": 25632933,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "03/12/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632933,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E423"
                    ],
                    "ad": "03/12/2018",
                    "at": "12:05",
                    "dt": "10:45",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632933,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "03/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "2979.0",
                    "ct": 25632933,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "03/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    }
                    ],
                    "20181204": [
                    {
                    "pr": "1830.0",
                    "ct": 25632959,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "04/12/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632959,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "04/12/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632959,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "04/12/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632959,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "04/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181205": [
                    {
                    "pr": "1830.0",
                    "ct": 25632883,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W647"
                    ],
                    "ad": "05/12/2018",
                    "at": "12:40",
                    "dt": "11:10",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632883,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E423"
                    ],
                    "ad": "05/12/2018",
                    "at": "12:05",
                    "dt": "10:45",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632883,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "05/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632883,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "05/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181206": [
                    {
                    "pr": "1830.0",
                    "ct": 25632885,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "06/12/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632885,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E423"
                    ],
                    "ad": "06/12/2018",
                    "at": "12:05",
                    "dt": "10:45",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632885,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "06/12/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632885,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "06/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181207": [
                    {
                    "pr": "1830.0",
                    "ct": 25632766,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W647"
                    ],
                    "ad": "07/12/2018",
                    "at": "12:40",
                    "dt": "11:10",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632766,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "07/12/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632766,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "07/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "3557.0",
                    "ct": 25632766,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI432"
                    ],
                    "ad": "07/12/2018",
                    "at": "15:25",
                    "dt": "14:05",
                    "via": []
                    }
                    ],
                    "20181208": [
                    {
                    "pr": "1830.0",
                    "ct": 25632870,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W647"
                    ],
                    "ad": "08/12/2018",
                    "at": "12:40",
                    "dt": "11:10",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632870,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "08/12/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632870,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "08/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181209": [
                    {
                    "pr": "2269.0",
                    "ct": 25632824,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "09/12/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632824,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "09/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632824,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "09/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "3457.0",
                    "ct": 25632824,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W750"
                    ],
                    "ad": "09/12/2018",
                    "at": "13:55",
                    "dt": "12:25",
                    "via": []
                    }
                    ],
                    "20181210": [
                    {
                    "pr": "2008.0",
                    "ct": 25632890,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W647"
                    ],
                    "ad": "10/12/2018",
                    "at": "12:40",
                    "dt": "11:10",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632890,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E423"
                    ],
                    "ad": "10/12/2018",
                    "at": "12:05",
                    "dt": "10:45",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632890,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "10/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "2979.0",
                    "ct": 25632890,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "10/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    }
                    ],
                    "20181211": [
                    {
                    "pr": "2269.0",
                    "ct": 25632429,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E185"
                    ],
                    "ad": "11/12/2018",
                    "at": "19:45",
                    "dt": "18:25",
                    "via": []
                    },
                    {
                    "pr": "2428.0",
                    "ct": 25632429,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W886"
                    ],
                    "ad": "11/12/2018",
                    "at": "21:50",
                    "dt": "20:10",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632429,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "11/12/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632429,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "11/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181212": [
                    {
                    "pr": "1830.0",
                    "ct": 25632541,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W647"
                    ],
                    "ad": "12/12/2018",
                    "at": "12:40",
                    "dt": "11:10",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632541,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "12/12/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632541,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "12/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632541,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "12/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181213": [
                    {
                    "pr": "2008.0",
                    "ct": 25632666,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W886"
                    ],
                    "ad": "13/12/2018",
                    "at": "21:50",
                    "dt": "20:10",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632666,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "13/12/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632666,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "13/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632666,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "13/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181214": [],
                    "20181215": [
                    {
                    "pr": "1830.0",
                    "ct": 25632826,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W647"
                    ],
                    "ad": "15/12/2018",
                    "at": "12:40",
                    "dt": "11:10",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632826,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E423"
                    ],
                    "ad": "15/12/2018",
                    "at": "12:05",
                    "dt": "10:45",
                    "via": []
                    },
                    {
                    "pr": "2769.0",
                    "ct": 25632826,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI991"
                    ],
                    "ad": "15/12/2018",
                    "at": "15:15",
                    "dt": "14:10",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632826,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "15/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    }
                    ],
                    "20181216": [
                    {
                    "pr": "2008.0",
                    "ct": 25632797,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W916"
                    ],
                    "ad": "16/12/2018",
                    "at": "07:40",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632797,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E769"
                    ],
                    "ad": "16/12/2018",
                    "at": "07:25",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632797,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "16/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "3557.0",
                    "ct": 25632797,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI432"
                    ],
                    "ad": "16/12/2018",
                    "at": "15:25",
                    "dt": "14:05",
                    "via": []
                    }
                    ],
                    "20181217": [
                    {
                    "pr": "2008.0",
                    "ct": 25632827,
                    "al": "9W",
                    "aln": "Jet Airways",
                    "afd": [
                    "9W916"
                    ],
                    "ad": "17/12/2018",
                    "at": "07:40",
                    "dt": "06:15",
                    "via": []
                    },
                    {
                    "pr": "2269.0",
                    "ct": 25632827,
                    "al": "6E",
                    "aln": "IndiGo",
                    "afd": [
                    "6E423"
                    ],
                    "ad": "17/12/2018",
                    "at": "12:05",
                    "dt": "10:45",
                    "via": []
                    },
                    {
                    "pr": "2944.0",
                    "ct": 25632827,
                    "al": "UK",
                    "aln": "Vistara",
                    "afd": [
                    "UK997"
                    ],
                    "ad": "17/12/2018",
                    "at": "16:40",
                    "dt": "15:25",
                    "via": []
                    },
                    {
                    "pr": "2979.0",
                    "ct": 25632827,
                    "al": "AI",
                    "aln": "Air India",
                    "afd": [
                    "AI412"
                    ],
                    "ad": "17/12/2018",
                    "at": "10:15",
                    "dt": "08:55",
                    "via": []
                    }
                    ],
                    "20181218": []
                    },
                    "sell_currency_json": {
                    "code": "IN",
                    "symbol": "Rs."
                    }
                    }
            }
    ],
    "POST":[
        {
        url:"flights/flexisearchV2",
        response:{"onward":[{"date":"18-02-2019","pr":"3311.0"},{"date":"20-02-2019","pr":"3109.0"},{"date":"22-02-2019","pr":"2899.0"},{"date":"22-02-2019","pr":"3214.0"},{"date":"22-02-2019","pr":"2899.0"},{"date":"18-01-2019","pr":"2896.0","isCheapest":true},{"date":"30-01-2019","pr":"2899.0"}],"nearby":[{"date":"24-01-2019","pr":"3311.0"},{"date":"19-02-2019","pr":"3109.0"},{"date":"18-02-2019","pr":"2899.0"}],"fse_nb":true,"fse_rcnt":true}},
        {
          url:"/apply-coupon",
          response:{
            "amount": 10,
            "rulesApplied": "5775224",
            "details": [
              {
                "amount": 10,
                "message": "Great! You just saved <amount> on your booking.",
                "coupons": [
                  "DOMOW"
                ],
                "coupon_type": "conditional_cashback"
              }
            ],
            "cashbackDetails": [
              {
                "priceDetails": {
                  "orginalAmount": 10,
                  "cashbackAppliedAmount": 16.67
                },
                "message": "A total of rupees 16.67 is eligible for amazon pay cashback",
                "isCashbackApplicable": true,
                "cashbackAgent": "amazon_pay"
              }
            ]
          }
        }
    ]}
}
module.exports= getConfig;