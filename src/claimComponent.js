import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function ClaimComponent() {
  const { contract } = useContract(
    "0xC24B9BcE989a8bD00170593707cC0f7A21F4fCa9"
  );
  const { mutateAsync: claimRewards, isLoading } = useContractWrite(
    contract,
    "claimRewards"
  );

  const callClaimRewards = async () => {
    try {
      const data = await claimRewards({ args: [] }); // 引数なしで呼び出し
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <button
      onClick={callClaimRewards}
      disabled={isLoading}
      className="claim-rewards-btn"
    >
      Claim Rewards
    </button>
  );
}
