import { Button } from "@/components/ui/button";
import { CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DepositFormData,
  DepositFormProps,
} from "@/models/interface/form.interface";
import { SubmitHandler, useForm } from "react-hook-form";

function DepositForm({ onSubmit }: DepositFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DepositFormData>();

  const handleFormSubmit: SubmitHandler<DepositFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <CardContent>
        <CardTitle>Deposit Form</CardTitle>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="amount">Amount</Label>
            <Input
              type="number"
              id="amount"
              placeholder="Type amount to deposit"
              {...register("amount", { required: true })}
            />
            {errors.amount && <span>This field is required</span>}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit">Deposit</Button>
      </CardFooter>
    </form>
  );
}

export default DepositForm;
