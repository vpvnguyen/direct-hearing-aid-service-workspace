"use strict";(self.webpackChunk_direct_hearing_aid_service_workspace_gatsby_webapp=self.webpackChunk_direct_hearing_aid_service_workspace_gatsby_webapp||[]).push([[293],{9936:function(t,e,i){i.r(e),i.d(e,{Head:function(){return a}});i(4041);var r=i(4462);e.default=()=>(0,r.Y)("div",{dangerouslySetInnerHTML:{__html:'<div align="center">\n<div id="fixme" style="display:none"><img src="images/arrow.png" onclick="window.location=\'repairform.php\'" style="cursor:pointer" title="Click to Send In Your Hearing Aid for Repair"></div>\n<table width="993" border="0" cellspacing="0" cellpadding="0" background="https://www.directhearingaidservice.com/images/contentbg.jpg" align="center">\n  <tbody><tr>\n    <td valign="top" align="center"><table width="947" border="0" cellspacing="0" cellpadding="0">\n  <tbody><tr>\n    <td background="https://www.directhearingaidservice.com/images/headerbg.jpg"><table width="947" border="0" cellspacing="0" cellpadding="0">\n      <tbody><tr>\n        <td width="318"><a href="https://www.directhearingaidservice.com/index.php"><img src="https://www.directhearingaidservice.com/images/logo.jpg" width="318" height="96" border="0" title="Welcome to DIRECT HEARING AID SERVICES"></a></td>\n        <td width="629" align="right" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">\n  <tbody><tr>\n    <td align="right" class="calltoaction" style="padding-top:4px;">Call Today for Fast, Reasonable, Hearing Aid Repair</td>\n  </tr>\n  <tr>\n    <td align="right" class="Phonenumber">1-888-580-HEAR (4327)</td>\n  </tr>\n  <tr>\n    <td align="right" class="Phonenumber">1-714-534-EARS (3277)</td>\n  </tr>\n</tbody></table>\n\n\t\t\n\t\t<br>\n\t\t\x3c!--\n\t\t<table width="350" border="0" cellspacing="0" cellpadding="0">\n          <tr>\n            <td width="27" align="right"><img src="< ?php echo WEB_PATH;?>images/nav/cart.gif" width="20" height="17" /></td>\n            <td width="100" align="left"><a href="< ?php echo WEB_PATH;?>showcart.php" title="Shopping Cart">Shopping Cart</a> </td>\n            <td width="52" align="center"><font color="#285049" style="font-size:15px;">< ?php\n\t\t\tif(isset($_GET[\'prdid\']) && !empty($_GET[\'prdid\'])){\n\t\t\t\tif(!isset($_SESSION[\'cart\']) || ($_SESSION[\'cart\'] != 1))\n\t\t\t\t\t{\n\t\t\t\t\t\t$_SESSION[\'cart\'] = 1;\n\t\t\t\t\t\t$q2 = "insert into shoppingcarts(customerid) values(0)";\n\t\t\t\t\t\tmysql_query($q2) or die($q2);\n\t\t\t\t\t\t\n\t\t\t\t\t\t$q2 = "select MAX(id) from shoppingcarts";\n\t\t\t\t\t\t$rs2 = mysql_query($q2) or die("An error occured while getting id for shopping cart");\n\t\t\t\t\t\t\n\t\t\t\t\t\t$row = mysql_fetch_row($rs2);\n\t\t\t\t\t\t$_SESSION[\'cartid\'] = $row[0];\n\t\t\t\t\t}\n\t\t\t}\n\n\t\t\tif(isset($_SESSION[\'cart\']) && $_SESSION[\'cart\'] == 1){\n\t\t\t\n\t\t\tif(isset($_GET[\'prdid\']))\n\t{\n\t\t$type = "product";\n\t\t\t\n\t\t$q2 = "select * from shoppingcartdetail where shoppingcartid = ".$_SESSION[\'cartid\']." and \n\t\t\tproductid = ".$_GET[\'prdid\']." and type = \'".$type."\'";\n\t\t$rs2 = mysql_query($q2) or die("An error occured while checking for product in shopping cart");\n\t\t\n\t\t$num_results = mysql_num_rows($rs2);\n\t\tif($num_results == 1) // update quantity\n\t\t{\n\t\t\t$row = mysql_fetch_array($rs2);\n\t\t\t$quantity = $row[\'quantity\'];\n\t\t\t\n\t\t\t//---------------------------------------------------\n\t\t\t\t\t$itemtotal = ++$quantity * $row[\'price\'];\n\t\t\t//---------------------------------------------------\n\t\t\t$q2 = "update shoppingcartdetail set quantity = ".($quantity).", itemtotal = ".$itemtotal." where shoppingcartid = ".\n\t\t\t\t\t$_SESSION[\'cartid\']." and productid = ".$_GET[\'prdid\'];\n\t\t\t$rs2 = mysql_query($q2) or die("An error occured while updating quantity of product in shopping cart");\n\t\t}\n\t\telse                  //insert new product\n\t\t{\n\t\t\tif(!isset($_GET[\'seminar\']) && !isset($_GET[\'book\']))\n\t\t\t{\n\t\t\t\t$q2 = "select products.title, products.price, products.description,products.serialright,products.serialleft,products.warrentydate from products where products.id = ".$_GET[\'prdid\'];\n\t\t\t\t$type = "product";\n\t\t\t\t$rs2 = mysql_query($q2) or die($q2);\n\t\t\t\t\n\t\t\t\t$row2 = mysql_fetch_array($rs2);\n\t\t\t\tmysql_free_result($rs2);\n\t\t\t\t\n\t\t\t\tif(isset($_SESSION[\'member_id\']) && $row2[\'specialprice\'] != 0)\n\t\t\t\t\t$price = $row2[\'specialprice\'];\n\t\t\t\telse\n\t\t\t\t\t$price = $row2[\'price\'];\n\t\t\t\t\n\t\t\t\t$title = $row2[\'title\'];\n\t\t\t\t$description = $row2[\'description\'];\n\t\t\t\t$serialright= $row2[\'serialright\'];\n\t\t\t\t$serialleft= $row2[\'serialleft\'];\n\t\t\t\tif($warrentydate=="" && empty($warrentydate))\n\t\t\t\t$warrentydate= "NULL";\n\t\t\t\telse \n\t\t\t\t$warrentydate= $row2[\'warrentydate\'];\n\t\t\t}\n\t\t\t\n\t\nif(isset($_POST[\'modrelatedprod\']) && $_POST[\'modrelatedprod\']==2){\n\t\t\t$q2 = "insert into shoppingcartdetail(shoppingcartid,productid,quantity, title, price, itemtotal, type,description) values(".$_SESSION[\'cartid\']\n\t\t\t\t\t.",".$_GET[\'prdid\'].",1,\'".$_POST[\'itemname\']."\',".$_POST[\'price\'].",".$_POST[\'price\'].",\'".$_POST[\'product\']."\',\'".addslashes($_POST[\'itemdescription\'])."\')";\n\n}else{\n\t\t\t$q2 = "insert into shoppingcartdetail(shoppingcartid,productid,quantity, title, price, itemtotal, type, description,serialright,serialleft,warrentydate) values(".$_SESSION[\'cartid\']\n\t\t\t\t\t.",".$_GET[\'prdid\'].",1,\'".$title."\',".$price.",".$price.",\'".$type."\',\'".addslashes($description)."\',\'".$serialright."\',\'".$serialleft."\',".$warrentydate.")";\n}\n\t\t\t\t\t\n\t\t\tmysql_query($q2) or die($q2);\n\t\t}\n\t\t\n\t}//if !empty productid\n\telse \n\t\tif(isset($_GET[\'update\']) && $_GET[\'update\'] == 1)//update quantity from text boxes\n\t\t{\n\t\t\t$q2 = "select * from shoppingcartdetail where shoppingcartid = "\n\t\t\t\t\t.$_SESSION[\'cartid\'];\n\t\t\t// echo $q2."<br>";\n\t\t\t$rs2 = mysql_query($q2) or die("An error occured while checking count in shopping cart");\n\t\t\t$num_results = mysql_num_rows($rs2);\n\t\t\t\n\t\t\tfor($i = 0 ; $i < $num_results ; $i++)\n  \t\t\t{\n\t\t\t\t$row = mysql_fetch_array($rs2);\n\t\t\t\t$productid = $row[\'productid\']; \n\t\t\t\t\n\t\t\t\t$itemtotal = $_POST[$productid] * $row[\'price\'];\n\t\t\t//---------------------------------------------------------\n\t\t\t\t\n\t\t\t\t//names of quantity textboxes are product ids\n\t\t\t\t$q2 = "update shoppingcartdetail set quantity = ".$_POST[$productid].", itemtotal = ".$itemtotal." where shoppingcartid = ".\n\t\t\t\t\t$_SESSION[\'cartid\']." and productid = ".$productid;\n\t\t\t\t//echo $q2."<br>";\n\t\t\t\tmysql_query($q2) or die("An error occured while updating quantity of products in shopping cart");\n\t\t\t}\n\t\t}\n\t\telse //delete from shopping cart\n\t\t\tif(!empty($_GET[\'del\']))\n\t\t\t{\n\t\t\t\t $q2 = "delete from shoppingcartdetail where id=".$_GET[\'del\'];\n\t\t\t \t mysql_query($q2) or die("An error occured while removing product from shopping cart");\n\t\t\t\t \n\t\t\t\t$q2 = "select count(id) as count from shoppingcartdetail where shoppingcartid = ".$_SESSION[\'cartid\']."";\n\t\t\t\t$rs2 = mysql_query($q2) or die("An error occured while checking for product in shopping cart");\n\t\t\t\t$row = mysql_fetch_array($rs2);\n\t\t\t\tif($row[\'count\']==0){\n\t\t\t\t\tif(isset($_SESSION[\'cartpayment\'][\'grandtotal\'])) unset($_SESSION[\'cartpayment\'][\'grandtotal\']);\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n            $q2 = "select count(id) as count, sum(itemtotal) as total from shoppingcartdetail where shoppingcartid = ".$_SESSION[\'cartid\']."";\n            $rs2 = mysql_query($q2) or die("An error occured while checking for product in shopping cart");\n            $row = mysql_fetch_array($rs2);\n            if($row[\'count\'] > 0)\n            { echo $row[\'count\']; } else {echo \'0\';}\n\t\t\tif($row[\'count\']==0){unset($_SESSION[\'cartpayment\'][\'grandtotal\']);}\n\t\t\t} else echo \'0\';?></font>&nbsp;Items </td>\n            <td width="120" align="right">Total \n\t\t\t<font color="#285049" style="font-size:15px;">$< ?php if(isset($_SESSION[\'cart\']) && $_SESSION[\'cart\'] == 1){ if($row[\'total\']!=\'\' && !empty($row[\'total\'])){ echo number_format($row[\'total\'],2);} else { echo \'0.00\';} } else echo \'0.00\';?></font></td>\n            </tr>\n        </table>\n\t\t--\x3e\n\t\t</td>\n      </tr>\n    </tbody></table></td>\n  </tr>\n  <tr>\n    <td height="30" background="https://www.directhearingaidservice.com/images/nav/navbg.gif" style="background-position:bottom;" align="left"><table border="0" cellspacing="0" cellpadding="0"><tbody><tr><td>\x3c!-- dynamic menus --\x3e\n<link rel="stylesheet" type="text/css" href="https://www.directhearingaidservice.com/menu/css/superfish.css" media="screen">\n<script type="text/javascript" src="https://www.directhearingaidservice.com/menu/js/jquery-1.2.6.min.js"><\/script>\n<script type="text/javascript" src="https://www.directhearingaidservice.com/menu/js/hoverIntent.js"><\/script>\n<script type="text/javascript" src="https://www.directhearingaidservice.com/menu/js/superfish.js"><\/script>\n<script type="text/javascript">\n\n// initialise plugins\njQuery(function(){\n\tjQuery(\'ul.sf-menu\').superfish();\n});\n\n<\/script>\n\x3c!-- end dynamic menus --\x3e\n\n<ul class="sf-menu sf-js-enabled sf-shadow"><li class=""><a href="https://www.directhearingaidservice.com/index.php" title="Home">Home</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=2" title="What Makes Us Unique">What Makes Us Unique</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=9" title="Products &amp; Services" class="sf-with-ul">Products &amp; Services<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=51" title="Universal Sanitizer Dryer">Universal Sanitizer Dryer</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=23" title="$135 Internet Repair Special">$135 Internet Repair Special</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=18" title="Repair Service" class="sf-with-ul">Repair Service<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=57" title="Parts">Parts</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=28" title="Choosing A Hearing Aid Repair Lab">Choosing A Hearing Aid Repair Lab</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=23" title="Class 1 Hearing Aid Repair?">Class 1 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=29" title="Class 1 Digital and Power Repair">Class 1 Digital and Power Repair</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=24" title="Class 2 Hearing Aid Repair?">Class 2 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=25" title="Class 3 Hearing Aid Repair?">Class 3 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=26" title="Class 4 Hearing Aid Repair?">Class 4 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=27" title="Class 5 Hearing Aid Repair?">Class 5 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=31" title="Hearing Aid Re-Programming Service">Hearing Aid Re-Programming Service</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=19" title="Maintenance Plans" class="sf-with-ul">Maintenance Plans<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=60" title="Same Day Service">Same Day Service</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=30" title="Extended Warranty">Extended Warranty</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=32" title="Clean and Check">Clean and Check</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=20" title="Accessories" class="sf-with-ul">Accessories<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=63" title="Box of Dry Bricks">Box of Dry Bricks</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=62" title="Box of battery">Box of battery</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=59" title="Dry Brick">Dry Brick</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=58" title="Super-Dry AId">Super-Dry AId</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=54" title="Battery Holder">Battery Holder</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=49" title="Super Dri-Aid">Super Dri-Aid</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=36" title="Batteries">Batteries</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=37" title="Battery Tester">Battery Tester</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=21" title="Shipping" class="sf-with-ul">Shipping<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=50" title="Priority Mail by USPS">Priority Mail by USPS</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=33" title="Rush Delivery (Next Day Ship Out)">Rush Delivery (Next Day Ship Out)</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=34" title="Regular Delivery">Regular Delivery</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=35" title="UPS 2 DAYS">UPS 2 DAYS</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=22" title="Hearing Aid Re-Programming Service">Hearing Aid Re-Programming Service</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/testimonials.php" title="Testimonials">Testimonials</a></li><li class=""><a href="https://www.directhearingaidservice.com/repairform.php" title="Repair Form">Repair Form</a></li><li class=""><a href="https://www.directhearingaidservice.com/orderform.php" title="Order Form">Order Form</a></li><li class=""><a href="https://www.directhearingaidservice.com/contactus.php" title="Contact">Contact</a></li></ul></td></tr></tbody></table></td>\n  </tr>\n  <tr>\n    <td style="background-image:url(https://www.directhearingaidservice.com/images/1.jpg); background-repeat:no-repeat;" height="253" valign="bottom"><table width="100%" border="0" cellspacing="0" cellpadding="0">\n  <tbody><tr>\n    <td width="226">&nbsp;</td>\n    <td width="315" style="padding-bottom:14px;"><a style="color:blue" href="https://www.directhearingaidservice.com/sitepage.php?pageid=23" title="Click Here for Details"><font style="font-size:19px;">Click Here for Details</font></a></td>\n    <td width="315">&nbsp;</td>\n  </tr>\n</tbody></table>\n</td>\n  </tr>\n  <tr>\n    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">\n      <tbody><tr>\n        <td valign="top" style="padding-top:12px;" align="left"><title>Direct Hearing Aid Services</title>\n<table width="947" border="0" cellspacing="0" cellpadding="0">\n          <tbody><tr>\n            <td width="552" valign="top" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0">\n              <tbody><tr>\n                <td><table border="0" cellpadding="0" cellspacing="0" width="100%">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<table bgcolor="#d6eae5" border="0" cellpadding="0" cellspacing="0" width="100%">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td background="images/lefttop.gif" class="heading">\n\t\t\t\t\t\t\t\tDirect Hearing Aid Repair Services is your One-Stop shop for all your repair needs:</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td height="200" valign="top">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tMost Hearing Aids can be repaired regardless of age to save you money.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tOffers 48-hour "in-house" turnaround on most <a href="http://www.directhearingaidservice.com/sitepage.php?pageid=9">hearing aid repair</a> so you can get your Hearing back faster.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tTechnicians are factory trained &amp;&nbsp;ertified with 20+ years of experience in <a href="http://www.directhearingaidservice.com/sitepage.php?pageid=28">hearing aid service</a>.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tOffers same day pick-up for the Los Angeles and Orange County areas.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tProvides new faceplates and upgrades on most custom models.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tRe-casing available on ALL custom&nbsp; models to extend the life of your Hearing Aid.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tOffers refurbished BTE (Behind the Ear)&nbsp; Hearing Aids for just $345.00 with One-year Guarantee.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tExtended "Worry-Free" Warranty on our <a href="http://www.directhearingaidservice.com/sitepage.php?pageid=9">hearing aid repair service</a> available for an additional six months - <font color="#285049" style="font-size: 18px;"><strong>$99.59</strong></font></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style="padding-top: 10px;">\n\t\t\t\t<table bgcolor="#d6eae5" border="0" cellpadding="0" cellspacing="0" width="100%">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td background="images/lefttop.gif" class="heading">\n\t\t\t\t\t\t\t\tRepair any custom-made hearing aid, regardless of age or manufacturer!</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td valign="top">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tYou can have a new custom Shell made for ANY&nbsp; reason.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tRepair, Upgrade, &amp; Convert to a Digital Circuit to improve sound quality.</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tRepair the electronic components from any Custom or Behind-the-Ear Hearing Aid</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\tMost Brands of Hearing Aids&nbsp; can be Repaired in the Lab for <a href="http://www.directhearingaidservice.com/sitepage.php?pageid=28">Hearing Aid Repair, Garden Grove</a> CA, and sent back by Mail or Courier within 24 to 48 hours.</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table></td>\n              </tr>\n              <tr>\n                <td style="padding-top:6px;"></td>\n              </tr>\n              <tr>\n                <td style="padding-top:6px;"><table width="100%" border="0" cellspacing="0" cellpadding="0" background="images/bottomboxbg.gif">\n                  <tbody><tr>\n                    <td height="286" valign="top" style="padding-top:12px;" align="center"><table width="522" border="0" cellspacing="0" cellpadding="0">\n                      <tbody><tr>\n                        <td width="10"><img src="images/boxleft.png"></td>\n                        <td bgcolor="#FFFFFF" width="502" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">\n  <tbody><tr>\n    <td width="242"><img src="images/pic.jpg"></td>\n    <td align="left" valign="top"><table width="230" border="0" cellspacing="0" cellpadding="6" align="center">\n      <tbody><tr>\n        <td width="12" valign="top"><img src="images/dot.jpg" width="9" height="9" vspace="6"></td>\n        <td width="172" valign="top"><font color="#285049" style="font-size:18px;"><strong>$99.95</strong></font><br>for most Hearing Aid Repairs</td>\n      </tr>\n      <tr>\n        <td valign="top"><img src="images/dot.jpg" width="9" height="9" vspace="6"></td>\n        <td valign="top"><font color="#285049" style="font-size:18px;"><strong>$19.95</strong></font><br>\n          Clean and check Hearing \nAids</td>\n      </tr>\n      <tr>\n        <td valign="top"><img src="images/dot.jpg" width="9" height="9" vspace="6"></td>\n        <td valign="top"><font color="#285049" style="font-size:18px;"><strong>$3.00</strong></font><br>Package of batteries</td>\n      </tr>\n    </tbody></table></td>\n  </tr>\n</tbody></table></td>\n                        <td width="10"><img src="images/boxright.png"></td>\n                      </tr>\n                      <tr>\n                        <td colspan="3" align="right" style="padding-top:10px;"><a href="orderform.php"><img src="images/nav/learnmore.gif" title="Learn More" border="0"></a></td>\n                        </tr>\n                    </tbody></table></td>\n                  </tr>\n                </tbody></table></td>\n              </tr>\n            </tbody></table></td>\n            <td width="10">&nbsp;</td>\n            <td width="385" valign="top" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0">\n              <tbody><tr>\n                <td>\t\t<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:solid 1px #d3d3d3" bgcolor="#eeeeee">\n                  <tbody><tr>\n                    <td background="images/boxtop.gif" height="38" class="heading" valign="top">FREE Report: Repair or Replace?</td>\n          </tr>\n          <tr>\n            <td align="left"><table width="96%" border="0" cellpadding="0" cellspacing="8">\n                <form action="subscription.php" method="post" name="theform" id="theform" onsubmit="return validatex(this)"></form>\n                  <tbody><tr>\n                    <td colspan="2" align="left" class="emailcatchertitle">Top 10 questions you must ask about hearing aid repair before you decide<br><br></td>\n                  </tr>\n                  <tr>\n                    <td valign="top" align="center"><strong>Name:</strong></td>\n                    <td valign="top" align="left"><input name="name" type="text" class="txtField" size="32" id="name"></td>\n                  </tr>\n                  <tr>\n                    <td align="center"><strong>Email:</strong></td>\n                    <td align="left"><input name="email" type="text" class="txtField" id="email" size="32"></td>\n                  </tr>\n                  <tr>\n                    <td height="30" align="center">&nbsp;</td>\n                    <td height="30" align="right"><div align="rigth" style="padding-right:70px;">\n                      <input type="image" name="imageField" src="images/nav/go.jpg" title="Submit">\n                    </div></td>\n                  </tr>\n                \n              </tbody></table></td>\n          </tr>\n        </tbody></table>\n\t\t\t\t\t\t\n\t\t\t\t</td>\n              </tr>\n              <tr>\n                <td style="padding-top:6px;"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:solid 1px #d3d3d3" bgcolor="#eeeeee">\n                  <tbody><tr>\n                    <td background="images/boxtop.gif" height="38" class="heading" valign="top">Hearing Aid Repair</td>\n                  </tr>\n                  <tr>\n                    <td height="150" valign="top" align="center"><table width="380" border="0" cellspacing="0" cellpadding="4">\n                      <tbody><tr>\n                        <td valign="top" width="155"><img src="images/pic2.jpg"></td>\n                        <td width="225" valign="top"><font style="font-size:28px"><strong>YES</strong></font><br>\n<font style="font-size:16px;">I want same or next<br> day Hearing Aid Repair</font>\n<p align="right"><a href="sitepage.php?pageid=21"><img src="images/nav/learnmore.jpg" border="0" title="Learn More"></a></p></td>\n                      </tr>\n                    </tbody></table></td>\n                  </tr>\n                </tbody></table></td>\n              </tr>\n              <tr>\n                <td style="padding-top:6px;"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:solid 1px #d3d3d3" bgcolor="#eeeeee">\n                  <tbody><tr>\n                    <td background="images/boxtop.gif" height="38" class="heading" valign="top">Testimonials</td>\n                  </tr>\n                  <tr>\n                    <td height="334" valign="top" align="center" style="padding-top:6px;"><div id="testimoanl" style="width:320px; text-align:left">You guys are amazing!&nbsp; You fixed my hearing aid when I thought I would ...<br><br><strong><em>John William</em></strong>\n<br><hr noshade="noshade" width="90%" size="1"><br>\nI promised to write you a glowing testimonial when this was over, but I ...<br><br><strong><em>Nick Johnson</em></strong>\n<br><hr noshade="noshade" width="90%" size="1"><br>\nThomas, your team of repair technicians is amazing!&nbsp; I was a bit worried ...<br><br><strong><em>Sarah Lane</em></strong>\n<div align="right"><a href="testimonials.php" title="more"><img src="images/nav/more.gif" border="0" title="more" vspace="3"></a></div>\n</div></td>\n                  </tr>\n                </tbody></table></td>\n              </tr>\n            </tbody></table></td>\n          </tr>\n        </tbody></table>\n</td>\n      </tr>\n    </tbody></table></td>\n  </tr>\n  <tr>\n    <td style="padding-top:12px;"><table width="100%" border="0" cellspacing="0" cellpadding="0">\n      <tbody><tr>\n        <td bgcolor="#eeeeee" height="35" style="border:solid 1px #d3d3d3;p"><table width="947" border="0" cellspacing="0" cellpadding="0">\n  <tbody><tr>\n    <td align="left" class="footer" width="260">©2024 directhearingaidservice.com</td>\n  <td align="right"><table width="500" border="0" cellspacing="0" cellpadding="0" class="footer">\n  <tbody><tr>\n    <td class="footer" align="left"><a href="https://www.directhearingaidservice.com/index.php" title="home">home</a></td>\n    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>\n    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/orderform.php" title="order form">order form</a></td>\n    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>\n    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=14" title="return policy">return policy</a></td>\n    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>\n    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=11" title="privacy policy">privacy policy</a></td>\n    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>\n    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/articles.php" title="articles">articles</a></td>\n    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>\n    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=48" title="helpful sites">helpful sites</a></td>\n    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>\n    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/contactus.php" title="contact">contact</a>&nbsp;&nbsp;</td>\n  </tr>\n</tbody></table>\n</td>\n  </tr></tbody></table>\n\n</td>\n      </tr>\n      <tr>\n        <td height="20">&nbsp;</td>\n      </tr>\n    </tbody></table></td>\n  </tr>\n</tbody></table>\n</td>\n  </tr>\n</tbody></table>\n</div>'}});const a=()=>(0,r.Y)("title",null,"Home Page")}}]);
//# sourceMappingURL=component---src-pages-index-js-ead84ed4d86dc265017d.js.map