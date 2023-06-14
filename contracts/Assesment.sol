// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//import "hardhat/console.sol";

contract Assessment {
    // address payable public owner;
    uint256 public result;

    event Sum(uint256 first, uint256 second);
    event Subtract(uint256 first, uint256 second);

    // constructor(uint initBalance) payable {
    //     owner = payable(msg.sender);
    //     balance = initBalance;
    // }

    function getResult() public view returns(uint256){
        return result;
    }

    function addition(uint256 _first, uint256 _second) public {
        

        // make sure this is the owner
        // require(msg.sender == owner, "You are not the owner of this account");

        // perform transaction
        result = _first+_second;

        // assert transaction completed successfully
        // assert(balance == _previousBalance + _amount);

        // emit the event
        emit Sum(_first,_second);
    }

    // custom error
    // error InsufficientBalance(uint256 balance, uint256 withdrawAmount);

    function minus(uint256 _first, uint256 _second) public {
        // require(msg.sender == owner, "You are not the owner of this account");
        // uint _previousBalance = balance;
        // if (balance < _withdrawAmount) {
        //     revert InsufficientBalance({
        //         balance: balance,
        //         withdrawAmount: _withdrawAmount
        //     });
        // }

        // withdraw the given amount
        result= _first-_second;

        // assert the balance is correct
        // assert(balance == (_previousBalance - _withdrawAmount));

        // emit the event
        emit Subtract(_first,_second);
    }
}
