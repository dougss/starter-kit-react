import React, { useEffect } from 'react';
import logo from 'assets/svg/logo.svg';
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import Input from 'components/molecules/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { loadExample } from 'services/example.service';

const App = (): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any): Promise<void> => {
    return await new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 2000);
    });
  };

  useEffect(() => {
    loadExample()
      .then(response => {
        console.log(
          '🚀 ~ file: App.tsx ~ line 34 ~ loadExample ~ response',
          response
        );
      })
      .catch(e => {
        console.log('🚀 ~ file: App.tsx ~ line 36 ~ loadExample ~ e', e);
      });
  }, []);

  return (
    <Grid
      height={'100vh'}
      width={'100vw'}
      alignContent={'center'}
      justifyContent={'center'}
    >
      <Box width={'500px'} boxShadow={'2xl'} p={10}>
        <Flex justifyContent={'center'}>
          <Image src={logo} width={'100px'} height={'100px'} />
        </Flex>

        <Text fontSize={'2xl'} textAlign={'center'} fontWeight={600} mb={6}>
          Starter Kit
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid gap={5}>
            <Input
              label="Email"
              placeholder="Digite aqui"
              name="email"
              type={'email'}
              control={control}
              error={errors.email}
            />

            <Input
              label="Password"
              placeholder="Digite aqui"
              name="password"
              type={'password'}
              control={control}
              error={errors.password}
            />

            <Button
              mt={4}
              colorScheme="purple"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default App;

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .min(8, 'Minimo 8 dígitos')
    .required('Senha obrigatória'),
});
