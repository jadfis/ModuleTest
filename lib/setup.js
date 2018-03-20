
module.exports = function() {
  var boxType = {
    uuid: 'a9d1a72e-5add-47be-aeb3-2760ab2ce633',
    title: 'Conso EDF',
    ngcontroller: 'teleinfoCtrl as vm',
    html: '<p>Voici un paragraphe <strong>HTML</strong> !</p>',
    footer: box.footer,
    icon: 'fa fa-flash',
    type: 'box box-primary',
    view: 'dashboard'
  }

   
  // Create the box type
  gladys.boxType.create(boxType);

}