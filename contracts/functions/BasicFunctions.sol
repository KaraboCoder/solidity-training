// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract BasicFunctions {
    uint value; //variable to store an unsigned integer of 256 bits

    //function to get the value variable
    function getValue() external view returns(uint) {
        return value;
    }

    //function to set the value variable
    function setValue(uint _value) external {
        value = _value;
    }
}
