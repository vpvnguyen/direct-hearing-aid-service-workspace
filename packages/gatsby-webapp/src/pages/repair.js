import * as React from "react";
import { ContentContainer } from "@layouts";

const Repair = (props) => {
  return (
    <>
      <ContentContainer>
        <h1>Repair Form</h1>
        <p>
          Please fill out the online form or print out this online form and
          include this along with your hearing aid when you send this to us.
        </p>
        <p>
          NOTE: REPAIRS MUST BE PAID FOR IN ADVANCE, if you are uncertain about
          what type of repair you need, please pay for the “basic” $135 repair,
          and when we inspect your hearing aid, we will call you if we find this
          is NOT the right repair for you and make the necessary adjustment with
          you over the phone.
        </p>

        <p>Please choose the service below:</p>

        <h2> Repair Service</h2>
        <p>
          Parts ($69.99) Standard Class One Repair ($135.00) Standard Class 1
          (Digital / Power) ($199.99) Standard Class Two Repair ($249.99)
          Standard Class Three Repair ($299.99) Standard Class Four Repair
          ($495.00) Standard Class Five Repair ($595.00) Hearing Aid
          Re-Programming Service ($149.99) Maintenance Plans Same Day Service
          ($34.99) Extended Warranty ($99.95) Clean and Check ($29.99)
          Accessories Universal Sanitizer Dryer ($69.99) Battery Holder ($10.00)
          Super-Dry Aid ($129.99) Dry Brick ($5.00) Box of Battery ($30.00) Box
          of Dry Bricks ($15.00) Batteries ($3.00) Battery Tester ($10.00)
        </p>

        <p>
          Note: if you are NOT sure what is wrong with your Hearing Aid, please
          check Class 1 Repair for $99.99 and allow us to diagnose the problem.
          One of our technicians will contact you to discuss the repair type
          needed if it other than a Class 1 Repair.{" "}
        </p>
        <p>
          Standard Repair - $99.95 (CIC's and BTE's are $119) + shipping and
          includes:
        </p>

        <p>
          Replacing frayed wires Soldering lose wires Replacing weak microphones
          Replacing weak receivers Bring hearing aid to original specs (Just
          like new)
        </p>

        <p>
          USER INFORMATION: SHIP TO: Serial No: Name: * Hearing Aid Brands:
          Email: Contact Person: * Address 1: * Contact Phone No: * Address 2:
          Serial # (Right): City: * Serial # (Left): State: Warranty Expiration
          Date:
        </p>
        <p>Problem With Hearing Aid:</p>

        <p>
          Shipping USPS Rush (Next Day Ship Out) ($34.99) Regular Delivery
          ($10.99) UPS 2 DAYS ($24.99) Priority Mail by USPS ($19.99) Payment
          Options: Pay now Credit Card: on file / in person Check #: Amount:
          Please send us your Hearing Aid in a "HARD CASE" so that the Hearing
          Aid is not damaged when it is mailed. Direct Hearing Aid Services
          Inc., is not responsible for lost or damaged items prior to arrival.
          Direct Hearing Aid guarantees all shipments sent out from our lab. So
          we can ensure you receive the information you requested, please type
          in the following code or solve the equation below. This helps us
          protect you from receiving spam. Thank you for your cooperation. `
        </p>

        <p>
          Warranty Voided if Hearing aid is lost and Damaged by user, or It is
          Abuse by the user, or It is repair by any Other Lab. For Receiver in
          the Canal Product (The RIC will not Cover in Warranty). (* If the
          repair that you have chosen on the order form is not correct, or we
          have any questions, we will call you prior to starting the repair
          work.)
        </p>
      </ContentContainer>
    </>
  );
};

export default Repair;

export const Head = () => <title>Repair</title>;
