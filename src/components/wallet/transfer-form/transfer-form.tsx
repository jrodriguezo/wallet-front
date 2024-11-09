import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  TransferFormData,
  TransferFormProps,
} from "@/models/interface/form.interface";

function TransferForm({ onSubmit, error }: TransferFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransferFormData>();

  const handleFormSubmit: SubmitHandler<TransferFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <CardContent>
        <CardTitle className="mb-4">Transfer money</CardTitle>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="fromUser">From Account</Label>
            <Input
              type="text"
              id="fromUser"
              placeholder="Type the sender's account"
              {...register("fromUser", { required: true })}
            />
            {errors.fromUser && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="toUser">To Account</Label>
            <Input
              type="text"
              id="toUser"
              placeholder="Type the recipient's account"
              {...register("toUser", { required: true })}
            />
            {errors.toUser && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              placeholder="Type amount to transfer"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit">Transfer</Button>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </CardFooter>
    </form>
  );
}

export default TransferForm;
