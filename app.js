var express = require("express");
var mongoose = require("mongoose");
var http = require("http");

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/snk');

var Content = mongoose.model('Content', {title: String, body: String});

var index = new Content({title: 'Welcome',
  body: '<p>Dear visitor,</p> <p>It gives us great pleasure to welcome you to our official corporate website. We look forward to make sure you get the most of your business, and we wish you success with your venture with us. </p> <p>We hope you find our website interesting as well as beneficial. Please feel free to share with us any suggestions or ideals that may improve the quality of our website. </p>'
});

var aff_comp = new Content({title: 'Affiliated companies',
  body: '<p>SNK Holdings started its operations in the early year 2001 and initial activities were solely on providing insurance claims and consultancy service to the insurance industry, its stake holders and general public. Gradually over the years, we diversified and have ventured in distribution of FMCG products, insurance adjusting firm and environmental-friendly products.</p> <p> <div class="row"> <div class="col s9"> <h5>Kirloy Global<br>Eco-friendly bio-degradable plastics through GPR</h5>We are dedicated to the enhancement of green-minded organizations while making a positive impact on the environment. We offer a wide range of eco-friendly bio-degradable additives for the plastic industry. </div> <img class="col s3" src="7.jpg" style= "padding-top:20"> </div> </p> <div class="col s12"> <p> <h5>Adjusting Firm<br>Insurance claims and loss adjusting firm</h5> Providing claims services, from field adjusting to full claims administration, to property damage, Third Party Bodily Injury and motor claims throughout Malaysia. We also provide unparalleled service to many insurance companies. </p></div> <p> <div class="row"> <div class="col s9"> <h5>Business & Surety Corporation<br>FMCG distribution of Daily Dairy </h5> Sabah International Dairies Sdn. Bhd. (SID) with SNK Holdings to be appointed with exclusive rights to warehouse, wholesale, distribute and sell the Daily Dairy products in East and West Malaysia as well as exporting to other nations worldwide. </div> <img class="col s3" src="6.jpg" style="padding-top:60"> </div> </p> '
});

var contact = new Content({title: 'Contact Us',
  body: '<h5> Help us make our services better for you</h5> <p>If you have any comments or questions about our services, please contact us via phone, email or fax. We welcome all feedback as it will help us to serve you better. </p> <br><br> <div class="grey darken-2 row white-text" style="padding:20"> <div class="col s6"> <h5>SNK Holdings</h5> No. 59-3, (2nd Floor), Jalan USJ 21/10,<br>Subang Jaya, 47530<br>Selangor Darul Ehsan, Malaysia </div> <div class="col s6"> <br> Tel: +603 8023 7166<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+603 8023 0259<br><br> Fax: +603 8023 0736<br><br> E-Mail: info@snkholdings.com </div> </div>'
});

var insurance = new Content({title: 'Insurance Loss Adjusting Platform',
  body: '<p>In the year 2007, we were approached by City Adjusters Sdn. Bhd. to develop a complete software solution to cater for all their needs. </p> <p> To this online software caters for the complete day to day operation. For example;<br> a)	registration of cases<br> b)	auto acknowledgment of cases and e-letters to insurance<br> c)	online reporting of cases both vehicle accident and bodily injury<br> d)	invoicing<br> e)	expenses and payments<br> </p> <p> The platform also allows the management team of companies to follow day to day operations from anywhere in the world. </p>'
});

var auto = new Content({title: 'Online Vehicle Market Valuation',
  body: '<p> <div class="row"> <div class="col s9"> <p>Buying a motor whether for private or commercial purpose is a big investment which has to be protected against theft and accident damages. This potential risk can be protected by buying an adequate insurance coverage. However, under or over insuring can mean a loss in the event of a claim.</p> <p>We have developed an online vehicle market valuation platform that gives monthly updated values of all motor vehicles in Malaysia back dating 20 years. Our market values also acts as a guide when buying or selling vehicles and also for vehicle insurance premium. </p> </div> <img class="col s3" src="5.jpg" style="padding:20"> </div> </p> <p> Today, our values are being used by the insurance industry, loss adjusting companies and the public. </p> <p> Please follow the link to go directly to the site <b><u>autoclaims.com.my/index3.php</u></b> </p>'
});

var reg = new Content({title: 'Regulatory Bodies',
  body: ''
});

var sp = new Content({title: 'Service Providers',
  body: '<p>--	Insurance companies<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allianz </p> <p>--	Adjusting companies<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City Adjusters<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jaya Adjusters </p> <p> --	MyEg </p> <p> --	Used car dealers </p> <p> --	General public </p>'
});

