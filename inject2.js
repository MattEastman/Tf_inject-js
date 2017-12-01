/* Rule Id: 1030324 */
if ((window.vmeAvailable && window.vmeAvailable === 'true') && (window.vmeCheck && window.vmeCheck === 'true')) {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  var regexCard = /\d(?=\d{4})/g;
  var realCardInput = document.getElementById('cc_number');
  realCardInput.style = 'visibility:hidden;';
  var cvvField = document.getElementsByClassName('hideDisplayclass giftCard-hide grid_4 d-grid_3 alpha')[0];
  cvvField.style.display = 'none';
  var cloneCardInput = realCardInput.cloneNode(true);
  cloneCardInput.id = 'clone-card-input';
  cloneCardInput.value = cloneCardInput.value.replace(regexCard, '*');
  var cloneStyle = cloneCardInput.style;
  cloneStyle.position = 'absolute';
  cloneStyle.left = '0';

  insertAfter(realCardInput, cloneCardInput);

} // Enter your JavaScript here