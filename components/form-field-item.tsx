import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control, FieldPath } from "react-hook-form";
import { contactFormSchema } from "@/lib/utils";

interface FormFieldItem {
  control: Control<z.infer<typeof contactFormSchema>>;
  name: FieldPath<z.infer<typeof contactFormSchema>>;
  label: string;
  type: string;
  placeholder: string;
}

const FormFieldItem = ({
  control,
  name,
  label,
  type,
  placeholder,
}: FormFieldItem) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="input-label">{label}</FormLabel>
            <FormControl>
              {type === "textarea" ? (
                <Textarea
                  className="resize-none bg-white/10 h-72 border-night/40 focus:border-black"
                  placeholder={placeholder}
                  {...field}
                />
              ) : (
                <Input
                  className="bg-white/10 border-night/40 focus:border-black"
                  type={type}
                  placeholder={placeholder}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormFieldItem;
