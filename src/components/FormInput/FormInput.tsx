import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "../ui/input";
// Fast-pass: untyped aliases to avoid strict prop-type mismatches
const FormItemAny: any = FormItem;
const FormLabelAny: any = FormLabel;
const FormControlAny: any = FormControl;
const FormDescriptionAny: any = FormDescription;

function FormInput({
  control,
  name,
  label,
  type,
  placeholder,
  className,
  id,
  description,
}: {
  control?: any;
  name?: any;
  label?: any;
  type?: any;
  placeholder?: any;
  className?: any;
  id?: any;
  description?: any;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: { field: any }) => (
        <FormItemAny className="pb-4 md:pb-6">
          <FormLabelAny className="text-lg text-[#FFFFFF]">{label}</FormLabelAny>
          <FormControlAny>
            <Input
              type={type}
              id={id}
              placeholder={placeholder}
              className={`bg-[#FFFFFF] rounded-lg border-none ${className}`}
              {...field}
            />
          </FormControlAny>
          {description && (
            <FormDescriptionAny className="text-base text-[#FFFFFF] font-light">
              {description}
            </FormDescriptionAny>
          )}
          <FormMessage />
        </FormItemAny>
      )}
    />
  );
}

export default FormInput;
