import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
              {name === "reason" ? (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="bg-white focus:border-black/50">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Inquiry">
                      General Inquiry
                    </SelectItem>
                    <SelectItem value="Feedback">Feedback</SelectItem>
                    <SelectItem value="Technical Support">
                      Technical Support
                    </SelectItem>
                    <SelectItem value="Collaboration">Collaboration</SelectItem>
                  </SelectContent>
                </Select>
              ) : type === "textarea" ? (
                <Textarea
                  className="resize-none h-72 bg-night/10 focus:border-black/50"
                  placeholder={placeholder}
                  {...field}
                />
              ) : (
                <Input
                  className="bg-night/10 focus:border-black/50"
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
