/*
 * swagger test
 * swagger client sdk test.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerTest);
  }
}(this, function(expect, SwaggerTest) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse2001Data', function() {
      beforeEach(function() {
        instance = new SwaggerTest.InlineResponse2001Data();
      });

      it('should create an instance of InlineResponse2001Data', function() {
        // TODO: update the code to test InlineResponse2001Data
        expect(instance).to.be.a(SwaggerTest.InlineResponse2001Data);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property msg (base name: "msg")', function() {
        // TODO: update the code to test the property msg
        expect(instance).to.have.property('msg');
        // expect(instance.msg).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

    });
  });

}));