var team = new Content({title: 'Team',
  body: 'The operations team is grouped into four divisions. They are, <p> <h5>1) Software Development Team (Malaysia & Philippines)</h5> The software development team is headed by our experienced software specialist and assisted by our programmes in Malaysia and Manila, Philippines. </p> <p> <h5>2) Automobile Database Team</h5> UK trained automobile engineers leading the team consisting ten technicians who patch together the inputs for the motor vehicle sections electronically. </p> <p> <h5>3) Insurance Claims & Consultancy Team</h5> The team consist professionals with vast insurance background with many years of experience assisted together with insurance professional lawyers. </p> <p> <h5>4) The Action Team</h5> This team manages the day to day of handling customer services and follow-ups purged within the company. They also provide feedback from users of the softwares to the development team to enhance the effiency of the software. </p>'
});

var about = new Content({title: 'About Us',
  body: '<p>SNK Klasik Sdn Bhd started its operation in the early year 2001 and initial activities were solely on providing insurance claims and consultancy service to the insurance industry, its stake holders and general public. Gradually over the years, our expansions include in improving the services by going fully IT.</p> <p>We carter complete online software solution for well known insurance loss adjusting companies to cater for their day to day operations linking them electronically to the insurance companies, workshops, lawyers and other related parties from anywhere. SNK Klasik has been providing this service since early 2006.</p> <p> Our vehicle market valuation data is also widely used by well known insurance providers, government bodies and general public allowing them to obtain updated market values for all motor vehicles back dating 20 years. Our market values also act as a guide when buying or selling vehicles and also for vehicle insurance premium. </p> <p> Over the years, we expanded and today have diversified into, <br> a) Insurance claims solution provider. <br> b) Public claims and solution provider. <br> c) autoclaims.com.my<br> d) Software solution for insurance adjusting companies. <br> e) Bussiness and surely corporation. <br> &nbsp;&nbsp;&nbsp;i) FMCG product distribution<br> &nbsp;&nbsp;&nbsp;ii) Bio-degradable plastics solution<br> f) i-kotse.com.ph(claims solution for the Philippines)g) Language and skills training for corporate. </p>'
});

var product = new Content({title: 'Products',
  body: '<p>Opportunity of catering the needs of insurance industry was realised with the rapid developments in IT arena during mid 90\'s. The industry n Malaysia has seen tremendous advancements while enhancing growth in business by providing better services through online. SNK Holdings has contributed to this growth and is continuing to develop new products besides improving on existing products to cater for the continuing changes. </p> <p> SNK develop and maintains softwares online platforms and database for the insurance industry were the relevant parties can go online to source for information and facilitate the necessary processes electronically. Apart from that, Information and data is gathered online while complying with Data Protection Act where this data can be used by all relevant parties for mutual benefits. </p> <p> <div class="row"> <div class="col s9"> <p> <h5><u>autoclaims.com.my</u></h5> This is an online vehicle platform catered for the publics in Malaysia. This service is open to the public for FREE! </p> <p> <h5><u>i-kotse.com.ph</u></h5> A customized software developed for the Philippines to provide services and information to automobile owns; a technology transfer from Malaysia. </p> <p> <h5><u>Insurance loss adjusting platform </u></h5> A complete online software solution for the insurance loss adjusting companies to cater for their day to day operations. </p> </div> <img class="col s3" src="" style="padding-top:20"> </div> </p> <div class="row"> <div class="col s12"> <p> <h5><u>Online vehicle market valuation</u></h5> AN online vehicle market valuation platform that gives quarterly updated values of all motor vehicles in Malaysia back dating 20 years. Our market values also act as a guide when buying or selling vehicles and also for vehicle insurance premium. </p> </div> </div>'
});

index.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

aff_comp.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

contact.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

insurance.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

auto.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

reg.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

sp.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

team.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

about.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

product.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

app.get('/', function(req, res, next) {
  res.render('index', { title: index.title , body: index.body});
});

app.get('/aff_comp', function(req, res, next) {
  res.render('index', { title: aff_comp.title , body: aff_comp.body});
});

app.get('/contact', function(req, res, next) {
  res.render('index', { title: contact.title , body: contact.body});
});

app.get('/insurance', function(req, res, next) {
  res.render('index', { title: insurance.title , body: insurance.body});
});

app.get('/auto', function(req, res, next) {
  res.render('index', { title: auto.title , body: auto.body});
});

app.get('/reg', function(req, res, next) {
  res.render('index', { title: reg.title , body: reg.body});
});

app.get('/sp', function(req, res, next) {
  res.render('index', { title: sp.title , body: sp.body});
});

app.get('/team', function(req, res, next) {
  res.render('index', { title: team.title , body: team.body});
});

app.get('/about', function(req, res, next) {
  res.render('index', { title: about.title , body: about.body});
});

app.get('/product', function(req, res, next) {
  res.render('index', { title: product.title , body: product.body});
});

http.createServer(app).listen(3000);