import { CardContent } from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";
import { CURRENCY } from "@/config";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Badge } from "@/components/ui/badge";
import { v4 as uuid } from "uuid";
import styles from "@/components/wallet/details/details.module.css";

function Details() {
  const { balance, transactions, address } = useSelector(
    (state: RootState) => state.operations
  );

  console.log({ transactions });

  return (
    <>
      <CardContent>
        <div className="flex items-center space-x-4 rounded-md rounded-b-none border p-4">
          <CircleDollarSign />
          <div className="flex-1 space-y-1">
            <h2 className="text-sm font-medium leading-none">Your account</h2>
            <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[10rem] sm:max-w-full">
              {address}
            </p>
            <p className="text-black font-bold text-lg  text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[10rem] sm:max-w-full">
              {`${CURRENCY.DOLLAR}${balance}`}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 rounded-md rounded-t-none p-4  bg-muted">
          <div className="flex-1 space-y-1">
            <h2 className="ml-[40px]  text-sm font-bold leading-none">
              Latest Movements
            </h2>
            <ul className={styles.movements}>
              {transactions
                .slice()
                .reverse()
                .map((transaction) => {
                  const { type, from, to, amount } = transaction;
                  const isNegativeAmount = Number(amount) < 0;
                  return (
                    <li key={uuid()}>
                      <header>
                        <Badge variant={type}>{type}</Badge>
                        <h3 className="font-light text-sm">Balance</h3>
                      </header>
                      {from && to ? (
                        <small className="flex gap-1">
                          From{" "}
                          <span className="block overflow-hidden text-ellipsis whitespace-nowrap max-w-[10ch]">
                            {from}
                          </span>{" "}
                          to
                          <span className="block overflow-hidden text-ellipsis whitespace-nowrap max-w-[10ch]">
                            {to}
                          </span>
                        </small>
                      ) : (
                        <small className="mr-auto ">You did a deposit</small>
                      )}

                      <footer>
                        <small
                          className={`${
                            isNegativeAmount ? "text-red-400" : "text-green-400"
                          }`}
                        >{`${isNegativeAmount ? "-" : "+"}${
                          CURRENCY.DOLLAR
                        }${Math.abs(Number(amount))}`}</small>
                      </footer>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </CardContent>
    </>
  );
}

export default Details;
