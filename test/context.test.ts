///<reference path="../typings/tsd.d.ts" />

import { Kernel } from "../source/kernel/kernel";
import { Context } from "../source/activation/context";
import { Request } from "../source/activation/request";
var expect = chai.expect;

describe('Context Test Suite \n', () => {

  it('It should be able to set its own properties correctly \n', () => {
    var kernel = new Kernel();
    var context =  new Context(kernel);
    var request = new Request(context);
    context.rootRequest = request;
    expect(context.kernel).to.equals(kernel);
    expect(context.rootRequest).to.be.eql(request);
  });

});