import { Props } from "@/models/props";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

function TransferForm({ onSubmit }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="fromUser">From Account</Label>
            <Input
              type="text"
              id="fromUser"
              placeholder="Type the sender's email"
              {...register("fromUser", { required: true })}
            />
            {errors.fromUser && <span>This field is required</span>}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="toUser">To Account</Label>
            <Input
              type="text"
              id="toUser"
              placeholder="Type the recipient's email"
              {...register("toUser", { required: true })}
            />
            {errors.toUser && <span>This field is required</span>}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              placeholder="Type amount to transfer"
              {...register("amount", { required: true })}
            />
            {errors.amount && <span>This field is required</span>}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit">Transfer</Button>
      </CardFooter>
    </form>
  );
}

export default TransferForm;
