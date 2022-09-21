import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
  InputProps,
} from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';

interface Props extends InputProps {
  label: string;
  name: string;
  control?: any;
  error?: any;
  register?: any;
}

const Input = React.forwardRef(
  ({ label, error, control, ...props }: Props, ref): JSX.Element => {
    return (
      <FormControl isInvalid={error}>
        <FormLabel htmlFor={props.name}>{label}</FormLabel>

        <Controller
          name={props.name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputChakra {...props} {...field} />
              <FormErrorMessage>{error?.message}</FormErrorMessage>
            </>
          )}
        />
      </FormControl>
    );
  }
);

Input.displayName = 'Input';
export default Input;
