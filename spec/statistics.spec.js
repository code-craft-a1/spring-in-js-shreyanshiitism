<<<<<<< HEAD
const getStatistics=require("../app/statistics");
describe("StatisticsTest",function(){
    it("reportsAverageMinMaxx",function(){
        const r1 = 1.5;
        const r2 = 8.9;
        const r3 = 3.2;
        const r4= 4.5;
        const numbers=[r1,r2,r3,r4];
        const stats=getStatistics(numbers);
        const epsilon=0.001;

        expect(Math.abs((stats.min-1.5))).toBeLessThan(epsilon);
        expect(Math.abs((stats.max- 8.9))).toBeLessThan(epsilon);
        expect(Math.abs((stats.average- 4.525))).toBeLessThan(epsilon);
    })

    
    it("reportsNaNForEmptyInput",function(){
        const numbers=[];
        const stats=getStatistics(numbers);
        //All fields of computedStats (average, max, min) must be
         //NAN (not-a-number)
        //Design the REQUIRE statement here.
        //Use https://www.w3schools.com/jsref/jsref_isnan.asp
        
    })
    it("raises alerts when max is greater than threshold",function(){
         const emailAlert=new EmailAlert();
         const ledAlert=new LEDAlert();
         const alerters=[emailAlert,ledAlert];

         const maxThreshold = 10.2;

         const statsAlerter=new StatsAlerter(maxThreshold, alerters);
         statsAlerter.checkAndAlert([99.8, 34.2, 4.5, 6.7]);
     
         expect(emailAlert.emailSent).tobe(true);
         expect(ledAlert.ledGlows).tobe(true);

        
        
    }) 
})
=======
const addFun=require("../app/statistics");
describe("First Unit Test Case",function(){
    it("Sample Test",function(){
        const result=addFun(10,20);
        expect(result).toBe(30);
    })
})
>>>>>>> fd6829ba89f8226f1f6f5e0b319fe945991475d8
