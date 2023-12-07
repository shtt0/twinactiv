import React from "react";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

export default function TokenBlComponent() {
  const address = useAddress(); // ログインしているユーザーのアドレスを取得
  const { contract } = useContract(
    "0x45B2242E54Dae439B080D459C1f1E9290E061E34"
  );

  const { data, isLoading } = useContractRead(contract, "balanceOf", [address]);

  // WeiからEtherに変換する関数
  const formatBalance = (balance) => {
    // BigNumber型のデータを数値に変換し、1e18で割る
    const number = Number(balance) / 1e18;
    // 小数点以下3桁に丸める
    return number.toFixed(3);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{data && <h1> {formatBalance(data)} </h1>}</div>;
}
