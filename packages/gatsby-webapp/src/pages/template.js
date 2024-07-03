import * as React from "react"
const html = `<div align="center">
<div id="fixme" style="display:none"><img src="images/arrow.png" onclick="window.location='repairform.php'" style="cursor:pointer" title="Click to Send In Your Hearing Aid for Repair"></div>
<table width="993" border="0" cellspacing="0" cellpadding="0" background="https://www.directhearingaidservice.com/images/contentbg.jpg" align="center">
  <tbody><tr>
    <td valign="top" align="center"><table width="947" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td background="https://www.directhearingaidservice.com/images/headerbg.jpg"><table width="947" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
        <td width="318"><a href="https://www.directhearingaidservice.com/index.php"><img src="https://www.directhearingaidservice.com/images/logo.jpg" width="318" height="96" border="0" title="Welcome to DIRECT HEARING AID SERVICES"></a></td>
        <td width="629" align="right" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td align="right" class="calltoaction" style="padding-top:4px;">Call Today for Fast, Reasonable, Hearing Aid Repair</td>
  </tr>
  <tr>
    <td align="right" class="Phonenumber">1-888-580-HEAR (4327)</td>
  </tr>
  <tr>
    <td align="right" class="Phonenumber">1-714-534-EARS (3277)</td>
  </tr>
</tbody></table>

		
		<br>
		<!--
		<table width="350" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="27" align="right"><img src="< ?php echo WEB_PATH;?>images/nav/cart.gif" width="20" height="17" /></td>
            <td width="100" align="left"><a href="< ?php echo WEB_PATH;?>showcart.php" title="Shopping Cart">Shopping Cart</a> </td>
            <td width="52" align="center"><font color="#285049" style="font-size:15px;">< ?php
			if(isset($_GET['prdid']) && !empty($_GET['prdid'])){
				if(!isset($_SESSION['cart']) || ($_SESSION['cart'] != 1))
					{
						$_SESSION['cart'] = 1;
						$q2 = "insert into shoppingcarts(customerid) values(0)";
						mysql_query($q2) or die($q2);
						
						$q2 = "select MAX(id) from shoppingcarts";
						$rs2 = mysql_query($q2) or die("An error occured while getting id for shopping cart");
						
						$row = mysql_fetch_row($rs2);
						$_SESSION['cartid'] = $row[0];
					}
			}

			if(isset($_SESSION['cart']) && $_SESSION['cart'] == 1){
			
			if(isset($_GET['prdid']))
	{
		$type = "product";
			
		$q2 = "select * from shoppingcartdetail where shoppingcartid = ".$_SESSION['cartid']." and 
			productid = ".$_GET['prdid']." and type = '".$type."'";
		$rs2 = mysql_query($q2) or die("An error occured while checking for product in shopping cart");
		
		$num_results = mysql_num_rows($rs2);
		if($num_results == 1) // update quantity
		{
			$row = mysql_fetch_array($rs2);
			$quantity = $row['quantity'];
			
			//---------------------------------------------------
					$itemtotal = ++$quantity * $row['price'];
			//---------------------------------------------------
			$q2 = "update shoppingcartdetail set quantity = ".($quantity).", itemtotal = ".$itemtotal." where shoppingcartid = ".
					$_SESSION['cartid']." and productid = ".$_GET['prdid'];
			$rs2 = mysql_query($q2) or die("An error occured while updating quantity of product in shopping cart");
		}
		else                  //insert new product
		{
			if(!isset($_GET['seminar']) && !isset($_GET['book']))
			{
				$q2 = "select products.title, products.price, products.description,products.serialright,products.serialleft,products.warrentydate from products where products.id = ".$_GET['prdid'];
				$type = "product";
				$rs2 = mysql_query($q2) or die($q2);
				
				$row2 = mysql_fetch_array($rs2);
				mysql_free_result($rs2);
				
				if(isset($_SESSION['member_id']) && $row2['specialprice'] != 0)
					$price = $row2['specialprice'];
				else
					$price = $row2['price'];
				
				$title = $row2['title'];
				$description = $row2['description'];
				$serialright= $row2['serialright'];
				$serialleft= $row2['serialleft'];
				if($warrentydate=="" && empty($warrentydate))
				$warrentydate= "NULL";
				else 
				$warrentydate= $row2['warrentydate'];
			}
			
	
if(isset($_POST['modrelatedprod']) && $_POST['modrelatedprod']==2){
			$q2 = "insert into shoppingcartdetail(shoppingcartid,productid,quantity, title, price, itemtotal, type,description) values(".$_SESSION['cartid']
					.",".$_GET['prdid'].",1,'".$_POST['itemname']."',".$_POST['price'].",".$_POST['price'].",'".$_POST['product']."','".addslashes($_POST['itemdescription'])."')";

}else{
			$q2 = "insert into shoppingcartdetail(shoppingcartid,productid,quantity, title, price, itemtotal, type, description,serialright,serialleft,warrentydate) values(".$_SESSION['cartid']
					.",".$_GET['prdid'].",1,'".$title."',".$price.",".$price.",'".$type."','".addslashes($description)."','".$serialright."','".$serialleft."',".$warrentydate.")";
}
					
			mysql_query($q2) or die($q2);
		}
		
	}//if !empty productid
	else 
		if(isset($_GET['update']) && $_GET['update'] == 1)//update quantity from text boxes
		{
			$q2 = "select * from shoppingcartdetail where shoppingcartid = "
					.$_SESSION['cartid'];
			// echo $q2."<br>";
			$rs2 = mysql_query($q2) or die("An error occured while checking count in shopping cart");
			$num_results = mysql_num_rows($rs2);
			
			for($i = 0 ; $i < $num_results ; $i++)
  			{
				$row = mysql_fetch_array($rs2);
				$productid = $row['productid']; 
				
				$itemtotal = $_POST[$productid] * $row['price'];
			//---------------------------------------------------------
				
				//names of quantity textboxes are product ids
				$q2 = "update shoppingcartdetail set quantity = ".$_POST[$productid].", itemtotal = ".$itemtotal." where shoppingcartid = ".
					$_SESSION['cartid']." and productid = ".$productid;
				//echo $q2."<br>";
				mysql_query($q2) or die("An error occured while updating quantity of products in shopping cart");
			}
		}
		else //delete from shopping cart
			if(!empty($_GET['del']))
			{
				 $q2 = "delete from shoppingcartdetail where id=".$_GET['del'];
			 	 mysql_query($q2) or die("An error occured while removing product from shopping cart");
				 
				$q2 = "select count(id) as count from shoppingcartdetail where shoppingcartid = ".$_SESSION['cartid']."";
				$rs2 = mysql_query($q2) or die("An error occured while checking for product in shopping cart");
				$row = mysql_fetch_array($rs2);
				if($row['count']==0){
					if(isset($_SESSION['cartpayment']['grandtotal'])) unset($_SESSION['cartpayment']['grandtotal']);
				}
			}
			
			
			
			
            $q2 = "select count(id) as count, sum(itemtotal) as total from shoppingcartdetail where shoppingcartid = ".$_SESSION['cartid']."";
            $rs2 = mysql_query($q2) or die("An error occured while checking for product in shopping cart");
            $row = mysql_fetch_array($rs2);
            if($row['count'] > 0)
            { echo $row['count']; } else {echo '0';}
			if($row['count']==0){unset($_SESSION['cartpayment']['grandtotal']);}
			} else echo '0';?></font>&nbsp;Items </td>
            <td width="120" align="right">Total 
			<font color="#285049" style="font-size:15px;">$< ?php if(isset($_SESSION['cart']) && $_SESSION['cart'] == 1){ if($row['total']!='' && !empty($row['total'])){ echo number_format($row['total'],2);} else { echo '0.00';} } else echo '0.00';?></font></td>
            </tr>
        </table>
		-->
		</td>
      </tr>
    </tbody></table></td>
  </tr>
  <tr>
    <td height="30" background="https://www.directhearingaidservice.com/images/nav/navbg.gif" style="background-position:bottom;" align="left"><table border="0" cellspacing="0" cellpadding="0"><tbody><tr><td><!-- dynamic menus -->
<link rel="stylesheet" type="text/css" href="https://www.directhearingaidservice.com/menu/css/superfish.css" media="screen">
<script type="text/javascript" src="https://www.directhearingaidservice.com/menu/js/jquery-1.2.6.min.js"></script>
<script type="text/javascript" src="https://www.directhearingaidservice.com/menu/js/hoverIntent.js"></script>
<script type="text/javascript" src="https://www.directhearingaidservice.com/menu/js/superfish.js"></script>
<script type="text/javascript">

// initialise plugins
jQuery(function(){
	jQuery('ul.sf-menu').superfish();
});

</script>
<!-- end dynamic menus -->

<ul class="sf-menu sf-js-enabled sf-shadow"><li class=""><a href="https://www.directhearingaidservice.com/index.php" title="Home">Home</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=2" title="What Makes Us Unique">What Makes Us Unique</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=9" title="Products &amp; Services" class="sf-with-ul">Products &amp; Services<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=51" title="Universal Sanitizer Dryer">Universal Sanitizer Dryer</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=23" title="$135 Internet Repair Special">$135 Internet Repair Special</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=18" title="Repair Service" class="sf-with-ul">Repair Service<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=57" title="Parts">Parts</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=28" title="Choosing A Hearing Aid Repair Lab">Choosing A Hearing Aid Repair Lab</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=23" title="Class 1 Hearing Aid Repair?">Class 1 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=29" title="Class 1 Digital and Power Repair">Class 1 Digital and Power Repair</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=24" title="Class 2 Hearing Aid Repair?">Class 2 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=25" title="Class 3 Hearing Aid Repair?">Class 3 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=26" title="Class 4 Hearing Aid Repair?">Class 4 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=27" title="Class 5 Hearing Aid Repair?">Class 5 Hearing Aid Repair?</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=31" title="Hearing Aid Re-Programming Service">Hearing Aid Re-Programming Service</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=19" title="Maintenance Plans" class="sf-with-ul">Maintenance Plans<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=60" title="Same Day Service">Same Day Service</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=30" title="Extended Warranty">Extended Warranty</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=32" title="Clean and Check">Clean and Check</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=20" title="Accessories" class="sf-with-ul">Accessories<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=63" title="Box of Dry Bricks">Box of Dry Bricks</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=62" title="Box of battery">Box of battery</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=59" title="Dry Brick">Dry Brick</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=58" title="Super-Dry AId">Super-Dry AId</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=54" title="Battery Holder">Battery Holder</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=49" title="Super Dri-Aid">Super Dri-Aid</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=36" title="Batteries">Batteries</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=37" title="Battery Tester">Battery Tester</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=21" title="Shipping" class="sf-with-ul">Shipping<span class="sf-sub-indicator"> »</span></a><ul style="display: none; visibility: hidden;"><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=50" title="Priority Mail by USPS">Priority Mail by USPS</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=33" title="Rush Delivery (Next Day Ship Out)">Rush Delivery (Next Day Ship Out)</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=34" title="Regular Delivery">Regular Delivery</a></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=35" title="UPS 2 DAYS">UPS 2 DAYS</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=22" title="Hearing Aid Re-Programming Service">Hearing Aid Re-Programming Service</a></li></ul></li><li class=""><a href="https://www.directhearingaidservice.com/testimonials.php" title="Testimonials">Testimonials</a></li><li class=""><a href="https://www.directhearingaidservice.com/repairform.php" title="Repair Form">Repair Form</a></li><li class=""><a href="https://www.directhearingaidservice.com/orderform.php" title="Order Form">Order Form</a></li><li class=""><a href="https://www.directhearingaidservice.com/contactus.php" title="Contact">Contact</a></li></ul></td></tr></tbody></table></td>
  </tr>
  <tr>
    <td style="background-image:url(https://www.directhearingaidservice.com/images/1.jpg); background-repeat:no-repeat;" height="253" valign="bottom"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="226">&nbsp;</td>
    <td width="315" style="padding-bottom:14px;"><a style="color:blue" href="https://www.directhearingaidservice.com/sitepage.php?pageid=23" title="Click Here for Details"><font style="font-size:19px;">Click Here for Details</font></a></td>
    <td width="315">&nbsp;</td>
  </tr>
</tbody></table>
</td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
        <td valign="top" style="padding-top:12px;" align="left"><title>Direct Hearing Aid Services</title>
<table width="947" border="0" cellspacing="0" cellpadding="0">
          <tbody><tr>
            <td width="552" valign="top" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody><tr>
                <td><table border="0" cellpadding="0" cellspacing="0" width="100%">
	<tbody>
		<tr>
			<td>
				<table bgcolor="#d6eae5" border="0" cellpadding="0" cellspacing="0" width="100%">
					<tbody>
						<tr>
							<td background="images/lefttop.gif" class="heading">
								Direct Hearing Aid Repair Services is your One-Stop shop for all your repair needs:</td>
						</tr>
						<tr>
							<td height="200" valign="top">
								<ul>
									<li>
										Most Hearing Aids can be repaired regardless of age to save you money.</li>
									<li>
										Offers 48-hour "in-house" turnaround on most <a href="http://www.directhearingaidservice.com/sitepage.php?pageid=9">hearing aid repair</a> so you can get your Hearing back faster.</li>
									<li>
										Technicians are factory trained &amp;&nbsp;ertified with 20+ years of experience in <a href="http://www.directhearingaidservice.com/sitepage.php?pageid=28">hearing aid service</a>.</li>
									<li>
										Offers same day pick-up for the Los Angeles and Orange County areas.</li>
									<li>
										Provides new faceplates and upgrades on most custom models.</li>
									<li>
										Re-casing available on ALL custom&nbsp; models to extend the life of your Hearing Aid.</li>
									<li>
										Offers refurbished BTE (Behind the Ear)&nbsp; Hearing Aids for just $345.00 with One-year Guarantee.</li>
									<li>
										Extended "Worry-Free" Warranty on our <a href="http://www.directhearingaidservice.com/sitepage.php?pageid=9">hearing aid repair service</a> available for an additional six months - <font color="#285049" style="font-size: 18px;"><strong>$99.59</strong></font></li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td style="padding-top: 10px;">
				<table bgcolor="#d6eae5" border="0" cellpadding="0" cellspacing="0" width="100%">
					<tbody>
						<tr>
							<td background="images/lefttop.gif" class="heading">
								Repair any custom-made hearing aid, regardless of age or manufacturer!</td>
						</tr>
						<tr>
							<td valign="top">
								<ul>
									<li>
										You can have a new custom Shell made for ANY&nbsp; reason.</li>
									<li>
										Repair, Upgrade, &amp; Convert to a Digital Circuit to improve sound quality.</li>
									<li>
										Repair the electronic components from any Custom or Behind-the-Ear Hearing Aid</li>
									<li>
										Most Brands of Hearing Aids&nbsp; can be Repaired in the Lab for <a href="http://www.directhearingaidservice.com/sitepage.php?pageid=28">Hearing Aid Repair, Garden Grove</a> CA, and sent back by Mail or Courier within 24 to 48 hours.</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table></td>
              </tr>
              <tr>
                <td style="padding-top:6px;"></td>
              </tr>
              <tr>
                <td style="padding-top:6px;"><table width="100%" border="0" cellspacing="0" cellpadding="0" background="images/bottomboxbg.gif">
                  <tbody><tr>
                    <td height="286" valign="top" style="padding-top:12px;" align="center"><table width="522" border="0" cellspacing="0" cellpadding="0">
                      <tbody><tr>
                        <td width="10"><img src="images/boxleft.png"></td>
                        <td bgcolor="#FFFFFF" width="502" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td width="242"><img src="images/pic.jpg"></td>
    <td align="left" valign="top"><table width="230" border="0" cellspacing="0" cellpadding="6" align="center">
      <tbody><tr>
        <td width="12" valign="top"><img src="images/dot.jpg" width="9" height="9" vspace="6"></td>
        <td width="172" valign="top"><font color="#285049" style="font-size:18px;"><strong>$99.95</strong></font><br>for most Hearing Aid Repairs</td>
      </tr>
      <tr>
        <td valign="top"><img src="images/dot.jpg" width="9" height="9" vspace="6"></td>
        <td valign="top"><font color="#285049" style="font-size:18px;"><strong>$19.95</strong></font><br>
          Clean and check Hearing 
Aids</td>
      </tr>
      <tr>
        <td valign="top"><img src="images/dot.jpg" width="9" height="9" vspace="6"></td>
        <td valign="top"><font color="#285049" style="font-size:18px;"><strong>$3.00</strong></font><br>Package of batteries</td>
      </tr>
    </tbody></table></td>
  </tr>
</tbody></table></td>
                        <td width="10"><img src="images/boxright.png"></td>
                      </tr>
                      <tr>
                        <td colspan="3" align="right" style="padding-top:10px;"><a href="orderform.php"><img src="images/nav/learnmore.gif" title="Learn More" border="0"></a></td>
                        </tr>
                    </tbody></table></td>
                  </tr>
                </tbody></table></td>
              </tr>
            </tbody></table></td>
            <td width="10">&nbsp;</td>
            <td width="385" valign="top" align="left"><table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody><tr>
                <td>		<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:solid 1px #d3d3d3" bgcolor="#eeeeee">
                  <tbody><tr>
                    <td background="images/boxtop.gif" height="38" class="heading" valign="top">FREE Report: Repair or Replace?</td>
          </tr>
          <tr>
            <td align="left"><table width="96%" border="0" cellpadding="0" cellspacing="8">
                <form action="subscription.php" method="post" name="theform" id="theform" onsubmit="return validatex(this)"></form>
                  <tbody><tr>
                    <td colspan="2" align="left" class="emailcatchertitle">Top 10 questions you must ask about hearing aid repair before you decide<br><br></td>
                  </tr>
                  <tr>
                    <td valign="top" align="center"><strong>Name:</strong></td>
                    <td valign="top" align="left"><input name="name" type="text" class="txtField" size="32" id="name"></td>
                  </tr>
                  <tr>
                    <td align="center"><strong>Email:</strong></td>
                    <td align="left"><input name="email" type="text" class="txtField" id="email" size="32"></td>
                  </tr>
                  <tr>
                    <td height="30" align="center">&nbsp;</td>
                    <td height="30" align="right"><div align="rigth" style="padding-right:70px;">
                      <input type="image" name="imageField" src="images/nav/go.jpg" title="Submit">
                    </div></td>
                  </tr>
                
              </tbody></table></td>
          </tr>
        </tbody></table>
						
				</td>
              </tr>
              <tr>
                <td style="padding-top:6px;"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:solid 1px #d3d3d3" bgcolor="#eeeeee">
                  <tbody><tr>
                    <td background="images/boxtop.gif" height="38" class="heading" valign="top">Hearing Aid Repair</td>
                  </tr>
                  <tr>
                    <td height="150" valign="top" align="center"><table width="380" border="0" cellspacing="0" cellpadding="4">
                      <tbody><tr>
                        <td valign="top" width="155"><img src="images/pic2.jpg"></td>
                        <td width="225" valign="top"><font style="font-size:28px"><strong>YES</strong></font><br>
<font style="font-size:16px;">I want same or next<br> day Hearing Aid Repair</font>
<p align="right"><a href="sitepage.php?pageid=21"><img src="images/nav/learnmore.jpg" border="0" title="Learn More"></a></p></td>
                      </tr>
                    </tbody></table></td>
                  </tr>
                </tbody></table></td>
              </tr>
              <tr>
                <td style="padding-top:6px;"><table width="100%" border="0" cellspacing="0" cellpadding="0" style="border:solid 1px #d3d3d3" bgcolor="#eeeeee">
                  <tbody><tr>
                    <td background="images/boxtop.gif" height="38" class="heading" valign="top">Testimonials</td>
                  </tr>
                  <tr>
                    <td height="334" valign="top" align="center" style="padding-top:6px;"><div id="testimoanl" style="width:320px; text-align:left">You guys are amazing!&nbsp; You fixed my hearing aid when I thought I would ...<br><br><strong><em>John William</em></strong>
<br><hr noshade="noshade" width="90%" size="1"><br>
I promised to write you a glowing testimonial when this was over, but I ...<br><br><strong><em>Nick Johnson</em></strong>
<br><hr noshade="noshade" width="90%" size="1"><br>
Thomas, your team of repair technicians is amazing!&nbsp; I was a bit worried ...<br><br><strong><em>Sarah Lane</em></strong>
<div align="right"><a href="testimonials.php" title="more"><img src="images/nav/more.gif" border="0" title="more" vspace="3"></a></div>
</div></td>
                  </tr>
                </tbody></table></td>
              </tr>
            </tbody></table></td>
          </tr>
        </tbody></table>
</td>
      </tr>
    </tbody></table></td>
  </tr>
  <tr>
    <td style="padding-top:12px;"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
        <td bgcolor="#eeeeee" height="35" style="border:solid 1px #d3d3d3;p"><table width="947" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td align="left" class="footer" width="260">©2024 directhearingaidservice.com</td>
  <td align="right"><table width="500" border="0" cellspacing="0" cellpadding="0" class="footer">
  <tbody><tr>
    <td class="footer" align="left"><a href="https://www.directhearingaidservice.com/index.php" title="home">home</a></td>
    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>
    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/orderform.php" title="order form">order form</a></td>
    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>
    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=14" title="return policy">return policy</a></td>
    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>
    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=11" title="privacy policy">privacy policy</a></td>
    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>
    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/articles.php" title="articles">articles</a></td>
    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>
    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/sitepage.php?pageid=48" title="helpful sites">helpful sites</a></td>
    <td width="2"><img src="https://www.directhearingaidservice.com/images/seprator.jpg" width="2" height="14"></td>
    <td align="center" class="footer"><a href="https://www.directhearingaidservice.com/contactus.php" title="contact">contact</a>&nbsp;&nbsp;</td>
  </tr>
</tbody></table>
</td>
  </tr></tbody></table>

</td>
      </tr>
      <tr>
        <td height="20">&nbsp;</td>
      </tr>
    </tbody></table></td>
  </tr>
</tbody></table>
</td>
  </tr>
</tbody></table>
</div>`

const OldPage = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}/>
  )
}

export default OldPage

export const Head = () => <title>Old Page</title>
