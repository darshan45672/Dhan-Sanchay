import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const InputForm = ({control,name,label,placeholder,type}: {
  control: Control<z.infer<typeof authFormSchema>>;
  name: 'email' | 'password';
  placeholder: string;
  label: string;
  type: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                type={type}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="mt-3 form-message" />
          </div>
        </div>
      )}
    />
  );
};

export default InputForm;
