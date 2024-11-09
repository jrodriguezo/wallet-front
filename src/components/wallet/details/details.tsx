import { CardContent } from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";
import { generateWalletAddress } from "./utils";
import { CURRENCY } from "@/config";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

function Details() {
  const mySeedPhrase = "seed";
  const walletAddress = generateWalletAddress(mySeedPhrase);
  const balance = useSelector((state: RootState) => state.operations.balance);

  return (
    <>
      <CardContent>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <CircleDollarSign />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Your account</p>
            <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[10rem] sm:max-w-full">
              {walletAddress}
            </p>
            <p className="text-black font-bold text-lg  text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[10rem] sm:max-w-full">
              {`${CURRENCY.DOLLAR}${balance}`}
            </p>
          </div>
        </div>
      </CardContent>
    </>
  );
}

export default Details;
