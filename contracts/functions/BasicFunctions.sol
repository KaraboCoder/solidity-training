// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract BasicFunctions {
    uint value; //variable to store an unsigned integer of 256 bits

    /**
        Function to get the value variable
        The 'view' modifier means that the function is read-only and does not modify the blockchain
    **/
    function getValue() external view returns(uint) {
        return value;
    }

    /**
        Function that performs a computation and returns the result
        The 'pure' modifier means that the function is read-only and does not modify the blockchain, but unlike 'view', this modifier does not return the state of blockchain/contract
    **/
    function calculateSomething() external pure returns(uint) {
        return 1 + 1;
    }

    /**
        Function to set the value variable
        This function is not read-only and does not return any value. It modifies the state of the contract.
    **/
    function setValue(uint _value) external {
        value = _value;
    }
}
