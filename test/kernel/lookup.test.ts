///<reference path="../../typings/tsd.d.ts" />

import { Lookup } from "../../source/kernel/lookup";
var expect = chai.expect;

describe('Lookup Test Suite \n', () => {

  it('Key cannot be null when invoking get() remove() or hasKey() \n', () => {
    var lookup = new Lookup<any>();
    var getFn = function() { lookup.get(null); }
    var removeFn = function() { lookup.remove(null); }
    var hasKeyFn = function() { lookup.hasKey(null); }

    expect(getFn).to.throw("Argument Null");
    expect(removeFn).to.throw("Argument Null");
    expect(hasKeyFn).to.throw("Argument Null");
  });

  it('Key cannot be null when invoking add() \n', () => {
    var lookup = new Lookup<any>();
    var addFn = function() { lookup.add(null, 1); }
    expect(addFn).to.throw("Argument Null");
  });

  it('Value cannot be null when invoking add() \n', () => {
    var lookup = new Lookup<any>();
    var addFn = function() { lookup.add("TEST_KEY", null); }
    expect(addFn).to.throw("Argument Null");
  });

  it('Value cannot be null when invoking add() \n', () => {
    var lookup = new Lookup<any>();
    var key = "TEST_KEY";
    lookup.add(key, 1);
    lookup.add(key, 2);
    var result = lookup.get(key);
    expect(result.length).to.eql(2);
  });

  it('Throws when key not found \n', () => {
    var lookup = new Lookup<any>();
    var fn = function() {
      lookup.get("THIS_KEY_IS_NOT_AVAILABLE");
    }
    expect(fn).to.throw("Key Not Found");
  });

});
