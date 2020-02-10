var fetch = require('node-fetch');
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var fs = require('fs');
var config = require('./mock.js');

var options = {
    key : fs.readFileSync('client-key.pem'),
    cert : fs.readFileSync( 'client-cert.pem' )
}

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function(req, res, next) {
    if (req.secure) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});

console.log(':', config());

app.get( '/binmanager/v1/payment/cards*',function(req, res){
    console.log('calendar', req.url);
    fetch(`https://www.cleartrip.com${req.url}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
    .then(json => {
        res.send(json);
        res.end()
        });
});

config().GET.forEach(element => {
    app.get( element.url, function(req, res){
        res.send(element.response);
        console.log('sending'+element.response)
        res.end()
    }); 
});

config().POST.forEach(element => {
    console.log('hi',element)
    app.post( element.url, function(req, res){
        res.send(element.response);
        console.log('sending post'+element.response)
        res.end()
    }); 
});


/*fs.watchFile('./mock.js', (curr, prev) => {
    config().GET.forEach(element => {
        app.get( element.url, function(req, res){
            res.send(element.response);
            res.end()
        }); 
    });
    config().POST.forEach(element => {
        console.log('post call')
        app.post( element.url, function(req, res){
            res.send(element.response);
            res.end()
        }); 
    });
  });*/


app.get( '/calendarstub.json*',function(req, res){
    console.log('calendar', req.url);
    fetch(`https://www.cleartrip.com${req.url}`, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
    .then(res => res.json())
    .then(json => {
        res.send(json);
        res.end()
        });
});
app.get( '/partial/account/profile',function(req, res){
    console.log('profile', req.url);
    var json = {"user":{"activation_date_time":"2017-06-12T17:53:20+05:30","admin_role":null,"api_key":null,"bonvoyage_subscription":null,"domain":"avinash.cleartrip.com","id":61788312,"last_login_date_time":"2019-08-03T15:30:44+05:30","marketing_subscription":0,"openid_url":null,"registration_confirmed":null,"screen_name":null,"source_of_registration":"air","status":null,"token":1562862445,"username":"kartik.m@cleartrip.com","unread_message_count":0,"photo_file_path":null,"contact_data":{"id":26099586,"addresses":[{"category":"work","city":"Bengaluru","city_id":396110,"contact_data_id":26099586,"country":"India","country_id":694,"id":2529481344,"pincode":"560078","seq_no":null,"state":"KA","state_id":null,"street_address":"Suraj Ganga Park jp nagar phase 3 Near Mini forest"}],"phone_numbers":[{"category":"mobile","contact_data_id":26099586,"country_code":"91","id":38864230,"mobile_number":"9535680359","phone_number_value":"9535680359","seq_no":null},{"category":"landline","contact_data_id":26099586,"country_code":null,"id":38864232,"mobile_number":null,"phone_number_value":null,"seq_no":null},{"category":"fax","contact_data_id":26099586,"country_code":null,"id":38864234,"mobile_number":null,"phone_number_value":null,"seq_no":null}],"other_details":[{"category":"WALLET","contact_data_id":26099586,"created_at_new":null,"id":27088122,"name":"currency","seq_no":null,"updated_at_new":null,"value":"AED"},{"category":"irctc","contact_data_id":26099586,"created_at_new":null,"id":26929522,"name":"username","seq_no":0,"updated_at_new":null,"value":"k15artik"},{"category":"irctc","contact_data_id":26099586,"created_at_new":null,"id":26929524,"name":"status","seq_no":0,"updated_at_new":null,"value":"ACTIVATED"},{"category":"irctc","contact_data_id":26099586,"created_at_new":null,"id":26929526,"name":"b2cenduser","seq_no":0,"updated_at_new":null,"value":"autoactivation"},{"category":"ExpressCheckout","contact_data_id":26099586,"created_at_new":null,"id":26929528,"name":"ExpressCheckOutEnabled","seq_no":0,"updated_at_new":null,"value":"Y"},{"category":"ExpressCheckout","contact_data_id":26099586,"created_at_new":null,"id":26929530,"name":"PrefillTravellerInfo","seq_no":0,"updated_at_new":null,"value":"Y"},{"category":"ExpressCheckout","contact_data_id":26099586,"created_at_new":null,"id":26929532,"name":"PrimaryTraveller","seq_no":0,"updated_at_new":null,"value":"61788312"},{"category":"WALLET","contact_data_id":26099586,"created_at_new":null,"id":27102000,"name":"currency","seq_no":null,"updated_at_new":null,"value":"INR"}],"websites":[],"emails":[{"category":"work","contact_data_id":26099586,"email_id":"kartik.m@cleartrip.com","id":11427506,"seq_no":null}],"whatsapp_details":[]},"personal_data":{"company_designation":null,"company_id":null,"concat_name":"kartikmauryakartik.m@cleartrip.com","country_of_residence":"India","country_of_residence_id":null,"country_preference":null,"currency":null,"date_of_birth":"1991-10-15T00:00:00+05:30","department":null,"first_name":"Kartik","gender":null,"home_airport":null,"home_airport_id":null,"id":64005060,"language":null,"last_name":"Maurya","nick_name":null,"person_id":61788312,"primary_email":"kartik.m@cleartrip.com","title":"Mr"},"travel_profile":{"berth_preference":"NC","birth_place":"India","created_at":"2017-07-04T17:32:36+05:30","get_email_alerts":null,"get_sms_alerts":null,"home_airport":null,"id":32172102,"meal_preference":null,"minimum_star_rating":null,"nationality":"India","nationality_id":"IN","passport_date_of_expiry":null,"passport_date_of_issue":null,"passport_image_content_type":null,"passport_image_name":null,"passport_issuing_country":"India","passport_issuing_country_code":"IN","passport_issuing_country_id":100176,"passport_no":null,"person_id":61788312,"preferred_amenities":null,"preferred_hotel_brand":null,"seat_preference":null,"special_request":null,"train_meal_preference":"Non-veg","updated_at":"2019-07-11T11:26:54+05:30","pref_airlines":[],"frequent_flyer_numbers":[{"airline":"Air India","airline_code":"AI","frequent_flyer_number_value":null,"id":34981136,"seq_no":0,"travel_profile_id":32172102}]},"deposit_accounts":[],"resources":[],"company_details":[{"company_designation":null,"company_id":202562,"department_id":null,"effective_from":null,"effective_to":null,"employee_id":null,"id":62122330,"import_id":null,"invite_id":null,"marketing_subscription":0,"people_id":61788312,"source_of_registration":null,"status":"A","work_email":null,"work_phone_number":null,"domain_name":"suvidhaa-ctagwl-21676.agentbox.com","company_name":"21676","company_people_roles":[{"access_level":2,"company_people_id":62122330,"company_people_parent_id":null,"id":63236594,"role_id":1064,"role_name":"USER"}]},{"company_designation":null,"company_id":110342,"department_id":null,"effective_from":null,"effective_to":null,"employee_id":null,"id":63340168,"import_id":null,"invite_id":null,"marketing_subscription":0,"people_id":61788312,"source_of_registration":null,"status":"A","work_email":null,"work_phone_number":null,"domain_name":"expedia.travelbox99.com","company_name":"Expedia","company_people_roles":[{"access_level":2,"company_people_id":63340168,"company_people_parent_id":null,"id":64508238,"role_id":1067,"role_name":"USER"}]},{"company_designation":null,"company_id":5291658,"department_id":null,"effective_from":null,"effective_to":null,"employee_id":null,"id":65651652,"import_id":null,"invite_id":null,"marketing_subscription":0,"people_id":61788312,"source_of_registration":null,"status":"A","work_email":null,"work_phone_number":null,"domain_name":"book.flightxp.com","company_name":"FlightXP","company_people_roles":[{"access_level":2,"company_people_id":65651652,"company_people_parent_id":null,"id":66923292,"role_id":1067,"role_name":"USER"}]},{"company_designation":null,"company_id":5291262,"department_id":null,"effective_from":null,"effective_to":null,"employee_id":null,"id":84296574,"import_id":null,"invite_id":null,"marketing_subscription":0,"people_id":61788312,"source_of_registration":null,"status":"A","work_email":null,"work_phone_number":null,"domain_name":"www.amexindiatravel.com","company_name":"Amex","company_people_roles":[{"access_level":2,"company_people_id":84296574,"company_people_parent_id":null,"id":86238740,"role_id":1067,"role_name":"USER"}]},{"company_designation":null,"company_id":111219,"department_id":null,"effective_from":null,"effective_to":null,"employee_id":null,"id":91801454,"import_id":null,"invite_id":1379165484,"marketing_subscription":0,"people_id":61788312,"source_of_registration":null,"status":"1","work_email":null,"work_phone_number":null,"domain_name":"ct.cleartripforbusiness.com","company_name":"Cleartrip","company_people_roles":[{"access_level":2,"company_people_id":91801454,"company_people_parent_id":null,"id":94053450,"role_id":1071,"role_name":"BOOKER"}],"company_people_invite":{"abandoned_date":null,"accepted_date":null,"id":1379165484,"invited_date":"2019-04-01T10:36:43+05:30","invitee_email":"kartik.m@cleartrip.com","inviter_id":64268744}},{"company_designation":null,"company_id":110340,"department_id":null,"effective_from":null,"effective_to":null,"employee_id":null,"id":60551538,"import_id":null,"invite_id":null,"marketing_subscription":1,"people_id":61788312,"source_of_registration":"REG_FORM_REGISTRATION","status":"A","work_email":null,"work_phone_number":null,"domain_name":"www.cleartrip.com","company_name":"cleartrip","company_people_roles":[{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":61602550,"role_id":1064,"role_name":"USER"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244344,"role_id":10012,"role_name":"HQ-ADV-FINDER-TRAIN"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244346,"role_id":10010,"role_name":"HQ-ADV-FINDER-HOTEL"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244348,"role_id":10011,"role_name":"HQ-ADV-FINDER-OTHER"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244350,"role_id":10009,"role_name":"HQ-ADV-FINDER-AIR"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244352,"role_id":28,"role_name":"Development Team"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244354,"role_id":10014,"role_name":"ONLINE-AMEND-ROLE"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244356,"role_id":10001,"role_name":"BOOKFLOW_VERSION2"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244358,"role_id":16,"role_name":"Trains"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244360,"role_id":39,"role_name":"Train Booking Summary"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244362,"role_id":40,"role_name":"Train Sales Summary"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244364,"role_id":20,"role_name":"Hotel Content Manager (Superuser)"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244366,"role_id":1065,"role_name":"TRAVELLER"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244368,"role_id":1061,"role_name":"Baharain Role"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244370,"role_id":1062,"role_name":"qatar Role"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244372,"role_id":1063,"role_name":"Kuwait role"},{"access_level":2,"company_people_id":60551538,"company_people_parent_id":null,"id":87244374,"role_id":10003,"role_name":"HQ-SMALLWORLD-SUPER-ADMIN "}]}],"gst_details":[{"gst_holder_address":null,"gst_holder_name":"McD","gst_holder_state_code":"22","gst_holder_state_name":null,"gst_number":"22AAAFH1333H1Z3","id":288471,"linkable_id":61788312,"linkable_type":"Person"}]}}
    json.user.gst_details = [
        {gst_holder_address: null
        ,gst_holder_name: "1234567890"
        ,gst_holder_state_code: "12"
        ,gst_holder_state_name: null
        ,gst_number: "12AAAAA1234A1A3"
        ,id: 264225
        ,linkable_id: 86030296
        ,linkable_type: "Person"},
        {gst_holder_address: null
        ,gst_holder_name: "Maurya"
        ,gst_holder_state_code: "22"
        ,gst_holder_state_name: null
        ,gst_number: "22AAAFH1333H1Z3"
        ,id: 234342
        ,linkable_id: 345345
        ,linkable_type: "Person"}
    ]
    res.send(json);
    res.end()
});


// app.post('/*',function (request, response) {
//     fetch(`https://www.cleartrip.com${request.url}`, { method: 'POST', body: JSON.stringify(request.body) ,headers: { 'Content-Type': 'application/json' }})
//     .then(res => res.json())
//     .then(json => {
//         response.send(json);
//         response.end()
//         });
// });
app.post('/workplus/cashback*',function (request, response) {
    var json = { "error": null, "success": true, "data": { 
        "fares": 
            [
                { "price": {"fare":3155.0}, 
                "fare_key": request.body.fares[0].fare_key,
                "fare_breakup": null,
                "cashback_amount": 315.5 },
                { "price":{"fare": 1921.0},
                "fare_key": request.body.fares[1].fare_key,
                "fare_breakup": null, "cashback_amount": 192.1 }], "message": "you will earn {cashback_amount} as cashback" } };
    response.send(json);
    response.end();
});
app.post('/payments/rewards/checkBalance',function (request, response) {
        var json = {
            "trackId": "CLR1234567890123",
            "status": "S",
            "description": "Successfully fetched pay by points amount",
            "pointBalance": 659714,
            "amount": (request.body.amount + request.body.extra) || 1200,
            "currency": "AED" 
        }
        switch(request.body.case ){
            case 'error' : json.status = 'F';break;
            case 'full' : json.amount = request.body.amount + 10; break;
            case 'invalid' : json.invalidcard = true;break;
            case 'lesser' : json.amount = 40; break;
        }
        json.pointBalance = json.amount * (request.body.rate || 4);
        console.log(JSON.stringify(request.body),'##',JSON.stringify(json))
        response.send(json);
        response.end()
});

app.get('/book/flights/rewardpoint-service/paybackpoints/checkAccountLinked*',function (request, response) {
        var json = {
            "status": "F",
            // "mobileNumber": "9620351338",
            "linkedCardNumber": "9401120000201303",
            "isAccountLinked": false,
            "message": 'Invalid Card or Mobile Number'
        }
        if(request.query.param%10 == 3)
            {
                json.status = "S";
                json.isAccountLinked = true;
                if(request.query.param.length == 10)
                    json.mobileNumber = request.query.param;
            }
        else {
            delete json.linkedCardNumber
        }
        response.send(json);
        response.end()
});
app.post('/payments/rewards/payback/forgotPassword',function (request, response) {
        var json = {
            "status": "T"
        }
        if(request.body.cardNumber[0] == 9){
            json.status = "S";
        }
        response.send(json);
        response.end()
});
app.post('/payments/payback/checkBalance',function (request, response) {
        var json = {
            "trackId": "CLRP00000901",
            "status": "S",
            "description": "Successfully fetched pay by points amount",
            "pointBalance": 199879,
            "amount": 49969.75
        }        
        response.send(json);
        response.end()
});
app.post('/payments/rewards/sendOtp',function (request, response) {
        var json = {
            "trackId": "CLR1234567890123",
            "status": "S",
            "description": "OTP sent successfully"
        }   
        switch(request.body.case2 ){
            case 'error' : json.status = 'F';break;   
        }
        console.log(JSON.stringify(request.body),'##',JSON.stringify(json))
        setTimeout(function (){response.send(json);
        response.end()}, 1000);
});

http.createServer(app).listen(8080);
// console.log('Server started! Mirroring post requests on qa2' + 8080);
https.createServer(options,app).listen(4444);