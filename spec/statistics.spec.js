const addFun=require("../app/statistics");
describe("First Unit Test Case",function(){
    it("Sample Test",function(){
        const result=addFun(10,20);
        expect(result).toBe(30);
    })
})
