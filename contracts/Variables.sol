// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract Variables {
    //Fixed-size variables (meaning the number of bytes in memory are not variable)
    bool isDone; //can store true/false value
    uint i; //stores an unsigned integer value (uint256), 256 bits of memory
    address recipient; //can store a 20 bytes address of a user or contract.
    bytes32 data; //can hold any series of bytes of data (arbitrary 32 bytes data), e.g. a 32 bytes string

    //Variable-size types
    string name; //can hold a string any size
    bytes _data; //can hold arbitrary data of any size. Unlike bytes32, the size of the variable of this type is not predefined.
    uint[] amounts; // and array of type unsigned integer (uint256)
    mapping(uint => string) users; //similar to maps, it's a key-value list. In this example the key is of type uint and the value is of type string.

    //User-defined types
    struct User{
        uint age;
        string name;
        uint[] friendIds;
    }
    /**
        struct:
            similar to objects, it is used to group related data.
        Usage:
            User user;
            user.name = "Karabo";
            user.age = 15;
            user.friendIds.push(3)
    **/

    enum Color {RED, BLUE, YELLOW}  // used for defining options (labels), usage: Color.RED 
}
