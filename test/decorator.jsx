function testable(target) {
  target.isTestable = true;
}

@testable
class MyTestavleClass{}

console.log(MyTestavleClass.isTestable);
