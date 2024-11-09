import { Props } from "@/models/props";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function TransferForm(props: Props) {
  const [amount, setAmount] = useState("");
  const [fromUser, setFromUser] = useState("");
  const [toUser, setToUser] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Transferring $${amount} from ${fromUser} to ${toUser}`);
    // Add your transfer logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="fromUser">From Account</Label>
            <Input
              type="text"
              id="fromUser"
              placeholder="Type the sender's email"
              value={fromUser}
              onChange={(e) => setFromUser(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="toUser">To Account</Label>
            <Input
              type="text"
              id="toUser"
              placeholder="Type the recipient's email"
              value={toUser}
              onChange={(e) => setToUser(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              placeholder="Type amount to transfer"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" form="transferForm">
          Transfer
        </Button>
      </CardFooter>
    </form>
  );
}

export default TransferForm;
