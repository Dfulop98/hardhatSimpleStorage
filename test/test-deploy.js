const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
// hardhat test running on mocha js testnetwork
describe("SimpleStorage", () => {
    let simpleStorageFactory, simpleStorage;
    beforeEach(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async () => {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        //Assert
        assert.equal(currentValue.toString(), expectedValue);
    });

    it("Should update when we call update", async () => {
        const expectedValue = "7";
        const transactionResponse = await simpleStorage.store(7);
        await transactionResponse.wait(1);
        const currentValue = await simpleStorage.retrieve();
        //Assert
        assert.equal(currentValue.toString(), expectedValue);
    });

    it("Should return empty people array", async () => {
        const numberOfPeople = await simpleStorage.getNumberOfPeople();
        assert.equal(numberOfPeople, 0);
    });

    it("Should return 1 length people array", async () => {
        const transactionResponse = await simpleStorage.addPerson(
            "John Doe",
            "4"
        );
        await transactionResponse.wait(1);

        const numberOfPeople = await simpleStorage.getNumberOfPeople();
        assert.equal(numberOfPeople, 1);
    });
});
