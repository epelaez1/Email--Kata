describe("email tester", function(){

  it("empty textlines equal to nothing", function(){
      expect(parseEmails([])).toEqual([]);      
  });
  it("email returns email", function(){
      expect(parseEmails(["asdf@asdf.asdf"])).toEqual(["asdf@asdf.asdf"]);      
  });
  it("invalid input returns a empty output", function(){
      expect(parseEmails(["hola"])).toEqual([]);      
  });
  it("at and dot converts to @ and .", function(){
      expect(parseEmails(["exampleAThotmailDOTcom"])).toEqual(["example@hotmail.com"]);      
  });
  it("other char converted", function(){
      expect(parseEmails(["example(at)hotmail(dot)com"])).toEqual(["example@hotmail.com"]);      
  });
  it("invalid emails return []", function(){
      expect(parseEmails(["1@.qwe"])).toEqual([]);      
  });
  it(" more invalid emails return []", function(){
      expect(parseEmails(["@asd.asd"])).toEqual([]);      
  });
  it(" many mails", function(){
      expect(parseEmails(["example-at-hotmail-dot-com","example-at-hotmail-dot-com"])).toEqual(["example@hotmail.com","example@hotmail.com"]);      
  });
  it(" many mails with only 1 valid e-mail", function(){
      expect(parseEmails(["example-at-hotmail-dot-com","hola"])).toEqual(["example@hotmail.com"]);      
  });
});