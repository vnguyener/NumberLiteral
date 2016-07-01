"use strict";

const expect = require('chai').expect;
const assert = require('chai').assert;
const numberLit = require('../src/index');

describe("get number literal", () => {
    it("translates successfully", (done) => {
        var result = numberLit.convert(10);

        expect(result).not.to.equal(undefined);
        assert.equal(result, "ten");
        
        console.log(result);
        done();
    });
});