import React from "react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";

export default function GetStakeInfoComponent() {
  const address = useAddress(); // ログインしているユーザーのアドレスを取得
  const { contract } = useContract(
    "0xC24B9BcE989a8bD00170593707cC0f7A21F4fCa9"
  );

  const { data, isLoading } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  // BigNumberを10進数に変換し、小数点以下3桁に丸める関数
  const toDecimal = (bigNumber) => {
    const number = ethers.BigNumber.from(bigNumber).toString() / 1e18;
    return Number(number.toFixed(3));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data && (
        <div>
          <h1> {toDecimal(data[1])}</h1>
        </div>
      )}
    </div>
  );
}
