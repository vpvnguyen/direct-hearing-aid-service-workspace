import React from 'react'

const lorem = `
<div id="Inner">
<h1>Lorem Ipsum</h1>
<br>
<h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
<h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
<br>
<div id="Content">
<div id="bannerL"><!-- Tag ID: lipsumcom_left_siderail -->
<div align="center" data-freestar-ad="__300x600" id="lipsumcom_left_siderail">
  <script data-cfasync="false" type="text/javascript">
    freestar.config.enabled_slots.push({ placementName: "lipsumcom_left_siderail", slotId: "lipsumcom_left_siderail" });
  </script>
</div></div>
<div id="bannerR"><!-- Tag ID: lipsumcom_right_siderail -->
<div align="center" data-freestar-ad="__300x600" id="lipsumcom_right_siderail">
  <script data-cfasync="false" type="text/javascript">
    freestar.config.enabled_slots.push({ placementName: "lipsumcom_right_siderail", slotId: "lipsumcom_right_siderail" });
  </script>
</div></div>
<div class="boxed"><div id="lipsum">
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac pretium metus, sit amet faucibus velit. Fusce laoreet ultrices arcu, et placerat quam viverra tempus. Nulla ut dictum sem, non mattis lorem. Phasellus laoreet id nisl quis porttitor. Integer dolor enim, condimentum ut viverra in, dignissim ut lacus. Curabitur vestibulum faucibus risus, ac porta leo sollicitudin vitae. Pellentesque ac viverra mi. Ut dapibus, tortor quis venenatis condimentum, augue elit sagittis mi, eget volutpat mi est et leo. Aenean volutpat lorem eget convallis ultrices.
</p>
<p>
Phasellus dapibus ipsum et molestie mattis. Nullam id nisi est. Phasellus ut turpis eu sem molestie imperdiet. Praesent consequat ante sed sodales vestibulum. Cras et accumsan massa. Donec non volutpat diam. Integer ultricies turpis eu fringilla maximus. Nulla cursus condimentum eros eu semper. Cras mollis cursus ex, vitae pellentesque ante imperdiet et. Vestibulum imperdiet sollicitudin neque.
</p>
<br>
<p>
Morbi a nunc non erat consectetur mollis id ac tellus. Aenean volutpat lorem lacus, et malesuada ligula gravida eu. Mauris mattis ante erat, vitae facilisis diam efficitur nec. Nam in nibh sollicitudin est ornare egestas eu id nibh. Vestibulum massa dolor, blandit eu lacinia vel, sagittis ut urna. Nunc nec metus interdum, rhoncus lacus sed, cursus mi. Praesent rhoncus, tortor sit amet ultrices auctor, tellus leo varius diam, ornare commodo elit nulla eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet justo sit amet enim rutrum porttitor ut at ipsum. Nullam pharetra cursus vestibulum. Vivamus eget fermentum mi. Fusce et tortor ac risus sagittis malesuada. Duis quis iaculis erat.
</p>
<br>
<p>
Praesent convallis risus in mattis pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam mollis ultricies purus et elementum. Maecenas sed mollis leo. Etiam est est, sodales a tincidunt nec, pretium vel nisl. Fusce congue placerat dignissim. Cras consectetur mauris ac sagittis commodo. Sed cursus quis sem sed laoreet. Etiam mollis faucibus est vel fermentum. Donec mauris ligula, tincidunt vitae mauris at, consequat lacinia nisl. Proin vestibulum, sapien non commodo fringilla, lacus ante maximus urna, vitae elementum est tellus in lorem.
</p>
<br>
<p>
Sed ligula dui, pretium consectetur purus sollicitudin, varius sollicitudin ex. Donec efficitur felis eget vehicula euismod. Nunc eget tortor arcu. Quisque vel sodales orci. Sed vitae erat et lorem tincidunt accumsan. Duis volutpat tortor sapien, ut tempor diam consectetur non. In efficitur eros in ex consectetur imperdiet. Maecenas eget porta mi. Pellentesque molestie faucibus nulla ac condimentum. Nullam consequat non est at dictum. Nullam mattis finibus efficitur. Etiam pretium mauris vitae arcu dictum, quis venenatis nisl varius. Nullam malesuada leo purus, nec porttitor felis tincidunt non. Vestibulum sit amet eleifend nibh, ut aliquet orci.
</p></div>
<div id="generated">Generated 5 paragraphs, 432 words, 2932 bytes of <a href="https://www.lipsum.com/" title="Lorem Ipsum">Lorem Ipsum</a></div>
</div>
</div>
</div>
`;


const Lorem = () => <div style={{ paddingTop: '6rem' }} dangerouslySetInnerHTML={{ __html: lorem }} />

export default Lorem