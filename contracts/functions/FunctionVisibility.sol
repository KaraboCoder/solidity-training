// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

/**
    Function visibility order: private -> internal -> external -> public
    NOTE: Try to grant minimum amount of privilege/visibility to a member/property of a contract
**/

contract FunctionVisibility {
    uint value; //variable to store an unsigned integer of 256 bits

    /**
        Function with private modifier can ONLY be called/accessed inside this contract. 
    **/
    function _getValue() private view returns(uint) {
        return value;
    }

    /**
        Function with internal modifier can ONLY be called/accessed inside this contract
        and child contracts (contracts that inherit from this contract). 
    **/
    function getValue() internal view returns(uint) {
        return value;
    }

    
    /**
        Function with external modifier can ONLY be called/accessed outside this contract. 
    **/
    function returnValue() external view returns(uint) {
        return value;
    }

    /**
        Function with public modifier can be called/accessed inside and 
        outside the current contract. 
    **/
    function getMeTheValue() public view returns(uint) {
        return value;
    }


    //function to set the value variable
    function setValue(uint _value) external {
        value = _value;
    }
}
