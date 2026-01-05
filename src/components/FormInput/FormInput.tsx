import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
  description,
} from "@/components/ui/form";
import { Input } from "../ui/input";

function FormInput({
  control,
  name,
  label,
  type,
  placeholder,
  className,
  id,
  description,
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="pb-4 md:pb-6">
          <FormLabel className="text-lg text-[#FFFFFF]">{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              id={id}
              placeholder={placeholder}
              className={`bg-[#FFFFFF] rounded-lg border-none ${className}`}
              {...field}
            />
          </FormControl>
          {description && (
            <FormDescription className="text-base text-[#FFFFFF] font-light">
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
