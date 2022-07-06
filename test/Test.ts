import { expect } from "chai";
import { ethers } from "hardhat";

describe("Child_Public", function(){
    it("Should return 50", async function(){

        const Child = await ethers.getContractFactory("Child");
        const child = await Child.deploy();
        await child.deployed();
        expect(await child.callStatic.getpublicdata()).to.equal(50);
    })
})

describe("Root",function () {
    it("Should return pData i.e. public data inside root contract",async function () {

        const Root = await ethers.getContractFactory("Root");
        const root = await Root.deploy();
        await root.deployed();
        expect(await root.callStatic.retpdata()).to.equal(500);

    });
    
})

describe("Caller",function () {
    it("Should return pData i.e. public data inside root contract via Caller contract",async function () {

   const Caller = await ethers.getContractFactory("Caller");
   const caller = await Caller.deploy();
   await caller.deployed();
   expect(await caller.callStatic.callroot()).to.equal(500);

    });
    
})

describe("Child_Intenal",function(){

    it("Should return internal data value as 800", async function(){

        const Child = await ethers.getContractFactory("Child");
        const child = await Child.deploy();
        await child.deployed();
        expect(await child.callStatic.getinternal()).to.equal(800);

    })

})

