// require("spec_helper.js");
// require("../../public/javascripts/application.js");
// 
// Screw.Unit(function(){
//   describe("Your application javascript", function(){
//     it("does something", function(){
//       expect("hello").to(equal, "hello");
//     });
// 
//     it("accesses the DOM from fixtures/application.html", function(){
//       expect($('.select_me').length).to(equal, 2);
//     });
//   });
// });
// 
// 
// 
require("spec_helper.js");
require("../../public/javascripts/application.js");

Screw.Unit(function(){
  describe("COI form", function(){
    
    it('displays further info entry field', function() {
      fixture($('<form id="questions"/>')
        .append($('<div class="question"/>')
          .append($('<input id="answer_1_yes" name="answer_1" class="answer requires_further_info_on" type="radio" value="yes" />'))
          .append($('<input id="answer_1_no" name="answer_1" class="answer requires_further_info_off" type="radio" value="no" />'))
          .append($('<textarea id="answer_1_further_info" rows="10" cols="10" name="answer_1_further_info" class="further_info" style="display:none;"/>'))));
          
      expect($('.further_info').is(':visible')).to(equal, false);
      showFurtherInfo($('.requires_further_info_on'));
      expect($('.further_info').is(':visible')).to(equal, true);
    });
    
    it('hides further info entry field', function() {
      fixture($('<form id="questions"/>')
        .append($('<div class="question"/>')
          .append($('<input id="answer_1_yes" name="answer_1" class="answer requires_further_info_on" type="radio" value="yes" />'))
          .append($('<input id="answer_1_no" name="answer_1" class="answer requires_further_info_off" type="radio" value="no" />'))
          .append($('<textarea id="answer_1_further_info" rows="10" cols="10" name="answer_1_further_info" class="further_info"/>'))));
      
      expect($('.further_info').is(':visible')).to(equal, true);
      hideFurtherInfo($('.requires_further_info_off'));
      expect($('.further_info').is(':visible')).to(equal, false);
    });
  });
});

