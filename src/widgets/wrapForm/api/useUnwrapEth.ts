import { useWriteContract } from "wagmi";
import { useCallback } from "react";
import ERC20Abi from "../../../shared/abis/ERC20Abi.json";
import { parseEther } from "viem";
import { toast } from "sonner";
import { WETH_ADDRESS } from "../../../shared/constants";

export const useUnwrapEth = (amount: string) => {
  const { writeContract } = useWriteContract();

  const handleWrapEth = useCallback(() => {
    if (amount !== "") {
      const withdrawAmount = parseEther(amount);

      const toastId = toast.loading("Processing...");

      writeContract(
        {
          abi: ERC20Abi,
          address: WETH_ADDRESS,
          functionName: "withdraw",
          args: [withdrawAmount],
        },
        {
          onSuccess: () => {
            toast.success("ETH successfully unwrapped!");
            toast.dismiss(toastId);
          },
          onError: (error, variables, context) => {
            toast.error("Something went wrong!");
            toast.dismiss(toastId);
            console.error(error, variables, context);
          },
        },
      );
    }
  }, [amount, writeContract]);

  return handleWrapEth;
};
